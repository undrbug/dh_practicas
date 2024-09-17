/*
Micro desafío - Paso 3:
● Crear un archivo JavaScript: /public/js//moviesAdd.js, y vincularlo con el archivo;
/views//moviesAdd.ejs.
● Desde el archivo /public/js/moviesAdd.js, capturar los siguientes elementos: <h1>,
<section> y <article>, ubicados en el archivo: /views//moviesAdd.ejs.
● Agregar a la etiqueta <h1> el mensaje: “AGREGAR PELÍCULAS”.
● Agregar a la etiqueta <h1> la clase: “titulo”.
● Agregar al artículo la clase: “fondoTransparente”.
● Agregar a la sección la clase: “fondoCRUD”.
*/
// Capturar elementos
let h1 = document.querySelector('h1');
let section = document.querySelector('section');
let article = document.querySelector('article');

// Agregar mensaje y clase al h1
h1.innerHTML = 'AGREGAR PELÍCULAS';
h1.classList.add('titulo');
article.classList.add('fondoTransparente');
section.classList.add('fondoCRUD');
