const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = Schema.Types;
let schema = Schema({
  operacion: { type: String, required: true },
  entrada: { type: Object, required: true },
  salida: { type: Object, required: true },
  obligatorio: { type: Object, required: true },
  origen: { type: String, required: true },
  deleted: { type: Boolean, default: false },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  deleteAt: { type: Date, default: Date.now },
  deleted: false
});
const db = mongoose.model('configuracion', schema, 'configuracion');
module.exports = {
  db, schema
}