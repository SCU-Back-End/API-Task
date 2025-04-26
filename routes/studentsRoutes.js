const router = require('express').Router();
const {
    addHardcodedStudent,
    createStudent,
    getAllStudents,
    deleteStudent
} = require('../controllers/studentsController');

router.post('/students/hardcoded', addHardcodedStudent);
router.post('/students', createStudent);
router.get('/students', getAllStudents);
router.delete('/students/:id', deleteStudent);

module.exports = router;
