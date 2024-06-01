/* 
Escribí la función sumatoriaBajoImporte la cual recibiendo un array con importes 
nos devuelva el resultado final de la suma de los importes de todos los meses 
que tienen ganancia, a excepción de los que superen un importe de $ 1.000
*/

// let importes = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];
let importes = [300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000];

function sumatoriaBajoImporte(importes) {
  let suma = 0;
  for (let i = 0; i < importes.length; i++) {
    if (importes[i] <= 1000 && importes[i] > 0) {
      suma += importes[i];
    }
  }
  return suma;
}

console.log(sumatoriaBajoImporte(importes)); // 5500

/* 
Nos piden que escribamos la función asientosDisponibles(), 
que tome como parámetro un conjunto de asientos disponibles y
el asiento que quiere ocupar la persona. Nuestra función deberá
 verificar si el asiento solicitado se encuentra disponible y 
 devolverle un mensaje claro y prolijo al cliente como en los ejemplos siguientes:
Ejemplo si se encuentra el asiento disponible
asientosDisponibles([15, 28, 44, 45, 70], 15);  
// El resultado debería ser:
"Felicitaciones, el asiento número 15 está disponible"
Ejemplo si no se encuentra el asiento disponible
asientosDisponibles([15, 28, 44, 45, 70], 50);  
// El resultado debería ser:
"Lo sentimos, el asiento número 50 está ocupado, pero aún quedan 5 asientos disponibles"
*/
let asientos = [15, 28, 44, 45, 70];

const asientosDisponibles = (disponibles, solicitado) => {
  if (disponibles.includes(solicitado)) {
    return `Felicitaciones, el asiento número ${solicitado} está disponible`;
  } else {
    return `Lo sentimos, el asiento número ${solicitado} está ocupado, pero aún quedan ${disponibles.length} asientos disponibles`;
  }
};

console.log(asientosDisponibles(asientos, 11));

// PLayGruound quiere que se haga asi:
/* 
function asientosDisponibles(disponibles, solicitado) {
    if (disponibles.includes(solicitado)) {
        return "Felicitaciones, el asiento número " + solicitado + " está disponible";
    } else {
        return "Lo sentimos, el asiento número " + solicitado + " está ocupado, pero aún quedan " + disponibles.length + " asientos disponibles";
    }
}
*/

/* 
Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual cuando reciba la cantidad de estaciones 
que avanzó el tren nos devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que
 lleva el tren. La empresa nos provee los siguientes datos:

El tren sale de la estación terminal siempre con 200 pasajeros.
En cada estación el tren sube 50 pasajeros y se bajan 30.
En la estación Florida (la estación número 5), como es una estación central es la única donde bajan 80 personas y suben 120.
Teniendo éstos datos ya podemos armar nuestro programa, del cual nos pasan los siguientes ejemplos:

 // Si ejecutara la función de ésta manera:
reporteDePasajeros(0);  

// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren']
Otro ejemplo:

  // Si ejecutara la función de ésta manera:
reporteDePasajeros(3);  

// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 
'En la estación 2 hay 240 pasajeros arriba del tren', 'En la estación 3 hay 260 pasajeros arriba del tren']
Otro ejemplo:

  // Si ejecutara la función de ésta manera:
reporteDePasajeros(5);  

// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 
'En la estación 2 hay 240 pasajeros arriba del tren', 'En la estación 3 hay 260 pasajeros arriba del tren',
'En la estación 4 hay 280 pasajeros arriba del tren', 'En la estación 5 hay 320 pasajeros arriba del tren']
*/

function reporteDePasajeros(estaciones) {
  let pasajeros = 200;
  let reporte = [];
  for (let i = 0; i <= estaciones; i++) {
    if (i != 0) {
      if (i === 5) {
        pasajeros += 120;
        pasajeros -= 80;
      } else {
        pasajeros += 50;
        pasajeros -= 30;
      }
    }
    // reporte.push(`En la estación ${i} hay ${pasajeros} pasajeros arriba del tren`);
    reporte.push(
      "En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren"
    );
  }
  return reporte;
}

console.log(reporteDePasajeros(5));

/* Con la ayuda de lo que sabe Nelson tenes que realizar una función laClaveSecreta(), que tome como parámetro un conjunto
 de caracteres y te pueda devolver el mensaje de manera ordenada.
Por ejemplo: 
// Ejecutando la función con el siguiente parámetro:
laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] );  
// El resultado que nos devuelve la función es el siguiente: 
"El día es lunes";  
Otro ejemplo:
// Ejecutando la función con el siguiente parámetro:
laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] );  
// El resultado que nos devuelve la función es el siguiente: 
"Clave descifrada";  
*/

function laClaveSecreta(palabraSecreta) {
  //Filtro los elementos que no son asteriscos, quito lo asteriscos
  let cadena = palabraSecreta.filter((caracter) => caracter != "*");
  console.log(
    "Filtro los elementos que no son asteriscos, quito lo asteriscos"
  );
  console.log(cadena);
  //Invierto la cadena
  console.log(
    "Invierto la cadena, la transformo en un string y por ultilmo la devuelvo"
  );
  let inverso = cadena.reverse();
  return cadena.join("");
}

console.log(
  laClaveSecreta([
    "s",
    "*",
    "e",
    "n",
    "u",
    "l",
    " ",
    "s",
    "*",
    "e",
    " ",
    "a",
    "í",
    "*",
    "d",
    " ",
    "l",
    "*",
    "E",
    "*",
  ])
);

const laClaveSecreta2 = (palabraSecreta) => {
  return palabraSecreta
    .filter((caracter) => caracter != "*")
    .reverse()
    .join("");
};
console.log("La claves secreta 2");
console.log(
  laClaveSecreta2([
    "a",
    "*",
    "d",
    "a",
    "r",
    "f",
    "*",
    "i",
    "c",
    "*",
    "s",
    "e",
    "d",
    " ",
    "e",
    "*",
    "v",
    "a",
    "l",
    "C",
  ])
);

if (typeof Storage !== "undefined") {
  console.log("LocalStorage disponible");
  let usuario = {
    nombre: "Juan",
    apellido: "Perez",
    email: "uno@gmail.com",
    edad: 30,
    contraseña: "1234",
  };

  // Convertir el objeto a JSON
  let usuarioJSON = JSON.stringify(usuario);

  // Guardar en localStorage
  localStorage.setItem(`${usuario.nombre}`, usuarioJSON);
  localStorage.setItem(`usuario`, usuarioJSON);
} else {
  console.log("LocalStorage no disponible");
}
