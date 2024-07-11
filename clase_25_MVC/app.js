const express = require('express');
const path = require('path');
const routerAlgo = require('./routers/mainRouter.js');

const app = express();

const PORT = 3000 || process.env.PORT;

//ruta de archivos estaticos
app.use(express.static(path.resolve(__dirname, './public')));




app.use("/", routerAlgo)

// app.get('/', (req, res) => {
//     res.sendFile(__dirname, 'home.html');
// });






app.listen(PORT, (error) => {
    error ? console.log(`Error en el servidor: ${error}`) : console.log(`Servidor corriendo en http://localhost:${PORT}`);
});