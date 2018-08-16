const Debug = require('debug');
const { Respuesta, Validacion } = require('../models');
const { listar, crear, mostrar, actualizar } = require('../utils/dao');
const { mensajeError, mensajeExito } = require('../utils/handleResponse');
const { callRestService } = require('../utils/workServices');
const { validaRespuesta } = require('../middleware/validador');
const debug = new Debug('respuesta');
module.exports = {
  validaRespuesta: async (req, res) => {
    let valido = true;
    let mensaje = '';
    const contenido = req.body;
    try {
      if (!Array.isArray(contenido)) {
        throw new Error(`Los datos enviados no conforman un Array`);
      }
      // await crear (Validacion.db, { peticion: contenido });
      await Promise.all(contenido.map(async(persona, index) => {
        let  respuestaGuardada;
        if (!persona.hasOwnProperty('idRespuesta') && !persona.idRespuesta) {
          throw new Error(`No se encontró la respuesta de origen para la persona en la fila ${ index + 1 }`);
        }
        respuestaGuardada = await mostrar(Respuesta.db, { id: persona.idRespuesta });
        if (!respuestaGuardada) {
          valido = false;
          mensaje += `La persona en la fila ${index + 1} no paso la validación de datos.\n`;
          throw new Error(`No se encontró la respuesta de origen para la persona en la fila ${ index + 1 }`);
        }
        const respuestaValidacion = validaRespuesta(respuestaGuardada.respuesta, persona);
        if (!respuestaValidacion.valido) {
          mensaje += `La persona en la fila ${index + 1} no paso la validación de datos.\n ${respuestaValidacion.mensaje}`;
          valido = false;
        }
      }));
      if (!valido) {
        throw new Error (`Ocurrió un error en la verificación de datos. ${mensaje}`);
      }
      mensajeExito(res, `La verificación de datos fue realizada con éxito. ${mensaje}`, 200);
    } catch (error) {
      mensajeError(res, error.message, 400);
    }
  }
}