import { v4 as uuidv4 } from 'uuid';



/* 
El Tech Leader presenta al equipo un nuevo proyecto de compra y venta de
películas. Quiere que mostremos que tenemos claro cómo hacer para exportar e
importar nuestros propios módulos. Para ello, seguiremos los siguientes pasos:

a. Crear una carpeta llamada proyecto.
b. Dentro de ella crear un archivo llamado peliculas.js. Este archivo será un
módulo que contiene una lista con algunas de nuestras películas favoritas.
Para eso nos recomiendan crear un array de objetos literales. No olvides
que este archivo es un módulo propio y por tal motivo una vez que se crea...
¿cuál debería ser nuestra última línea de código?

Por cada película se necesita conocer esta información:
i. Identificador único de la película (id)
ii. Calificación por parte de los usuarios (rating)
iii. Premios (awards).
iv. Duración de la película (length).
v. Precio (price).
vi. Género de la película (genre):
1. Acción
2. Animación
3. Aventuras
4. Comedia
5. Suspenso.

c. Una vez creado el módulo anterior, crear un nuevo archivo (app.js). Piensa
cómo hacer para lograr importar nuestro módulo (peliculas.js). Luego,
utilizando lo que sabemos sobre ciclos o bucles, muestra al usuario un listado
con el detalle de cada una de nuestras películas favoritas.
*/

//Creo un array de objetos literales con las peliculas
export let movies = [
    {
        id: uuidv4(),
        name: "The Matrix",
        rating: 4.5,
        awards: 3,
        length: 120,
        price: 200,
        genre: "Acción"
    },
    {
        id: uuidv4(),
        name: "Toy Story",
        rating: 4.8,
        awards: 5,
        length: 90,
        price: 150,
        genre: "Animación"
    },
    {
        id: uuidv4(),
        name: "Indiana Jones",
        rating: 4.3,
        awards: 2,
        length: 130,
        price: 180,
        genre: "Aventuras"
    },
    {
        id: uuidv4(),
        name: "The Hangover",
        rating: 4.1,
        awards: 1,
        length: 100,
        price: 160,
        genre: "Comedia"
    },
    {
        id: uuidv4(),
        name: "The Sixth Sense",
        rating: 4.6,
        awards: 4,
        length: 110,
        price: 170,
        genre: "Suspenso"        
    }
];

//Creo la funcion constructura Pelicula
function Pelicula(id, name, rating, awards, length, price, genre) {
    this.id = id;
    this.name = name;
    this.rating = rating;
    this.awards = awards;
    this.length = length;
    this.price = price;
    this.genre = genre;
}

//Creo un array de objetos literales con las peliculas
export let peliculas = [
    new Pelicula(uuidv4(), "The Matrix", 4.5, 3, 120, 200, "Acción"),
    new Pelicula(uuidv4(), "Toy Story", 4.8, 5, 90, 150, "Animación"),
    new Pelicula(uuidv4(), "Indiana Jones", 4.3, 2, 130, 180, "Aventuras"),
    new Pelicula(uuidv4(), "The Hangover", 4.1, 1, 100, 160, "Comedia"),
    new Pelicula(uuidv4(), "The Sixth Sense", 4.6, 4, 110, 170, "Suspenso")
]

//Exporto los arrays de objetos literales y la funcion construcora
// export {peliculas, movies, Pelicula};

// peliculas.forEach(pelicula => { 
//     console.log(`ID: ${pelicula.id} - Nombre: ${pelicula.name} - Rating: ${pelicula.rating} - Premios: ${pelicula.awards} - Duración: ${pelicula.length} - Precio: ${pelicula.price} - Género: ${pelicula.genre}`);
// });

