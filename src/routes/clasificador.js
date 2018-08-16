const express = require('express');
const app = express.Router();
const { Clasificador } = require('../controllers');
app.get('/', Clasificador.listar);
module.exports = app;