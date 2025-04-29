/**
 * @swagger
 * /doctors:
 *   post:
 *     summary: Create a new doctor via query params
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: age
 *         required: true
 *         schema:
 *           type: number
 *       - in: query
 *         name: phone
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Doctor created
 *
 * /doctors/update-name:
 *   put:
 *     summary: Update a doctor’s name via query params
 *     parameters:
 *       - in: query
 *         name: oldName
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: newName
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Doctor name updated
 */

const router = require('express').Router();
const { createDoctor, updateDoctorName } = require('../controllers/doctorsController');

router.post('/doctors', createDoctor);
router.put('/doctors/update-name', updateDoctorName);

module.exports = router;
