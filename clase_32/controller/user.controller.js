const {validationResult} = require('express-validator');
const session = require('express-session');



const userController = {
    login: (req, res) => {
        res.render('login.ejs');
    },
    validation: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            if (req.body.name === "Hernan"){
                req.session.user = {
                    name: req.body.name,
                    color: req.body.color,
                    email: req.body.email,
                    age: req.body.age
                }
                console.log("Correcto", req.session.user);
                return res.redirect('/bienvenido');
            }else {
                errors = {
                    errors: [
                        {
                            value: '',
                            msg: 'Usuario no registrado',
                            param: 'name',
                            location: 'body'
                        }
                    ]
                }
                return res.render('login.ejs', { errors: errors.array(), old: req.body});
            } 

        }else {
            return res.render('login.ejs', { errors: errors.array(), old: req.body});
        }

        // res.redirect('/bienvenido');
        // res.render('bienvenido.ejs', { user: req.body });
    },
    bienvenido: (req, res) => {
        res.render('bienvenido.ejs', { user: req.session.user });
    },
    logout: (req, res) => {
        res.send(user.name + ' ha cerrado sesión');
        // req.session.destroy();
        // res.redirect('/login');
    }
}

module.exports = userController;