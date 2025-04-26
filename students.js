const mongoose = require('mongoose');
const db = require('./db');

const studentSchema = new mongoose.Schema({
  name: { type: String,},
  age: { type: Number,},
  level: { type: String,},
  address: { type: String,}
});

module.exports = mongoose.model('Student', studentSchema);