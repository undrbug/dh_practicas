const express = require('express');
const router = express.Router();
const apiMoviesController = require('../../controllers/api/moviesController');

router.post('/movies', apiMoviesController.create);
router.delete('/movies/:id', apiMoviesController.delete);
router.get('/movies', apiMoviesController.getAll)
router.patch('/movies', apiMoviesController.update)

module.exports = router;
