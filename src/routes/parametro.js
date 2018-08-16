const express = require('express');
const app = express.Router();
const { Parametro }= require('../controllers');
app.get('/', Parametro.listar);
app.get('/segip/status', Parametro.statusSegip);
module.exports = app;