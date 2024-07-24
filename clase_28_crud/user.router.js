const router = require('express').Router();
const userController = require('./user.controller');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, './public/images/avatar'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
})

const upload = multer({ storage: storage });

router.get('/', (req, res) => {
    res.render('index.ejs');
});
router.get('/users', userController.listarUsuarios);
router.get('/users/add', userController.crearUsuarioVista);
router.post('/users/add', userController.crearUsuario);
router.get('/users/:id', userController.buscarUsuario);
router.get('/users/edit/:id', userController.editarUsuario);
router.put('/users/:id', userController.actualizarUsuario);
router.delete('/users/:id', userController.borrarUsuario);


module.exports = router;

