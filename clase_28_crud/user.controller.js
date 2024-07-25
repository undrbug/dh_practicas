const dataSource = require('./services/dataSource');
const uuidv4 = require('uuid').v4;

dataSource.init();

const userController = {
    crearUsuarioVista: (req, res) => {
        res.render('altaUsuario.ejs');
    },
    crearUsuario: (req, res) => {
        const avatar = (req.file) ? usuario.avatar = usuario.avatar = req.file.filename : 'default.webp';
        const userNew = {
            "id": uuidv4(),
            "nombre": req.body.nombre,
            "apellido": req.body.apellido,
            "email": req.body.email,
            "avatar": avatar
        }
        dataSource.create(userNew);
        res.render('listarUsuarios.ejs', { usuarioArray: dataSource.findAll() });
    },
    listarUsuarios: (req, res) => {
        res.render('listarUsuarios.ejs', { usuarioArray: dataSource.findAll() });
        
    },
    actualizarUsuario: (req, res) => {
        const usuario = dataSource.find(req.params.id);
        if (!usuario) {
            res.send('Usuario no encontrado');
        }
        usuario.nombre = req.body.nombre;
        usuario.apellido = req.body.apellido;
        usuario.email = req.body.email;
        (req.file) ? usuario.avatar = usuario.avatar = req.file.filename : '/images/avatar/default.webp';
        dataSource.update(usuario);
        res.redirect('/users');


    },
    borrarUsuario: (req, res) => {
        const usuario = dataSource.find(req.params.id);
        if (!usuario) {
            res.send('Usuario no encontrado');
        }
        dataSource.delete(usuario.id);
        res.redirect('/users');
    },
    buscarUsuario: (req, res) => {
        const usuario = dataSource.find(req.params.id);
        if (!usuario) {
            res.send('Usuario no encontrado');
        }
        res.send({usuario: usuario});
    },
    editarUsuario: (req, res) => {
        const usuario = dataSource.find(req.params.id);
        res.render('editarUsuario.ejs', {usuario: usuario});
    },
    cardUsuario: (req, res) => {
        const usuario = dataSource.find(req.params.id);
        if (!usuario) {
            res.send('Usuario no encontrado');
        }
        res.render('cardUsuario.ejs', {usuario: usuario});
    }
}

module.exports = userController;