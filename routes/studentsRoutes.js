/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get all students
 *     responses:
 *       200:
 *         description: A list of students
 *   post:
 *     summary: Create a new student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *               level:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Student created
 *
 * /students/hardcoded:
 *   post:
 *     summary: Create a hardcoded student
 *     responses:
 *       201:
 *         description: Student created
 *
 * /students/{id}:
 *   delete:
 *     summary: Delete a student by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Student deleted
 */

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
