const express = require('express');


let usuario = {
    id: null,
    nombre: null,
};

const usuarioArray = []

const userController = {
    crearUsuario: (req, res) => {
        usuario.id = (usuarioArray.length + 1);
        usuario.nombre = req.body.nombre;
        usuarioArray.push(usuario)
        res.send(usuario);
    },
    listarUsuarios: (req, res) => {
        res.send(usuarioArray);
    },
    actualizarUsuario: (req, res) => {
        const id = req.body.id;
        const usuario = usuarioArray.find(usuario => usuario.id == id);
        usuario.nombre = req.body.nombre;
        res.render({usuario: usuario});


    },
    borrarUsuario: (req, res) => {
        const id = req.params.id;
        const usuario = usuarioArray.find(usuario => usuario.id == id);
        const index = usuarioArray.indexOf(usuario);
        usuarioArray.splice(index, 1);
        res.render({usuario: usuario});
    },
    buscarUsuario: (req, res) => {
        const id = req.params.id;
        const usuario = usuarioArray.find(usuario => usuario.id == id);
        res.render({usuario: usuario});
    }

}

module.exports = userController;