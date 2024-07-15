const express = require('express');
const data = require('../model/data.json');
const aboutData = require('../model/about.json');


const app = express();

const mainController = {
    home: (req, res) => {
        res.render('index.ejs');
    },
    detalle: (req, res) => {
        const id = req.params.id;
        const dataquery = data.filter((item) => item.id == id);
        //una forma de hacerlo
        const menu = {
            'id': dataquery[0].id,
            'nombre': dataquery[0].nombre,
            'descripcion': dataquery[0].descripcion,
            'imagen': dataquery[0].imagen,
            'precio': dataquery[0].precio
        }
        //otra forma de hacer lo mismo
        //const menu2 = dataquery[0];
        res.render('home.ejs', {menu: menu});
    },
    about: (req, res) => {
        const random = Math.floor(Math.random() * aboutData.length);
        const about = aboutData[random];
        res.render('about.ejs', {about: about});
    }

};

module.exports = mainController;
