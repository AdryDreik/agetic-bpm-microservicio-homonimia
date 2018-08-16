const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { ObjectId } = Schema.Types;
let schema = Schema({
  version: { type: String, required: true },
  entrada: { type: Object, required: true },
  campos: { type: Object, required: true },
  contrastar: { type: Object, required: true },
  recuperar: { type: Object, required: true },
  deleted: { type: Boolean }
});
const db = mongoose.model('parametro', schema, 'parametro');
module.exports = {
  db, schema
}