const express = require('express');
const path = require('path');

const app = express();

const mainController = {
    home: (req, res) => {
        res.render('home');
    }
};

module.exports = mainController;
