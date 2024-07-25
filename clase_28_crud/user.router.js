const router = require('express').Router();
const userController = require('./user.controller');
const fileupload = require('./services/fileUpload');


router.get('/', (req, res) => {
    res.render('index.ejs');
});
router.get('/users', userController.listarUsuarios);
router.get('/users/add', userController.crearUsuarioVista);
router.post('/users/add', fileupload.single('imagen'), userController.crearUsuario);
router.get('/users/:id', userController.buscarUsuario);
router.get('/users/edit/:id', userController.editarUsuario);
router.put('/users/:id', fileupload.single('imagen'), userController.actualizarUsuario);
router.delete('/users/:id', userController.borrarUsuario);


module.exports = router;