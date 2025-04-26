const Student = require('../models/students');

exports.addHardcodedStudent = async (req, res) => {
    const data = {
        name: 'Ahmed',
        age: 20,
        level: 'Sophomore',
        address: 'Nowhere'
    };
    try {
        const student = await new Student(data).save();
        res.status(200).json({ message: 'Student added successfully', student });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.createStudent = async (req, res) => {
    const payload = req.body;
    const expected = ['name', 'age', 'level', 'address'];

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
        const student = await new Student(payload).save();
        res.status(201).json({ message: 'Student added successfully', student });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAllStudents = async (_req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ students });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted', student });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
