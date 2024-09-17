const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/actorsController');

router.get('/list', actorsController.list);
router.get('/detail/:id', actorsController.detail);

router.get('/add', actorsController.create);
router.post('/add', actorsController.store);

router.get('/edit/:id', actorsController.edit);
router.patch('/edit/:id', actorsController.update);

router.get('/delete/:id', actorsController.delete);
router.delete('/delete/:id', actorsController.destroy);
module.exports = router;