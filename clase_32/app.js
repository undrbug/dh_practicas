const express = require('express');
const ejs = require('ejs');
const userRouter = require('./router/user.router');
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'topsecret',
    resave: true,
    saveUninitialized: true,
    }));
app.set('view engine', 'ejs');
app.set('views', 'views');

const PORT = 3000 || process.env.PORT;


app.use('/', userRouter)

// app.use((req, res, next) => {
//     res.status(404).render('not-found.ejs');
// })

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Algo salió mal');
// })

// fs.writeFileSync('users.json', JSON.stringify(usersArray));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
