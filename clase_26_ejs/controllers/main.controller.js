const express = require('express');
const data = require('../model/data.json');


const app = express();

const mainController = {
    home: (req, res) => {
        res.render('home.ejs');
    },
    menu: (req, res) => {
        const id = req.params.id;
        const dataquery = data.filter((item) => item.id == id);
        res.render('menu.ejs', {dataquery: dataquery});
    },

};

module.exports = mainController;
