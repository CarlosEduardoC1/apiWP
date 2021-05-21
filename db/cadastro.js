
exports.insert = `INSERT INTO agendamentos (cliente, dtAgendamento, hrAgendamento, solicita, tipo, dataCadastro, hrInicio,cobranca) VALUES (?,?,?,?,?,?,?,?)`;

exports.select = `SELECT * FROM agendamentos`;

exports.updateHour = `UPDATE agendamentos SET hrInicio = ? WHERE id = ?`;

exports.where = `SELECT * FROM cadastro WHERE categoria = ?`;

exports.update = `UPDATE cadastro SET categoria =?, especialidade= ?, medico= ?, particular= ?
, simbiose= ?, atestado= ?, bompastor= ?, hora= ? WHERE id = ?`;

exports.delete = `DELETE FROM agendamentos WHERE id = ?`;

