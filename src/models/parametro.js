const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = Schema.Types;
let schema = Schema({
  clave: { type: String, required: true },
  valor: { type: String, required: true },
  grupo: { type: String, required: true },
  estado: { type: String, required: true, default: true }
});
const db = mongoose.model('parametro', schema, 'parametro');
module.exports = {
  db, schema
}