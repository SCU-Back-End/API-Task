const mongoose = require('mongoose');
const db = require('./db');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: String, required: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);