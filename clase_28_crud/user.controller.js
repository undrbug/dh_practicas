const fs = require('fs');
const express = require('express');


let usersList = fs.readFileSync('users.json', 'utf-8');
let usuarioArray = [];
if (usersList != '') {
    usuarioArray = JSON.parse(usersList);
}

const userController = {
    crearUsuarioVista: (req, res) => {
        res.render('altaUsuario.ejs');
    },
    crearUsuario: (req, res) => {
        const userNew = {
            "id": (usuarioArray.length + 1),
            "nombre": req.body.nombre,
            "apellido": req.body.apellido,
            "email": req.body.email
        }
        usuarioArray.push(userNew)
        fs.writeFileSync('users.json', JSON.stringify(usuarioArray));
        res.render('listarUsuarios.ejs', { usuarioArray: usuarioArray });
    },
    listarUsuarios: (req, res) => {
        res.render('listarUsuarios.ejs', { usuarioArray: usuarioArray });
        
    },
    actualizarUsuario: (req, res) => {
        const {id} = req.params;
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
        res.redirect('/');


    },
    borrarUsuario: (req, res) => {
        const {id} = req.params;
        const usuario = usuarioArray.find(usuario => usuario.id == id);
        if (!usuario) {
            res.send('Usuario no encontrado');
        }
        const index = usuarioArray.indexOf(usuario);
        usuarioArray.splice(index, 1);
        fs.writeFileSync('users.json', JSON.stringify(usuarioArray));
        res.redirect('/users');
    },
    buscarUsuario: (req, res) => {
        const id = req.params.id;
        const usuario = usuarioArray.find(usuario => usuario.id == id);
        if (!usuario) {
            res.send('Usuario no encontrado');
        }
        res.send({usuario: usuario});
    },
    editarUsuario: (req, res) => {
        const id = req.params.id;
        const usuario = usuarioArray.find(usuario => usuario.id == id);
        res.render('editarUsuario.ejs', {usuario: usuario});
    }

}

module.exports = userController;