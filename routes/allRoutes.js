/**
 * @swagger
 * /all:
 *   get:
 *     summary: Get all students and doctors
 *     responses:
 *       200:
 *         description: Combined list of students and doctors
 */

const router = require('express').Router();
const { getAllData } = require('../controllers/globalController');

router.get('/all', getAllData);

module.exports = router;
