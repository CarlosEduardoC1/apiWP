
exports.insert = `INSERT INTO logstarefas (cliente, dtAgendamento, hrAgendamento, dtFinalizacao, hrFinalizacao
    , solicita, tipo,numOS, email, placas, servico,troca,situacao,img,dtCadastro,hrInicio,tecnico,clienteNome,tmpAtendimento
    ,minutosAtendimento,cobranca,valorCobranca,statusPagamento,assinou,dataCobranca) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

exports.select = `SELECT * FROM logstarefas`;

exports.delete = `DELETE FROM arquivo WHERE id = ?`;

exports.updtDT = `UPDATE logstarefas SET dataCobranca = ? WHERE id = ?`;

exports.insertID = `INSERT INTO logstarefas (id, cliente, dtAgendamento, hrAgendamento, dtFinalizacao, hrFinalizacao
    , solicita, tipo,numOS, email, placas, servico,troca,situacao,img,dtCadastro,hrInicio,tecnico,clienteNome,tmpAtendimento
    ,minutosAtendimento,cobranca,valorCobranca,assinou) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

exports.getFinais = `SELECT id, solicita, cliente, cobranca, dtFinalizacao, numOS, tipo, tmpAtendimento, situacao, email, servico, clienteNome, dataCobranca FROM logstarefas 
ORDER by cobranca`;