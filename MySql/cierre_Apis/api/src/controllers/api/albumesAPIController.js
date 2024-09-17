const path = require('path');
const db = require('../../database/models');

const albumesAPIController = {
    list: async (req, res) => {
        //Devuelve la información de todos los albumes asociados con cada uno de los artistas registrados en nuestra plataforma
        try {
            const albumes = await db.Album.findAll({
                include: ['artista']
            });
            return res.status(200).json(albumes);

        } catch (error) {
            console.log(`ocurrio un error: `, error);
            return res.json(error);
            
        }
    },
    detail: async (req, res) => {
        //Devuelve el detalle de un album asociado a un (" id ") de un artista indicado en la ruta o en la query string
        try {
            const album = await db.Album.findByPk(req.params.id, {
                include: ['artista']
            });
            return res.status(200).json(album);
        } catch (error) {
            
        }


    }
}

module.exports = albumesAPIController;