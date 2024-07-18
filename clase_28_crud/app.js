const express = require('express');
const methodOverride = require('method-override');
const userRouter = require('./user.router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', 'views');


const PORT = 3000 || process.env.PORT;

app.use(methodOverride('_method'));

app.use('/', userRouter)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
