const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = Schema.Types;
let schema = Schema({
  configuracion: {type: ObjectId, ref: 'configuracion'},
  respuesta: { type: Object, required: true },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  deleteAt: { type: Date, default: Date.now },
  deleted: false
});
const db = mongoose.model('respuesta', schema, 'respuesta');
module.exports = {
  db, schema
}