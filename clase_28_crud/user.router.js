const router = require('express').Router();
const userController = require('./user.controller');

router.get('/', (req, res) => {
    res.render('index.ejs');
});
router.get('/users', userController.listarUsuarios);
router.get('/users/:id', userController.buscarUsuario);
router.post('/users', userController.crearUsuario);
router.put('/users', userController.actualizarUsuario);
router.delete('/users/:id', userController.borrarUsuario);


module.exports = router;

