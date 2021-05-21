
exports.insert = `INSERT INTO financeiro (cliente, dtAgendamento, hrAgendamento, dtFinalizacao, hrFinalizacao
    , solicita, tipo,numOS, email, placas, servico,troca,situacao,img,hrInicio,tecnico,clienteNome,tmpAtendimento
    ,minutosAtendimento,cobranca,valorCobranca,statusPagamento,assinou,obsfinanceiro) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

exports.select = `SELECT * FROM financeiro`;

exports.updOBS = `UPDATE financeiro SET obsfinanceiro = ? WHERE id = ?`;

exports.updPGTO = `UPDATE financeiro SET statusPagamento = ? WHERE id = ?`;

exports.where = `SELECT * FROM agendamentos where categoria = ? limit 10`;

exports.delete = `DELETE FROM financeiro WHERE id = ?`;

