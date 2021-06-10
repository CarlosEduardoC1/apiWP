
const sqlite = require('sqlite3').verbose();
const query = require('../db/log');


exports.save = async (req, res, next) => {
    var db = new sqlite.Database('suporte.S3DB');
    console.log(req.body);
    db.run(query.insert,
        req.body.cliente
        , req.body.dtAgendamento
        , req.body.hrAgendamento
        , req.body.dtFinalizacao
        , req.body.hrFinalizacao
        , req.body.solicita
        , req.body.tipo
        , req.body.numOS
        , req.body.email
        , req.body.placas
        , req.body.servico
        , req.body.troca
        , req.body.situacao
        , req.body.img
        , req.body.dtCadastro
        , req.body.hrInicio
        , req.body.tecnico
        , req.body.clienteNome
        , req.body.tmpAtendimento
        , req.body.minutosAtendimento
        , req.body.cobranca
        , req.body.valorCobranca
        , req.body.statusPagamento
        , req.body.assinou
        , req.body.dataCobranca
        , (err) => {
            if (err) { db.close(); res.status(400).json({ msg: "Não foi possível mover para arquivos", status: 400, erro: err }); console.log(err); }
            else {
                db.close(); res.status(200).json({ msg: "Movido para arquivos", status: 200 });
            }
        });
}

exports.get = async (req, res, next) => {
    var db = new sqlite.Database('suporte.S3DB');
    var params = []
    db.all(query.select, params, (err, rows) => {
        if (err) {db.close(); res.status(400).json({ msg: "Não foi possível buscar arquivos", status: 400 }) }
        else {
            db.close();
            console.log(rows);
            res.status(200).json(rows);
        }
    });
}

exports.delete = async (req, res, next) => {
    var db = new sqlite.Database('suporte.S3DB');
    db.run(query.delete, req.params.id, (err, result) => {
        if (err) {db.close();res.status(400).json({ msg: 'Erro ao deletar.', status: 400 }) }
        else {
            db.close(); res.status(200).json({ msg: 'Deletado com sucesso!', result: result })
        }
    })
}


exports.saveID = async (req, res, next) => {
    var db = new sqlite.Database('suporte.S3DB');
    db.run(query.insertID,
        req.body.id
        , req.body.cliente
        , req.body.dtAgendamento
        , req.body.hrAgendamento
        , req.body.dtFinalizacao
        , req.body.hrFinalizacao
        , req.body.solicita
        , req.body.tipo
        , req.body.numOS
        , req.body.email
        , req.body.placas
        , req.body.servico
        , req.body.troca
        , req.body.situacao
        , req.body.img
        , req.body.dtCadastro
        , req.body.hrInicio
        , req.body.tecnico
        , req.body.clienteNome
        , req.body.tmpAtendimento
        , req.body.minutosAtendimento
        , req.body.cobranca
        , req.body.valorCobranca
        , req.body.assinou
        , (err) => {
            if (err) {db.close(); res.status(400).json({ msg: "Não foi possível mover para arquivos", status: 400, erro: err }); console.log(err); }
            else {
                db.close(); res.status(200).json({ msg: "Movido para arquivos", status: 200 });
            }
        });
}

exports.updateDataCobranca = async (req, res, next) => {
    var db = new sqlite.Database('suporte.S3DB');
    var params = []
    db.all(query.updtDT, req.body.dataCobranca, req.params.id, (err, rows) => {
        if (err) {db.close(); res.status(400).json({ msg: "Não foi possível buscar arquivos", status: 400 }) }
        else {
            db.close();
            console.log(rows);
            res.status(200).json(rows);
        }
    });
}

exports.getFinalizadas = async (req, res, next) => {
    var db = new sqlite.Database('suporte.S3DB');
    var params = []
    db.all(query.getFinais, params, (err, rows) => {
        if (err) {db.close(); res.status(400).json({ msg: "Não foi possível buscar arquivos", status: 400 }) }
        else {
            db.close();
            console.log(rows);
            res.status(200).json(rows);
        }
    });
}

exports.getOs = async (req, res, next) => {
    var db = new sqlite.Database('suporte.S3DB');
    db.all(query.getOs, req.params.cliente, (err, rows) => {
        if (err) {db.close(); res.status(400).json({ msg: "Não foi possível buscar arquivos", status: 400 }) }
        else {
            db.close();
            res.status(200).json(rows);
        }
    });
}