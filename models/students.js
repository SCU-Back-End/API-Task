const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    level: { type: String, required: true },
    address: { type: String, required: true }
});

module.exports = mongoose.models.Student || mongoose.model('Student', studentSchema);
