const path = require('path');
const db = require('../../database/models');

const mediosAPIController = {
    'list': async (req, res) => {
        //Devuelve la información sobre los tipos de medios utilizados en el grabado de las canciones
        try {
            const medios = await db.Medio.findAll();
            return res.json(medios);
        } catch (error) {
            console.log(error);
            return res.json(error);
        }
    }
}
module.exports = mediosAPIController;