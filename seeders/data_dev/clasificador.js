var id = require('pow-mongodb-fixtures').createObjectId
exports.clasificador = {

  item1: {
    _id: id(),
    clave: '10015',
    valor: '10015',
    incluye: 'Incluye la venta de motocicletas, bicicletas',
    excluye: 'Incluye la venta de cuadratracks',
    grupo: '15000',
    subclases_homonimia: '10015,10017,10019'
  }
}



