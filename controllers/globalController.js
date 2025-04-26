const Student = require('../models/students');
const Doctor = require('../models/doctors');

exports.getAllData = async (_req, res) => {
    try {
        const [students, doctors] = await Promise.all([Student.find(), Doctor.find()]);
        res.status(200).json({ students, doctors });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
