/*
Micro desafío 1:

Instrucciones
1. Crear una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).

Saldo Bancario
El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo
de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir
ejecutando cada una de las siguientes consignas para lograr el objetivo:
1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
tomando en cuenta que los depósitos serán representados por valores positivos y
los retiros por valores negativos.
2. Crear una función (Callback) que reciba como parámetro el array creado. La función
tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
actual de retiros y el saldo actual del cliente.
3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
como el array que contiene las operaciones bancarias. Esta función tendrá la
responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
depósitos, el saldo actual de retiros y el saldo actual.
Una vez creado el programa, ejecutalo y para verificar los resultados solicitados, invoca a la
segunda función, asigna diferentes valores o argumentos. No olvides utilizar el console.log()
para mostrar los resultados al usuario, de acuerdo al siguiente mensaje:
*/

// 1
let operaciones = [
  100, -50, 200, -100, 50, -25, 75, -25, 100, -50, 200, -100, 50, -25, 75, -25,
];

const calcular = (operaciones) => {
  let depositos = 0;
  let retiros = 0;
  let saldo = 0;

  for (let i = 0; i < operaciones.length; i++) {
    if (operaciones[i] > 0) {
      depositos += operaciones[i];
    } else {
      retiros += operaciones[i];
    }
    saldo += operaciones[i];
  }
  return { depositos, retiros, saldo };
};

const mostrar = (nombre, apellido, arr, callback) => {
  let { depositos, retiros, saldo } = callback(arr);
  return `Estimad@: ${nombre} ${apellido} 
            Depositos: $${depositos} 
            Retiros: $${Math.abs(retiros)} 
            Saldo actual: $${saldo}`;
};

console.log(mostrar("Juan", "Perez", operaciones, calcular));

/*
Micro desafío 2:

Instrucciones
En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).

Tabla de multiplicar
Uno de los equipos de desarrollo te pide ayuda para desarrollar un código, donde se pueda
visualizar la tabla de multiplicar del 1 al 10. El equipo indica que puedes usar algunos de los
ciclos o bucles aprendidos: for - while o do while,

Para ayudar al equipo de desarrollo, tu responsabilidad será:
1. Crear una función que no reciba ningún parámetro. Tendrá la responsabilidad de
generar de manera automática la tabla de multiplicar del 1 al 10.
2. Lo ideal es que función muestre al usuario algo así:
*/
const tablaMultiplicar = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(`Tabla del ${i}____`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
};

tablaMultiplicar();

/*
Desafío extra (opcional):

Instrucciones
Si llegaste hasta acá, significa que vienes trabajando muy bien. ¡Felicitaciones!

Para que no te quedes con las ganas y puedas seguir practicando, te proponemos que
desarrolles las siguientes funciones:

En la carpeta ya creada, crea un nuevo archivo JavaScript (.js) por cada nueva función que
desarrolles.
1. Crear una función que pida un valor por parámetro y muestre los 10 números
siguientes.
2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.
3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el
100.
4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
las letras de la cadena de texto pero en MAYÚSCULA.
Pista: Investigar el método .toUpperCase.
5. Crear una función que reciba como parámetro un array de números positivos. Tendrá
la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
Pista: Investiga sobre el uso del operador módulo. Recordemos también que un
número par es aquel que se puede dividir entre 2.
*/
// 1
const diezSiguientes = (numero) => {
  console.log(`Los 10 números siguientes a ${numero} son:`);
  for (let i = 1; i <= 10; i++) {
    console.log(numero + i);
  }
};
diezSiguientes(5);
// 2
const saltandoTres = () => {
  console.log(`Saltando de a tres en tres entre 1 y 57:`);
  for (let i = 1; i <= 57; i += 3) {
    console.log(i);
  }
};
saltandoTres();
// 3
const sumatoria = () => {
  let sumatoria = 0;
  for (let i = 0; i <= 100; i++) {
    sumatoria += i;
  }
  return `La suma de los numeros de 0 a 100 es: ${sumatoria}`;
};
console.log(sumatoria());
// 4
const mayusculas = (cadena) => {
  for (let i = 0; i < cadena.length; i++) {
    console.log(cadena[i].toUpperCase());
  }
};
mayusculas("practicando el uso de los ciclos o bucles");
// 5
const pares = (numeros) => {
  console.log(`Array solo con los valores pares:`);
  let pares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares.push(numeros[i]);
    }
  }
  return pares;
};
console.log(pares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
