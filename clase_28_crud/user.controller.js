const fs = require('fs');
const path = require('path');
const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, './public/images/avatar'))
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
})

const upload = multer({ storage: storage });

let usersList = fs.readFileSync('users.json', 'utf-8');
let usuarioArray = JSON.parse(usersList);

const userController = {
    crearUsuario: (req, res) => {
        const userNew = {
            "id": (usuarioArray.length + 1),
            "nombre": req.body.nombre,
            "apellido": req.body.apellido,
            "email": req.body.email
        }
        usuarioArray.push(userNew)
        res.send(usuarioArray);
        fs.writeFileSync('users.json', JSON.stringify(usuarioArray));
    },
    listarUsuarios: (req, res) => {
        res.send(usuarioArray);
    },
    actualizarUsuario: (req, res) => {
        const id = req.body.id;
        const usuario = usuarioArray.find(usuario => usuario.id == id);
        if (!usuario) {
            res.send('Usuario no encontrado');
        }
        const index = usuarioArray.indexOf(usuario);
        usuarioArray.splice(index, 1);
        usuario.nombre = req.body.nombre;
        usuario.apellido = req.body.apellido;
        usuario.email = req.body.email
        usuarioArray.push(usuario);
        fs.writeFileSync('users.json', JSON.stringify(usuarioArray));
        res.send(usuario);


    },
    borrarUsuario: (req, res) => {
        const id = req.params.id;
        const usuario = usuarioArray.find(usuario => usuario.id == id);
        if (!usuario) {
            res.send('Usuario no encontrado');
        }
        const index = usuarioArray.indexOf(usuario);
        usuarioArray.splice(index, 1);
        fs.writeFileSync('users.json', JSON.stringify(usuarioArray));
        res.send(usuario);
    },
    buscarUsuario: (req, res) => {
        const id = req.params.id;
        const usuario = usuarioArray.find(usuario => usuario.id == id);
        if (!usuario) {
            res.send('Usuario no encontrado');
        }
        res.send({usuario: usuario});
    }

}

module.exports = userController;