const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true }
});

module.exports = mongoose.models.Doctor || mongoose.model('Doctor', doctorSchema);
