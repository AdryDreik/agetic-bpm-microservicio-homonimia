const { Parametro } = require('../models/');
const { mensajeExito, mensajeError } = require('../utils/handleResponse');
const { crear, eliminar, mostrar, actualizar, listar }= require('../utils/dao');
const { callRestService } = require('../utils/workServices');
const https = require('https');
module.exports =  {
    listar : async (req, res) => {
    try{
        const respuesta = await listar(Parametro.db, { tipo: 'parametro'},{},{});
        return mensajeExito(res, 'Datos obtenidos correctamente',200, respuesta);
    }
    catch(error){
      return mensajeError(res, error,400);
    }
  },
  statusSegip : async (req, res) => {
    try {
        const respuesta = await listar(Parametro.db, { tipo: 'parametro'},{},{});
        if (!respuesta) {
          throw new Error('No se encontron parametro');
        }
        const urlStatus = respuesta.listado[0].contrastar.urlStatus;
        const parametroMetodo = respuesta.listado[0].contrastar;
        const peticion = {
          url: urlStatus,
          method: 'get',
          headers: {
            Authorization: `${parametroMetodo.token}`,
            'Content-Type': 'application/json'
          },
          httpsAgent: new https.Agent({ rejectUnauthorized : false }),
          json: true
        }
        const respuestaStatus = await callRestService(peticion);
        if (!respuestaStatus) {
          throw new Error ('El servicio no se encuenta disponible');
        }
        if (respuestaStatus.status === 200) {
          return mensajeExito(res, respuestaStatus.data.estado, 200, {});
        }
    }
    catch(error){
      return mensajeError(res, error.message,400);
    }
  }
}