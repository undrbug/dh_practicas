const db = require("../database/models/index");

const moviesController = {
  //traer todos los registros de la tabla movies
  list: (req, res) => {
    db.Movie.findAll({
      // include: [{association: 'genres'},
      //   {association: 'actors'}]
    })
      .then((movies) => {
        // res.json(movies);
        res.render("moviesList", { movies });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //traer los registros de la tabla movies ordenados por release_date de forma descendente
  new: (req, res) => {
    db.Movie.findAll({
      order: [["release_date", "DESC"]],
    })
      .then((movies) => {
        const formattedMovies = movies.map((movie) => {
          const releaseDate = new Date(movie.release_date);
          const day = String(releaseDate.getDate()).padStart(2, "0");
          const month = String(releaseDate.getMonth() + 1).padStart(2, "0");
          const year = releaseDate.getFullYear();
          return {
            ...movie.dataValues, // Copia todos los valores originales
            release_date: `${day}/${month}/${year}`, // Sobrescribe la fecha formateada
          };
        });
        res.render("newestMovies", { movies: formattedMovies });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //traer los 5 registros de la tabla movies con mayor rating
  recomended: (req, res) => {
    db.Movie.findAll({
      order: [["rating", "DESC"]],
      limit: 5,
    })
      .then((movies) => {
        res.render("recommendedMovies", { movies });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //traer un registro de la tabla movies por id
  detail: (req, res) => {
    db.Movie.findByPk(req.params.id, {
      include: [{ association: "genres" }, { association: "actors" }],
    })
      .then((movie) => {
        res.json(movie);
        // res.render("moviesDetail", { movie });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //traer la vista para agregar un registro en la tabla movies
  add: (req, res) => {
    db.Genre.findAll().then((genres) => {
      res.render("moviesAdd.ejs", { genres });
    });
  },
  //crear un registro en la tabla movies
  create: (req, res) => {
    const { title, rating, awards, release_date, length, genre_id } = req.body;
    db.Movie.create({
      title: title,
      rating: rating,
      awards: awards,
      release_date: release_date,
      length: length,
      genre_id: genre_id,
    })
      .then((movie) => {
        // res.json(movie);
        res.redirect(`/movies/detail/${movie.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //traer la vista para edit un registro en la tabla movies
  edit: (req, res) => {
    const promiseMovie = db.Movie.findByPk(req.params.id);
    const promiseGenres = db.Genre.findAll();
    Promise.all([promiseMovie, promiseGenres])
      .then(([movie, genres]) => {
        res.render("moviesEdit.ejs", { movie, genres });
      })
      .catch((error) => {
        console.log(error);
      });

    // db.Movie.findByPk(req.params.id)
    //   .then((movie) => {
    //     res.render("moviesEdit.ejs", { movie });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
  //editar un registro de la tabla movies por id
  update: (req, res) => {
    const { title, rating, awards, release_date, length, genre_id } = req.body;
    db.Movie.update(
      {
        title: title,
        rating: rating,
        awards: awards,
        release_date: release_date,
        length: length,
        genre_id: genre_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((movie) => {
        // res.json(movie);
        res.redirect(`/movies`);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //traer la vista para eliminar un registro en la tabla movies
  delete: (req, res) => {
    db.Movie.findByPk(req.params.id)
      .then((movie) => {
        res.render("moviesDelete.ejs", { movie });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //eliminar un registro de la tabla movies por id
  destroy: (req, res) => {
    db.Movie.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((movie) => {
        res.redirect("/movies");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  search: (req, res) => {
    db.Movie.findAll({
      where: {
        title: {
          [db.Sequelize.Op.like]: "%" + req.query.moviesearch + "%",
        },
      },
    })
      .then((movies) => {
        if (movies.length === 0) {
          let url = `http://www.omdbapi.com/?apikey=67646c63&t=${req.query.moviesearch}`;
          fetch(url)
          .then((response) => response.json())
          .then((movies) => {
            //la api no es de las mejores. Devuelve un objeto y no un array
            console.log(movies); 
            let movieArr = [movies]
            res.render("moviesList", { movies : movieArr });
          })
          .catch((error) => {
            console.log("Error en OMDB API:", error);
          });
        } else {
          res.render("moviesList", { movies });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

module.exports = moviesController;
