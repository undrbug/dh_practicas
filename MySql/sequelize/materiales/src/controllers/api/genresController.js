const db = require("../../database/models/index");

const ApiGenresController = {
    list: (req, res) => {
        db.Genre.findAll()
            .then((genres) => {
                res.json({
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: "/api/genres",
                    },
                    data: genres,
                });
                
            })
            .catch((error) => {
                console.log(error);
            });
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then((genre) => {
                res.json(genre);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

module.exports = ApiGenresController;