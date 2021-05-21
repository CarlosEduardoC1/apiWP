const express = require('express');
const routes = express.Router();
const http = require('http');
const controller = require('../controller/financeiro');

routes.post('/save-data', controller.save);
routes.get('/get-data', controller.get);
routes.post('/upd/:id', controller.updateOBS);
routes.post('/pgto/:id', controller.updatePGTO);
routes.post('/filter-schedule/:filtro', controller.getWhere);
routes.delete('/delete-data/:id', controller.delete);


module.exports = routes;