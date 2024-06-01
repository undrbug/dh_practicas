import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

//Micro Desafío 1
import {peliculas, movies} from './peliculas.js';

//cowsay
import cowsay from 'cowsay';

peliculas.forEach(pelicula => {
    console.log(`ID: ${pelicula.id} - Nombre: ${pelicula.name} - Rating: ${pelicula.rating} - Premios: ${pelicula.awards} - Duración: ${pelicula.length} - Precio: ${pelicula.price} - Género: ${pelicula.genre}`);
});


/* 
Micro desafío 2:

El Tech Leader está muy agradecido por todo el esfuerzo realizado en el desafío anterior.
Ahora quiere saber si tenemos claro el uso de los módulos nativos de Node.JS. Por eso,
nos encomienda la siguiente tarea:
Instrucciones
1. En la carpeta ya creada, crea un nuevo archivo (mensaje.txt).
2. En el archivo creado, escribe el mensaje que quieras. Por ejemplo: “Node.js® es un
entorno de ejecución para JavaScript construido con V8, motor de JavaScript
de Chrome.”
3. Dentro del archivo (app.js), crea una variable a la que se le asigne la ruta del archivo
(mensaje.txt) y luego llama al módulo nativo de Node.js que te permita leer el
contenido del archivo (mensaje.txt).
4. Una vez leído, muestra al usuario por la consola el contenido del mismo.
*/



let ruta = './mensaje.txt';
let mensaje = fs.readFileSync(ruta, 'utf-8');
console.log("___________________DESAFIO 2___________________");
console.log(mensaje);



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(path.join(__dirname, 'mensaje.txt'));

console.log("___________________COWSAY___________________");

console.log(cowsay.say({
    text: "Hello World!",
    e: "-O",
    T: "U"
}));
