const https = require('https');
const { Clasificador } = require('../models');
const { listar } = require('../utils/dao');
const { mensajeError, mensajeExito } = require('../utils/handleResponse');
const Debug = require('debug');
const debug = new Debug('microservicio-homonimia:');
module.exports = {
  listar: async (req, res) => {
    try {
      const respuesta = await listar(Clasificador.db, {}, {}, {});
      mensajeExito(res, 'listado recuperado correctamente', 200, respuesta);
    } catch (error) {
      mensajeError(res, error, 400)
    }
  }
}