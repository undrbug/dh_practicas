const express = require('express');
const app = express();
// const path = require('path');
const routerMain = require('./routes/main.route.js');

// Configuración del motor de vistas
app.set('view engine', 'ejs');
app.set('views', 'views');

// Middleware para archivos estáticos
app.use(express.static('public'));

// Rutas
app.use('/', routerMain);

// Puerto de la aplicación
const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    error ? console.log(`Error en el servidor: ${error}`) : console.log(`Server running on http://localhost:${PORT}`);
    // otra forma de hacer lo mismo
    console.error(error ? error : 'Server running on http://localhost:3000')
});

