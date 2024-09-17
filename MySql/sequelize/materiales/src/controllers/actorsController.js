const db = require("../database/models/index");

const actorsController = {
  list: (req, res) => {
    db.Actor.findAll()
      .then((actors) => {
        res.render("actorsList", { actors });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  detail: (req, res) => {
    db.Actor.findByPk(req.params.id)
      .then((actor) => {
        res.render("actorsDetail", { actor });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  create: (req, res) => {
    res.render("actorsAdd");
  },
  store: (req, res) => {
    db.Actor.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      rating: req.body.rating,
      favorite_movie_id: req.body.favorite_movie_id,
    })
      .then((actor) => {
        res.redirect(`/actors/detail/${actor.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  edit: (req, res) => {
    db.Actor.findByPk(req.params.id)
      .then((actor) => {
        res.render("actorsEdit", { actor });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  update: (req, res) => {
    db.Actor.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        rating: req.body.rating,
        favorite_movie_id: req.body.favorite_movie_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then(() => {
        res.redirect(`/actors/detail/${req.params.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  delete: (req, res) => {
    db.Actor.findByPk(req.params.id)
      .then((actor) => {
        res.render("actorsDelete", { actor });
      })
      .catch((error) => {
        console.log(error);
      });
    },
  destroy: (req, res) => {
    db.Actor.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.redirect("/actors/list");
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

module.exports = actorsController;