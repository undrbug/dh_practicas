/* 
    Micro desafío 1:

Instrucciones
1. Crear una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).

Facturación - Cursos DH
2. El Tech Leader de nuestro equipo nos informa que debemos realizar un código que
permita calcular el monto a pagar por un alumno basándose en los cursos que
desea tomar en Digital House. Deberás seguir los siguientes pasos para lograr el
objetivo:
a. Crear un array multidimensional que contenga los nombres de los cursos y su
precio en pesos: “html5, 4000”, “css3, 5000”, “javascript, 10000”, “react,
7000”, “nodejs, 15000”.
b. Crear un array que contenga los cursos que el alumno quiere tomar con DH.
Deben estar escritos en MAYÚSCULAS y el alumno puede seleccionar entre
HTML5, CSS3, JAVASCRIPT, REACT y NODEJS.
c. Crear una función (Callback) que reciba como parámetros el array
multidimensional de los cursos y el otro array que indica los cursos que
quiere hacer el alumno. La función tendrá la responsabilidad de calcular y
devolver el monto total a pagar por el alumno en función de los cursos que
quiere realizar. No olvides que en el array multidimensional los nombres de los
cursos están escritos en letras minúsculas y tienes que pasarlas a
MAYÚSCULAS.
d. Crear otra función que reciba como parámetros el nombre y el apellido del
alumno, el array multidimensional de los cursos con sus respectivos
precios y el array que contiene qué cursos quiere hacer el alumno. Esta
función tendrá la responsabilidad de retornar el nombre y el apellido del
alumno y el monto total a pagar en función de los cursos que quiere realizar.
e. Una vez creado el programa, ejecutalo. Para verificar los resultados solicitados,
invoca a la segunda función, asigna diferentes valores o argumentos y no
olvides utilizar el console.log() para mostrar los resultados al usuario. Te
compartimos un ejemplo:
*/

let listaCursos = [
  ["html5", 4000],
  ["css3", 5000],
  ["javascript", 10000],
  ["react", 7000],
  ["nodejs", 15000],
];

let cursosAlumno0 = ["CSS3", "JAVASCRIPT", "REACT", "NODEJS"];
let cursosAlumno1 = ["HTML5", "CSS3", "JAVASCRIPT"];
let cursosAlumno2 = ["HTML5", "CSS3", "JAVASCRIPT", "NODEJS"];

let calcularMonto = (cursos, cursosComprados) => {
  let monto = 0;
  for (let i = 0; i < cursosComprados.length; i++) {
    for (let j = 0; j < cursos.length; j++) {
      if (cursosComprados[i] === cursos[j][0].toUpperCase()) {
        monto += cursos[j][1];
        console.log(`${++i}- ${cursos[j][0].toUpperCase()}`);
      }
    }
  }
  return monto;
};

let montoTotalAlumno = (nombre, apellido, cursos, cursosTomados, fn) => {
  return `El alumno ${nombre} ${apellido} debe abonar $${fn(cursos,cursosTomados)}`;
};

console.log(
  montoTotalAlumno("Carlin", "Calvo", listaCursos, cursosAlumno0, calcularMonto)
);
console.log(
  montoTotalAlumno("Pedro", "Perez", listaCursos, cursosAlumno1, calcularMonto)
);
console.log(
  montoTotalAlumno("Pepe", "Argento", listaCursos, cursosAlumno2, calcularMonto)
);

/* 
Micro desafío 2:

Instrucciones
1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).

Promedio alumnos graduados por curso
2. El Tech Leader, nos ¡Felicita! por los avances realizados en el desafío anterior. Dado
que hemos mostrado bastante expertise, sube su exigencia y nos pide que ayudemos
a uno de los equipos de desarrollo. Necesitan un código que permita determinar el
promedio de alumnos egresados por curso. Para lograrlo debemos realizar lo
siguiente:
a. Crear cuatro variables y asignar a cada una las siguientes cadenas de texto:
i. Graduados de HTML5: “30 45 25 34 18 23 16 50 72 70”
ii. Graduados de CSS3: “50 45 71 34 23 45 65 75 63 43 74 70”
iii. Graduados de JAVASCRIPT: “70 65 58 45 23 57 34 17 72”
iv. Graduados de NODEJS: “45 56 73 34 65 72 70 32”
b. A cada una de las variables que contienen las cadenas de texto, habrá que
convertirlas a arrays, separando cada elemento por una coma

c. Crear una función que reciba como parámetros los cuatro arrays de los
alumnos graduados y un número comprendido entre el 1 y el 4, donde:
i. 1 = HTML5
ii. 2 = CSS3
iii. 3 = JAVASCRIPT
iv. 4 = NODEJS
La función tendrá la responsabilidad de calcular y devolver el promedio de
graduados del curso indicado. Si el parámetro del curso es un valor diferente
del 1 al 4, deberá retornar un mensaje al usuario indicando cuales son los
valores asignados a cada curso.
*/

let graduadosHTML5 = "30 45 25 34 18 23 16 50 72 70";
let graduadosCSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let graduadosJAVASCRIPT = "70 65 58 45 23 57 34 17 72";
let graduadosNODEJS = "45 56 73 34 65 72 70 32";

let graduadosHTML5Array = graduadosHTML5.split(" ");
let graduadosCSS3Array = graduadosCSS3.split(" ");
let graduadosJAVASCRIPTArray = graduadosJAVASCRIPT.split(" ");
let graduadosNODEJSArray = graduadosNODEJS.split(" ");

const promedio = (arr) => {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += parseInt(arr[i]);
  }
  return suma / arr.length;
};

let promedioGraduados = (curso, ...graduados) => {
  let suma = 0;
  let resultado = 0;
  switch (curso) {
    case 1:
      resultado = promedio(graduados[0]);
      break;
    case 2:
      resultado = promedio(graduados[1]);
      break;
    case 3:
      resultado = promedio(graduados[2]);
      break;
    case 4:
      resultado = promedio(graduados[3]);
      break;
    default:
      return "Los cursos son: 1 = HTML5, 2 = CSS3, 3 = JAVASCRIPT, 4 = NODEJS";
  }
  return resultado;
};

console.log(
  promedioGraduados(
    1,
    graduadosHTML5Array,
    graduadosCSS3Array,
    graduadosJAVASCRIPTArray,
    graduadosNODEJSArray
  )
);
console.log(
  promedioGraduados(
    3,
    graduadosHTML5Array,
    graduadosCSS3Array,
    graduadosJAVASCRIPTArray,
    graduadosNODEJSArray
  )
);
console.log(
  promedioGraduados(
    5,
    graduadosHTML5Array,
    graduadosCSS3Array,
    graduadosJAVASCRIPTArray,
    graduadosNODEJSArray
  )
);

/* 
Desafío extra (opcional):
Para que no te quedes con las ganas y puedas seguir practicando si así lo deseas, te
proponemos que desarrolles las siguientes funciones:

1. Crear una función encontrar el número, que reciba por parámetros un array de
números y un número. La función deberá evaluar si el número proporcionado existe o
no en el array. De existir debe devolver el mensaje “El número XX sí existe en el
array”. En el caso contrario debe mostrar el mensaje: “El valor solicitado no existe”.

2. Crear una función Juego de trompito, que reciba dos parámetros:
a. El primero, un array con las siguientes cadenas de texto: “Toma 1” ,”Toma 2”,
“Pon 1”, “Pon 2”, “Todos ponen”, “Toma todo”
b. El segundo parámetro será la cantidad de vueltas del trompito comprendidas
entre 2 y 6.
La función tendrá como responsabilidad generar un número aleatorio comprendido
entre 0 y 5. En función del resultado obtenido, se le debe devolver al usuario alguno de
los mensajes suministrados por el trompito. Por ejemplo: “Toma todo”.
Pista: investigar sobre las funcionesMath.random() y Math.floor().

3. Crear una función sumatoria de pares e impares, que recibirá por parámetros un
array con diez valores numéricos. La función tendrá la responsabilidad de devolver al
usuario la sumatoria total de los números pares y de los números impares.
Pista: investigar sobre el operador módulo.
*/

// 1-
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let encontrarNumero = (arr, num) => {
  if (arr.includes(num)) {
    return `El número ${num} sí existe en el array`;
  } else {
    return "El valor solicitado no existe";
  }
};

console.log(encontrarNumero(arrayNumeros, 5));

// 2-
let arrayTrompito = [
  "Toma 1",
  "Toma 2",
  "Pon 1",
  "Pon 2",
  "Todos ponen",
  "Toma todo",
];

let juegoTrompito = (arr, vueltas) => {
  let random = Math.floor(Math.random() * 6);
  return arr[random];
};

console.log(juegoTrompito(arrayTrompito, 5));

// 3-
let sumatoriaParesImpares = (arr) => {
  let pares = 0;
  let impares = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      pares += arr[i];
    } else {
      impares += arr[i];
    }
  }
  return `La sumatoria de los números pares es ${pares} y la de los impares es ${impares}`;
};

console.log(sumatoriaParesImpares(arrayNumeros));
