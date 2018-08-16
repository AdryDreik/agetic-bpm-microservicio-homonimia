const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = Schema.Types;
let schema = Schema({
  clave: { type: String, required: true },
  valor: { type: String, required: true },
  incluye: { type: String, required: true },
  excluye: { type: String, required: false, default: '' },
  grupo: { type: String, required: false, default: '' },
  estado: { type: String, required: true, default: 'ACTIVO' },
  subclases_homonimia: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  deleteAt: { type: Date, default: Date.now }
});
const db = mongoose.model('clasificador', schema, 'clasificador');
module.exports = {
  db, schema
}