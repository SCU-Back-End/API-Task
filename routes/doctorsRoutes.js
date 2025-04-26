const router = require('express').Router();
const { createDoctor, updateDoctorName } = require('../controllers/doctorsController');

router.post('/doctors', createDoctor);
router.put('/doctors/update-name', updateDoctorName);

module.exports = router;
