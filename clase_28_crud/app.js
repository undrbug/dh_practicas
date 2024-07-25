const express = require('express');
const methodOverride = require('method-override');
const userRouter = require('./user.router');
const path = require('path');
const ejs = require('ejs');


//dirname guarda la ruta actual. La ruta desde donde se esta ejecutando la sentencia
// const ruta = path.join(__dirname, 'users/');
// console.log(ruta);
// fs.writeFileSync(`users.json`, "pepe: otro" );

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.resolve(__dirname,'public')));

const PORT = 3000 || process.env.PORT;

app.use(methodOverride('_method'));

app.use('/', userRouter)

app.use((req, res, next) => {
    res.status(404).render('not-found.ejs');
})

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Algo salió mal');
// })

// fs.writeFileSync('users.json', JSON.stringify(usersArray));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
