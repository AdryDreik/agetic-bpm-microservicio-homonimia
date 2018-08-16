const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const { Parametro, Docs, Configuracion, Respuesta } = require('./src/routes');
const app = express();
app.use(express.static('docs'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*') // En produccion colocar el dominio de acceso
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, X-Request-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, PUT, OPTIONS');
  next();
});
//---------------Rutas------------//
app.use('/parametros', Parametro);
app.use('/configuraciones', Configuracion);
app.use('/apidoc', Docs);
app.use('/respuestas', Respuesta);

module.exports = app;