const express = require('express');
const router = express.Router();
const artistasAPIController = require('../../controllers/api/artistasAPIController');

//Rutas
//Listado de todos los artistas
//Devolver los datos de los artistas.
router.get('/', artistasAPIController.list);
//Listado de todos los albumes asociados a un artista
router.get('/albums/:id', artistasAPIController.listAlbums);
//
router
//Agregar un artista
router.post('/create', artistasAPIController.create);
//Modificar un artista
router.put('/update/:id', artistasAPIController.update);
//Eliminar un artista
router.delete('/delete/:id', artistasAPIController.destroy);

module.exports = router;