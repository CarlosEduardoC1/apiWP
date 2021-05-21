exports.createTableAgendamentos = `CREATE TABLE IF NOT EXISTS 'agendamentos' ('id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
, 'cliente' VARCHAR(21) , 'cobranca' TEXT , 'dataCadastro' DATE , 'dtAgendamento' DATE , 'hrAgendamento' TIME 
, 'hrInicio' TIME , 'solicita' TEXT , 'tipo' TEXT)`;

exports.createTableFinanceiro = `CREATE TABLE IF NOT EXISTS 'financeiro' ('id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
, 'cliente' VARCHAR(21) , 'dtAgendamento' DATE , 'hrAgendamento' TIME , 'dtFinalizacao' DATE , 'hrFinalizacao' TIME 
, 'solicita' TEXT , 'tipo' TEXT , 'numOS' TEXT , 'email' JSON , 'placas' TEXT , 'cobranca' TEXT , 'servico' TEXT 
, 'troca' TEXT , 'situacao' TEXT , 'img' TEXT , 'dtCadastro' TEXT , 'hrInicio' TEXT , 'tecnico' TEXT , 'clienteNome' TEXT 
, 'tmpAtendimento' TEXT , 'minutosAtendimento' TEXT , 'valorCobranca' TEXT , 'statusPagamento' TEXT , 'assinou' TEXT, 'obsfinanceiro' TEXT )`;

exports.createTableLogsTarefas = `CREATE TABLE IF NOT EXISTS 'logstarefas' ('id' INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
, 'cliente' VARCHAR(21) , 'dtAgendamento' DATE , 'hrAgendamento' TIME , 'dtFinalizacao' DATE , 'hrFinalizacao' TIME 
, 'solicita' TEXT , 'tipo' TEXT , 'numOS' TEXT , 'email' JSON , 'placas' TEXT , 'cobranca' TEXT , 'servico' TEXT 
, 'troca' TEXT , 'situacao' TEXT , 'img' TEXT , 'dtCadastro' TEXT , 'hrInicio' TEXT , 'tecnico' TEXT , 'clienteNome' TEXT 
, 'tmpAtendimento' TEXT , 'minutosAtendimento' TEXT , 'valorCobranca' TEXT , 'statusPagamento' TEXT , 'assinou' TEXT, 'dataCobranca' TEXT  )`;