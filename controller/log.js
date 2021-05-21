
const sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('suporte.S3DB');
const query = require('../db/log');


exports.save = async (req, res, next) => {
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
            if (err) { res.status(400).json({ msg: "Não foi possível mover para arquivos", status: 400, erro: err }); console.log(err); }
            else { res.status(200).json({ msg: "Movido para arquivos", status: 200 }); }
        });
}

exports.get = async (req, res, next) => {
    var params = []
    db.all(query.select, params, (err, rows) => {
        if (err) { res.status(400).json({ msg: "Não foi possível buscar arquivos", status: 400 }) }
        else {
            console.log(rows);
            res.status(200).json(rows);
        }
    });
}

exports.delete = async (req, res, next) => {
    db.run(query.delete, req.params.id, (err, result) => {
        if (err) { res.status(400).json({ msg: 'Erro ao deletar.', status: 400 }) }
        else { res.status(200).json({ msg: 'Deletado com sucesso!', result: result }) }
    })
}


exports.saveID = async (req, res, next) => {
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
            if (err) { res.status(400).json({ msg: "Não foi possível mover para arquivos", status: 400, erro: err }); console.log(err); }
            else { res.status(200).json({ msg: "Movido para arquivos", status: 200 }); }
        });
}

exports.updateDataCobranca = async (req, res, next) => {
    var params = []
    db.all(query.updtDT, req.body.dataCobranca, req.params.id, (err, rows) => {
        if (err) { res.status(400).json({ msg: "Não foi possível buscar arquivos", status: 400 }) }
        else {
            console.log(rows);
            res.status(200).json(rows);
        }
    });
}

exports.getFinalizadas = async (req, res, next) => {
    var params = []
    db.all(query.getFinais, params, (err, rows) => {
        if (err) { res.status(400).json({ msg: "Não foi possível buscar arquivos", status: 400 }) }
        else {
            console.log(rows);
            res.status(200).json(rows);
        }
    });
}