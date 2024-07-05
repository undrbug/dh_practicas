const express = require('express');
const path = require('path');

const app = express();


const mainController = {
    home: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/home.html'));
    },
    about: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/about.html'));
    }
}

module.exports = mainController;