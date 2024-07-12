const router = require('express').Router();
const mainController = require('../controllers/main.controller.js');

router.get('/', mainController.home);
router.get('/menu/:id', mainController.menu);


module.exports = router;
