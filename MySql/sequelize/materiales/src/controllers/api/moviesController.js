const db = require("../../database/models/index");
const Op = db.Sequelize.Op;

const ApiMoviesController = {
    create: (req, res) => {
        db.Movie.create(req.body)
            .then((movie) => {
                res.json({
                    meta: {
                        status: 200,
                        url: "/api/movies/" + movie.id,
                        created: "ok"                        
                    },
                    data: movie,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    },
    delete: (req, res) => {
        db.Movie.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((response) => {
                res.json({
                    status: 200,
                    movie: response,
                    msg: "Movie deleted"
                });
            })
            .catch((error) => {
                console.log(error);
            });
    },
    search: (req, res) => {
        db.Movie.findAll({
            where: {
                title: {
                    [db.Sequelize.Op.like]: "%" + req.query.title + "%"
                }
            }
        })
            .then((movies) => {
                if (movies.length === 0) {
                    return res.json({
                        status: 200,
                        msg: "Nada por aquí",
                    });
                }else {
                    res.json({
                        status: 200,
                        movies: movies
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },
    getAll: (req, res) => {
        db.Movie.findAll()
        .then((movies) => {
            if (movies.length > 0) {
                return res.status(200).json({
                    status: 200,
                    movies: movies
                })
            }else {
                return res.status(200).json({
                    status: 200,
                    msg: "Nada por aqui",
                })
            }
        })
        .catch((error) => {
            console.log(error);
        })
    },
    update: (req, res) => {
        
    }
    //apiCreate: (req, res) => {
        // const { title, rating, awards, release_date, length, genre_id } = req.body;
        //res.status(200).json({
          //data: req.body,
          //status: 200,
        //});
        // db.Movie.create(req.body)
        //   .then((movie) => {
        //     res.status(200).json({
        //       meta: {
        //         status: 201,
        //         url: "/api/movies",
        //       },
        //       data: movie,
        //     });
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
       //}
}

module.exports = ApiMoviesController;