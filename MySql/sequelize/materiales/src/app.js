const express = require('express');
const path = require('path');
const urlEncoded = require('express')
const indexRouter = require('./routes/index');
const methodOverride = require('method-override');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const actorsRoutes = require('./routes/actorsRoutes');
const apiGenresRoutes = require('./routes/api/genresRoutes');
const apiMoviesRoutes = require('./routes/api/moviesRoutes');

const app = express();
const PORT = 3000 || process.env.PORT;

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);
app.use('/actors', actorsRoutes);
app.use('/api', apiGenresRoutes);
app.use('/api', apiMoviesRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}` ));
