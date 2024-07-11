const express = require('express');
const path = require('path');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('home');
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, (error) => {
    error ? console.error(error) : console.log(`Server is running on http://localhost:${PORT}`);
});