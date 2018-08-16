const express = require('express');
const app = express.Router();
const { Docs }= require('../controllers');
app.get('/', Docs.docs);
module.exports = app;