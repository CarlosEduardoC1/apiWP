const express = require('express');
var cors = require('cors');
const query = require("./db");
const app = express();

const cadastro = require("./routes/cadastro");
const log = require("./routes/log");
const financeiro = require("./routes/financeiro");


app.use(cors());
app.options('*', cors());
app.use(express.json({ limit: '50mb' }));

app.use('/cadastro', cadastro);
app.use('/log', log);
app.use('/financeiro', financeiro);


app.listen(process.env.PORT || 3080, function () {
    const sqlite = require('sqlite3').verbose();
    var db = new sqlite.Database('suporte.S3DB', (err) => {
        if (err) console.log(err);
        else {
            db.run(query.createTableAgendamentos, (err) => { if (err) console.log(err); else console.log("Tabela Agendamentos criada com sucesso") });
            db.run(query.createTableFinanceiro, (err) => { if (err) console.log(err); else console.log("Tabela Financeiro criada com sucesso") });
            db.run(query.createTableLogsTarefas, (err) => { if (err) console.log(err); else console.log("Tabela LogsTarefas criada com sucesso") });
        }
    });
    db.close();
    console.log("O servidor está de pé na porta %d!", this.address().port, app.settings.env);
})