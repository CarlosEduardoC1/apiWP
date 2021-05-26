
const sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('suporte.S3DB');
const query = require('../db/financeiro');


exports.save = async (req, res, next) => {
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
        , req.body.hrInicio
        , req.body.tecnico
        , req.body.clienteNome
        , req.body.tmpAtendimento
        , req.body.minutosAtendimento
        , req.body.cobranca
        , req.body.valorCobranca
        , req.body.statusPagamento
        , req.body.assinou
        , req.body.obsfinanceiro
        , (err) => {
            if (err) { res.status(400).json({ msg: "Não foi possível cadastrar financeiro", status: 400, erro: err }); console.log(err); }
            else {
                db.close(); res.status(200).json({ msg: "Financeiro cadastrado com sucesso!", status: 200 });
            }
        });
}

exports.get = async (req, res, next) => {
    var params = []
    db.all(query.select, params, (err, rows) => {
        if (err) { res.status(400).json({ msg: "Não foi possível buscar agendamentos", status: 400 }) }
        else {
            db.close();
            console.log(rows);
            res.status(200).json(rows);
        }
    });
}

exports.updateOBS = async (req, res, next) => {
    db.all(query.updOBS, req.body.obsfinanceiro, req.params.id, (err, rows) => {
        if (err) { res.status(400).json({ msg: "Não foi possível buscar dados", status: 400 }) }
        else {
            db.close();
            res.status(200).json(rows);
        }
    });
}

exports.updatePGTO = async (req, res, next) => {
    db.all(query.updPGTO, req.body.statusPagamento, req.params.id, (err, rows) => {
        if (err) { res.status(400).json({ msg: "Não foi possível buscar dados", status: 400 }) }
        else {
            db.close();
            res.status(200).json(rows);
        }
    });
}

exports.getWhere = async (req, res, next) => {
    db.all(query.where, req.params.filtro, (err, rows) => {
        if (err) { res.status(400).json({ msg: "Não foi possível buscar dados", status: 400 }) }
        else {
            db.close();
            res.status(200).json(rows);
        }
    });
}

exports.delete = async (req, res, next) => {
    db.run(query.delete, req.params.id, (err, result) => {
        if (err) { res.status(400).json({ msg: 'Erro ao deletar.', status: 400 }) }
        else {
            db.close(); res.status(200).json({ msg: 'Deletado com sucesso!', result: result })
        }
    })
}