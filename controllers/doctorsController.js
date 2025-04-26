const Doctor = require('../models/doctors');

exports.createDoctor = async (req, res) => {
    const payload = req.query;
    const expected = ['name', 'age', 'phone'];

    const extra = Object.keys(payload).filter((k) => !expected.includes(k));
    if (extra.length) {
        return res.status(400).json({
            message: 'Unexpected fields: ' + extra.join(', '),
            data: payload
        });
    }

    for (const field of expected) {
        if (!payload[field]) {
            return res.status(400).json({ message: `Missing field: ${field}` });
        }
    }

    try {
        const doctor = await new Doctor(payload).save();
        res.status(201).json({ message: 'Doctor added successfully', doctor });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateDoctorName = async (req, res) => {
    const { oldName, newName } = req.query;
    if (!oldName || !newName) {
        return res.status(400).json({ message: 'oldName and newName are required' });
    }

    try {
        const doctor = await Doctor.findOneAndUpdate({ name: oldName }, { name: newName }, { new: true });
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.status(200).json({ message: 'Doctor name updated', doctor });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
