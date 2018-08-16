const express = require('express');
const app = express.Router();
const { Respuesta }= require('../controllers');
app.post('/', Respuesta.validaRespuesta);
module.exports = app;