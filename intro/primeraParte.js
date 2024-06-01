import readlineSync from 'readline-sync';

// const name = readlineSync.question(`Puede ingrear su nombre? `);

// console.log(`Bienvenido ${name}!`);
// console.log("Bienvenido" + " " + name + "!");
// console.log("Bienvenido " + name + "!");
// console.log("____________________________");

// let cliente = {
//     nombre: "Hernan",
//     saldo: 100,
//     socio: false,
//     telefono: 15454645
// }

// console.log("Nombre: ", cliente.nombre);
// console.log("Saldo: ", cliente.saldo);
// console.log(typeof cliente.socio);
// console.log(`Telefono: ${cliente.telefono}`);
// console.log("____________________________");

// for (let key in cliente) {
//     console.log(key, cliente[key]);
//     console.log("tipo de dato: ", typeof cliente[key]);
// }

// console.log("____________________________");

// let dia = "vier22nes";

// switch (dia) {
//   case `viernes`:
//     console.log("buen finde");
//     break;
//   case `lunes`:
//     console.log("buena semana");
//     break;
//   default:
//     console.log("buen dia");
// }

// !true? console.log(true) : console.log(false);

// console.log("____________________________");
// Condicionales
// console.log("________DESAFIO 1____________________");
// let user = "admin";

// if (user === "admin") {
//     console.log("Bienvenido administrador, esta en modo Dios!");
// } else if (user === "asistente") {
//     console.log("Bienvenido asistnete, el asistente de Dios");
// } else if (user === "invitado") {
//     console.log("Bienvenido invitado, estas en modo lectura");
// } else {
//     console.log("No tienes acceso al sistema");
// }

// console.log("______DESAFIO 2______________________");

// let pagoMes = 12000;
// let consumoKWH = 500;
// if (consumoKWH > 300) {
//     console.log(`Debido a que su hogar tuvo un consumo de 450kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $${pagoMes * 1.2}`);
// } else {
//     console.log("Usted debe abonar $", pagoMes);
// }

// console.log("______DESAFIO 3______________________");



// const word = readlineSync.question(`Ingrese la palabra a traducir: (casa, perro, gato, pelota) `);

// switch (word) {
//     case `casa`:
//         console.log("house");
//         break;
//     case `perro`:
//         console.log("dog");
//         break;
//     case `gato`:
//         console.log("cat");
//         break;
//     case `pelota`:
//         console.log("ball");
//         break;
//     case `arbol`:
//         console.log("tree");
//         break;
//     default:
//         console.log("No se encuentra la palabra en la base de datos");
// }
// console.log("____________________________");
// const date = new Date().getDay();
// console.log(date);
// console.log("______DESAFIO 4______________________");

// const operacion = readlineSync.question(`Ingrese la operacion que desea realizar: (suma, resta, multiplicacion, division) `);
// let num1, num2;

// if (operacion == `suma` || operacion == `resta` || operacion == `multiplicacion` || operacion == `division`) {
//     num1 = parseInt(readlineSync.question(`Ingrese el primer numero: `));
//     num2 = parseInt(readlineSync.question(`Ingrese el segundo numero: `));
// }

// switch (operacion) {
//     case `suma`:
//         console.log(`El resultado de la suma es: ${num1 + num2}`);
//         break;
//     case `resta`:
//         console.log(`El resultado de la resta es: ${num1 - num2}`);
//         break;
//     case `multiplicacion`:
//         console.log(`El resultado de la multiplicacion es: ${num1 * num2}`);
//         break;
//     case `division`:
//         console.log(`El resultado de la division es: ${num1 / num2}`);
//         break;
//     default:
//         console.log(`Las operaciones aceptadas son: sumar - restar - multiplicar - dividir`);
// }

// console.log("________Desafío extra____________________");
// // La altura debe estar comprendida entre 150 m a 300 m.
// // La velocidad debe estar comprendida entre 268 a 278 km/hr.

// let altura = parseInt(readlineSync.question(`Ingrese su altura actual: `));
// let velocidad = parseInt(readlineSync.question(`Ingrese su velocidad actual: `));

// ((altura >= 150 && altura <= 300) && (velocidad >= 268 && velocidad <= 278)) ? console.log("Está listo para aterrizar"): console.log("Usted no está listo para aterrizar");


// function longitudNombreCompleto(nombre, apellido) {
//     let palabra = nombre + " " + apellido;
//     console.log(palabra.length);
// }

// longitudNombreCompleto("Juan", "Pérez");

// function escribirCartelito(title, name, lastName) {
//     return title + "," + name + " " + lastName;
// }

// console.log(escribirCartelito("Dra.", "Ana", "Pérez"));



// const dameCinco = () => [1,2,3,4,5];
// console.log(dameCinco());
// const multiplicarPorDos = () => 123 * 2;
// console.log(multiplicarPorDos());
// const mostrarNombre = () => "Mi nombre es Hernán";
// console.log(mostrarNombre());

console.log("________Funciones____________________");
// devuelve la multiplicacion de largo por ancho
// pero no imprime nada

function area(largo, ancho) {
    return largo * ancho;
}
area(10, 50);

console.log("Micro desafío 1");
const calculoAlquiler = (tipoVehiculo, cantDias, silla = false) => {
    let precio = 0;
    let mensaje = "";
    switch (tipoVehiculo) {
        case `Compacto:`:
            precio = 14000;
            break;
        case `Mediano:`:
            precio = 17000;
            break;
        case `Camioneta:`:
            precio = 28000;
            break;
        default:
            return "No se encuentra el vehiculo";
    }

    if (silla) {
        mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoVehiculo} alquilado, considerando los ${cantDias} días utilizados y el uso del accesorio silla para bebes, 
        el monto total a pagar es de $${(precio + 1200) * cantDias} por el alquiler.`;
    } else {
        mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoVehiculo} alquilado, considerando los ${cantDias} días utilizados, 
        el monto total a pagar es de $${precio * cantDias} por el alquiler.`;
    }
    return mensaje
}

console.log(calculoAlquiler(`Compacto:`, 0, true));

console.log("Micro desafío 2");

let calcularPrecio = (tipoHamburguesa, jamon = false, salsa_tomate = false, queso = false, mayonesa = false, mostaza = false, tomate = false, lechuga = false, cebolla = false) => {
    let precio = 0;
    let mensaje = "";
    switch (tipoHamburguesa) {
        case `Carne a la parrilla`:
            precio = 1800;
            break;
        case `Pollo`:
            precio = 1500;
            break;
        case `Vegetariana`:
            precio = 1200;
            break;
        default:
            return "No se encuentra el tipo de hamburguesa";
    }

    if (jamon) {
        precio += 30;
    }
    if (queso) {
        precio += 25;
    }
    if (salsa_tomate) {
        precio += 5;
    }
    if (mayonesa) {
        precio += 5;
    }
    if (mostaza) {
        precio += 5;
    }
    if (tomate) {
        precio += 15;
    }
    if (cebolla) {
        precio += 10;
    }
    if (lechuga) {
        precio += 10;
    }
    return precio;
}

const imprimirMensaje = (callback, nombre, apellido, tipoHamburguesa) => {

    return `Estimado ${nombre} ${apellido}, el precio de la hamburguesa ${tipoHamburguesa} es de $${callback(tipoHamburguesa, true, true, true, true, true, true, true, true)}`;
}

console.log(imprimirMensaje(calcularPrecio, "pepe", "argento", `Carne a la parrilla`));
// console.log(calcularPrecio(`Carne a la parrilla`, true, true, true, true, true, true, true, true));

console.log("Micro desafío 3");

/*
    Crear una función que recibe un string en minúscula, lo convierte a mayúsculas
    y lo retorna. Investiga qué hace el método de strings .toUpperCase()
    2. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
    parámetro. Investiga qué hace la palabra reservada typeof().
    3. Crear una función que calcule la edad de los perros, considerando que 1 año para
    nosotros son 7 de ellos.
    4. Crear una función que calcule el valor de una hora de trabajo, teniendo en cuenta que
    dicha función recibe tres parámetros: El salario mensual, la cantidad de días
    trabajados y la cantidad de horas que regularmente trabajada por día.
*/

// const convertirMyusculas = (palabra) => {
//     return palabra.toUpperCase();
// }

// const tipoDato = (dato) => {
//     return typeof dato;
// }

// const calcularEdadPerro = (edad) => {
//     return edad * 7;
// }

// const valorHoraTrabajo = (salarioMensual, diasTrabajados, horasTrabajadas) => {
//     return salarioMensual / (diasTrabajados * horasTrabajadas);
// }

// console.log(convertirMyusculas("hola"));
// console.log(tipoDato(1));
// console.log(calcularEdadPerro(1));
// console.log(valorHoraTrabajo(500000, 20, 7));