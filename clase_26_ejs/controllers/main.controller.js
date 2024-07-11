const express = require('express');
const path = require('path');

const app = express();

const mainController = {
    home: (req, res) => {
        res.render('home', {
            titulo: 'mvc-Ejs',
            subtitulo: 'Home',

        });
    }
};

module.exports = mainController;
