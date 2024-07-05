const router = require('express').Router();

const mainController = require('../controllers/mainController.js');

router.get('/', mainController.home);
router.get('/about', mainController.about);




module.exports = router