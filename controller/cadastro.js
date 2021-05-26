
const sqlite = require('sqlite3').verbose();
const query = require('../db/cadastro');


exports.save = async (req, res, next) => {
    var db = new sqlite.Database('suporte.S3DB');
    db.run(query.insert,
        req.body.cliente
        , req.body.dtAgendamento
        , req.body.hrAgendamento
        , req.body.solicita
        , req.body.tipo
        , req.body.dataCadastro
        , req.body.hrInicio
        , req.body.cobranca
        , (err) => {
            if (err) { res.status(400).json({ msg: "Não foi possível cadastrar", status: 400, erro: err }); console.log(err); }
            else {
                db.close();
                res.status(200).json({ msg: "Cadastrado com sucesso!", status: 200 });
            }
        });
}

exports.get = async (req, res, next) => {
    var db = new sqlite.Database('suporte.S3DB');
    db.all(query.select, (err, rows) => {
        if (err) { console.log(err); res.status(400).json({ msg: "Não foi possível buscar dados", status: 400 }) }
        else {
            db.close();
            console.log('success');
            res.status(200).json(rows);
        }
    });
}

exports.updateTime = async (req, res, next) => {
    var db = new sqlite.Database('suporte.S3DB');
    console.log("request")
    db.all(query.updateHour, req.body.hrInicio, req.params.id, (err, rows) => {
        if (err) { console.log('error'); res.status(400).json({ msg: "Não foi possível buscar dados", status: 400 }) }
        else {
            db.close();
            res.status(200).json({ msg: "ok" });
        }
    });
}

exports.delete = async (req, res, next) => {
    var db = new sqlite.Database('suporte.S3DB');
    db.run(query.delete, req.params.id, (err, result) => {
        if (err) { res.status(400).json({ msg: 'Erro ao deletar.', status: 400 }) }
        else {
            db.close(); res.status(200).json({ msg: 'Deletado com sucesso!', result: result })
        }
    })
}