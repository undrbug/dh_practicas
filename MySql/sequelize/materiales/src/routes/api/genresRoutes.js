const router = require('express').Router();
const apiGenresController = require('../../controllers/api/genresController');

router.get('/genres', apiGenresController.list);
router.get('/genres/detail/:id', apiGenresController.detail);

module.exports = router;