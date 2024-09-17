const path = require('path');
const db = require('../../database/models');

const genresAPIController = {
    //Devuelve datos sobre los generos de las canciones
    list: async (req, res) => {
        try {
            const generos = await db.Genero.findAll();
            return res.json(generos);
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    }
}
module.exports = genresAPIController;