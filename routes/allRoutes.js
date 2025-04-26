const router = require('express').Router();
const { getAllData } = require('../controllers/globalController');

router.get('/all', getAllData);

module.exports = router;
