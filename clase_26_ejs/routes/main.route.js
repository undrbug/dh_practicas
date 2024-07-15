const router = require('express').Router();
const mainController = require('../controllers/main.controller.js');

router.get('/', mainController.home);
router.get('/detalle/:id', mainController.detalle);
router.get('/about', mainController.about);


module.exports = router;
