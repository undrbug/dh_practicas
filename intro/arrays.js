//ARRAY
// Tenemos un array con palabras sueltas que, juntas, forman una gran frase.
// Queremos, utilizando un método de array sobre la arrayFrase , convertirlo en una oración entera, y almacenar ese String en una variable llamada fraseNueva.

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
];

let fraseNueva = arrayFrase.join(` `);

console.log(fraseNueva);

// ¡Sí! ¡Alexis se egresó del terciario!
// Para este ejercicio contamos con el array estudiantes, en donde, en cada índice, almacena un objeto con las propiedades nombre, promedio y curso.
// Queremos sacar a Alexis, que acaba de egresar, y sabemos que está último en ese array.
// Para eso debemos, utilizando un método de array, guardar los datos de Alexis en una variable nueva llamada alumnoEgresado.
let estudiantes = [
    {
        nombre: "Alvaro",
        promedio: 9,
        curso: "Android"
    },
    {
        nombre: "Daniel",
        promedio: 6,
        curso: "Full Stack"
    },
    {
        nombre: "Alexis",
        promedio: 3,
        curso: "iOS"
    }
];

const alumnoEgresado = estudiantes.pop("Alexis");
console.log(alumnoEgresado);

// Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.
// Nuestro trabajo será agregar de a un alumno por vez, utilizando algún método de array.
// Los valores de cada uno son:
// nombre: Juan
// promedio: 5
// curso: iOS
// ------------------
// nombre: Miguel
// promedio: 2
// curso: Android

estudiantes.push({ nombre: "Juan", promedio: 5, curso: "iOS" });
estudiantes.push({ nombre: "Miguel", promedio: 2, curso: "Android" });


// Se dio de baja un alumno.
// Tenemos que dar de baja al primer estudiante y queremos sacarlo del array estudiantes. Para eso, debemos crear una variable llamada alumnoDeBaja y, utilizando un método de array, almacenar en ella a ese primer estudiante.

let alumnoDeBaja = estudiantes.shift();

// Se reintegraron alumnos.
// Tenemos la tarea de reintegrar a dos estudiantes que se habían registrado al principio de todo, se dieron de baja, ¡pero volvieron! Y para que no pierdan su lugar privilegiado queremos, utilizando un método de array, agregar al inicio del mismo a cada estudiante (de a uno a la vez).
// Los datos que hay que agregar de cada uno son:
// nombre: "Mariana",
// promedio: 9,
// curso: "Full Stack"
// -------------------------
// nombre: "Francisco",
// promedio: 2,
// curso: "Android"

estudiantes.unshift({ nombre: "Mariana", promedio: 9, curso: "Full Stack" });
estudiantes.unshift({ nombre: "Francisco", promedio: 2, curso: "Android" });

//STRING
/*
Debemos crear una función llamada dominio que recibirá 
un string como "digitalhouse.com.ar" y su función será 
retornar: "http://www.digitalhouse.com.ar".
*/

let dominio = (string) => {
    return "http://" + string;
}

console.log(dominio("digitalhouse.com.ar"));

/*
Lo primero que necesitamos es declarar una variable 
llamada texto, asignándole como valor un texto (string),
el que queramos. Luego, utilizando la propiedad length,
tendremos que imprimir en consola el total de caracteres
que contiene la frase.
*/

let texto = "un texto cualquiera";

console.log(texto.length)

/*
Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir 
los siguientes tres parámetros:

1. Un texto.
2. La palabra que vamos a buscar para reemplazar.
3. La palabra que vamos a usar para reemplazar.
La función deberá devolver el texto con la palabra reemplazada.
Ejemplo:
let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
console.log(textoSinGuiones) //'Este texto es buena onda'

NO TOMA ARROW FUNCTION QUIERE FUNCIONES NORMALES
*/

const reemplazoFastFast = (texto, aReemplazar, paraReemplazar) => texto.replace(aReemplazar, paraReemplazar)

let textoNuevo = reemplazoFastFast("un mal trago", "mal", "buen")

console.log(textoNuevo)

/*
Para el siguiente ejercicio vamos a suponer que tenemos un texto que copiamos y queremos saber si el texto 
menciona una palabra en particular.
Para lograrlo, tendremos que crear una función llamada menciona, que recibirá dos parámetros: un texto 
—que es donde vamos a buscar— y una palabra —que es la que vamos a averiguar si se menciona en el texto—. 
La misma función retorna true en el caso de encontrar la palabra.

Ejemplo:

menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'); // true
*/

function menciona(texto, palabra) {
    return texto.includes(palabra);
}

/*
Teniendo como punto de partida la cadena de texto '¡Hola!, soy Carli', deberemos recortarla 
para poder obtener el nombre 'Carli' en una nueva variable llamada licenciada.

IMPORTANTE: Para la resolución tendremos que usar la función slice().
*/

let frase = 'Hola!, soy Carli';

let licenciada = frase.slice(11);

console.log(licenciada);

console.log("________________Micro desafío 1:___________________________");

let arr6 = ["Heladera", "Batidora", "Licuadora", "Cocina", "Grill", "Horno"];

//generamos un numero random entre 0 y 6
let random = Math.floor(Math.random() * 6);
console.log(random);

//imprimimos el valor del array en la posicion random
console.log(arr6[random]);

//imprimimos el ultimo elementeo del array
console.log(arr6[arr6.length - 1]);
//Agregamos 2 elementos al array
arr6.push("Cafetera", "Tostadora");
//mostamos la longitud o cantidad de elementos del array
console.log(arr6.length);
//Buscar en un array si existe o no un elemento
arr6.includes("Cafetera") ? console.log("Existe") : console.log("No existe");
//unir todos los elementos del array en un string
let unidos = arr6.join(" ");
console.log(unidos);
//determinar la longitud de un string
console.log("longitud de unidos:");
console.log(unidos.length);
//Buscar una palabra y reemplazar por otra
console.log("Texto antes del cambio");
console.log(unidos);
let modificada = unidos.replace("Cafetera", "Panera")
console.log("Texto despues del cambio, en este caso reemplazamos Cafetera por Panera");
console.log(modificada);
//convertir un string en un array
let conComas = modificada.split(" ");
console.log(conComas);

console.log("________________Micro desafío 2:___________________________");

let moviesArr = ["Turno dedía", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor: amor y trueno"];

const enMayusculas = (arr, pelicula) => {
    if (arr.indexOf(pelicula) !== -1) {
        let peliEncontrada = arr[arr.indexOf(pelicula)].toUpperCase();
        arr.splice(arr.indexOf(pelicula), 1);
        arr.unshift(peliEncontrada);
        return arr;
    } else {
        return "Pelicula no encontrada";
    }
}
let arrMayus = enMayusculas(moviesArr, "Thor: amor y trueno")
console.log("Array de peliculas en mayusculas");
console.log(arrMayus);
let string = "Counter-Strike NOP Vértigo Nick Avatar";
let stringArr = string.split(" ");
console.log("String");
console.log(string);
console.log("Array");
console.log(stringArr);
//elimino el elemento conter-strike
// stringArr.shift(); //Elimino el primer elemento del arr
stringArr.splice(0, 1);
console.log("Elimino Counter-Strike");
console.log(stringArr);

console.log("_____Funcion concat_____");

const arrConcat = (arr1, arr2) => arr1.concat(arr2);

let nuevoArr = arrConcat(arrMayus, stringArr);
console.log("Nuevo array concatenado");
console.log(nuevoArr);

let texto2 = "una frase cualquiera";
console.log(texto2.slice(-12));

console.log("__________________________________");
function imprimirAzul4() {
    console.log("Azul");
}

for (let i = 1; i <= 4; i++) {
    imprimirAzul4();
}

function noParesDeContarImparesHasta(numero) {
    // Escribe aqui tu código
    var cont = 0;
    for (let i = 0; i <= numero; i++) {
        cont = (i % 2) != 0 ? cont + 1 : cont;
    }
    return cont;
}
console.log(noParesDeContarImparesHasta(4))

function tablaDeMultiplicar(numero) {
    //Escribí tu código aquí
    let i = 1
    while (i <= 10) {
        console.log(`${numero} * ${i} = `, (numero * i))
        i++;
    }
}

tablaDeMultiplicar(5);

function gananciaTotal4(arr) {
    let sumatoria = 0;
    for (let i = 0; i < arr.length; i++) {
        sumatoria += arr[i];
    }
    return sumatoria;
}

let arr = [0, 2, 0, 3, 4, 5, 1];
console.log(gananciaTotal4(arr));

function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        cantidad = (unPeriodo[i] > 0) ? cantidad += 1 : cantidad;
    }
    return cantidad;
}

console.log(cantidadDeMesesConGanancia(arr));

function saldosDeMesesConGanancia(arr) {
    let arr2 = [];
    let cont = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr2[cont] = arr[i];
            cont++;
        }
    }
    return arr2;
}
console.log(saldosDeMesesConGanancia(arr));

function cantidadDeMesesConPerdida(arr) {
    var meses = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] <= 0) {
            meses++;
        }
    }
    return meses;
}

console.log(cantidadDeMesesConPerdida(arr));