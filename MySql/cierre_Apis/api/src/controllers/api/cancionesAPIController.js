const path = require('path');
const db = require('../../database/models');

const cancionesAPIController = {
    'list': async (req, res) => {
        //Devuelve la información de todas las canciones resgitradas en nuestra plataforma, tomando en cuenta las asociaciones de estas con el genero y el tipo de medio utilizado en su grabación
        try {
            const canciones = await db.Cancion.findAll({
                include: ['genero', 'medio']
            });
            return res.json(canciones);
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    },
    medios: async (req, res) => {
        //Devuelve todas las canciones ordenadas por nombre de los medios utilizados en la grabación de las canciones
        try {
            const medios = await db.Medio.findAll({
                include: ['medios']
            });
            return res.json(medios);
        } catch (error) {
            console.log(error);
            return res.json(error)
        }
    },
    genType: async (req, res) => {
        //Devuelve todas las canciones ordenadas por nombre de los generos de las canciones
        try {
            const generos = await db.Cancion.findAll({
                include: ['genero', 'medio']
            });
            return res.json(generos);
        } catch (error) {
            console.log(error);
            return res.json(error)
        }
    },
}

module.exports = cancionesAPIController;