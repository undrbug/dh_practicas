/*
Concesionaria de autos
Este ejercicio es para que puedas poner en práctica los contenidos más importantes de JavaScript que vimos en este primer módulo de cursada. Al realizarlo, vas a poder asegurar que venís bien con los contenidos. La propuesta es ir en forma incremental con los contenidos vistos, por lo cual es normal que a medida que avances se vuelva más complejo y difícil. Si te resulta más sencillo, podés intentar resolver la ejercitación en VS Code y luego poner la respuesta en Playground. Si en algún momento no lográs avanzar y estás perdido, no dudes en consultar a tus compañeros para lograr comprender qué es lo que hay que hacer y qué es lo que hace el código.

Objetivos
Tener feedback propio de ejercitaciones más complejas e integradoras.
Probar tus conocimientos y autonomía a la hora de resolver un problema.
Detectar puntos de mejora.
Fortalecer las bases y conceptos de programación con JavaScript.
Metodología
Vamos a simular una situación de trabajo para situarnos en un contexto. Estás trabajando como desarrollador de CodeAR S.A., una reconocida software factory. En el equipo de trabajo contás con María y con Juan.

Maria
Es líder técnica del área. Es una persona muy ocupada y su rol consiste en traducir las necesidades del cliente a requerimientos técnicos.

Juan
Es pasante y está empezando en el mundo de la programación. Si bien es algo tímido, le gusta aprender cosas nuevas y encarar nuevos desafíos.

Vos
Si bien estás aprendiendo cosas como Juan, ya contás con algunos conocimientos previos.

Primera semana de trabajo
María presenta al equipo un nuevo proyecto para una concesionaria de automóviles, cuya principal línea de negocios es la compra y venta de automóviles. La concesionaria necesita construir una lista con todos los vehículos que tiene registrados. Por cada vehículo necesita conocer la siguiente información:

Marca (Ford, Fiat, etc). (marca)
Modelo (Fiesta, Corolla, etc). (modelo)
Color (Azul, Rojo, etc). (color)
Año de fabricación. (año)
Cantidad de kilómetros recorridos. (km)
Precio final. (precio)
Cantidad de cuotas. (cuotas)
Patente. (patente)
Vendido: para indicar si el auto está o no vendido. (vendido)
María quiere saber con qué tipo de dato representarán a cada vehículo individual. Juan pensó en 3 opciones para el vehículo individual. ¿Podrías ayudarlo a elegir la correcta?


*/

// ETAPA 1

// Instrucciones

// En base a las definiciones técnicas tomadas con el equipo deberás declarar la variable autos. Esta debe contener los siguientes vehículos:

// El primer auto es un Ford Fiesta Azul, del 2019, con 200 kilómetros, cuyo precio es 150000, disponible en 12 cuotas, con la patente APL123 que no está vendido.
// El segundo auto es un Toyota Corolla Blanco, del 2019, 0 kilómetros, cuyo precio es 100000, disponible en 14 cuotas, con la patente JJK116 que no está vendido.
// Cada auto debe tener los siguientes atributos: marca, modelo, precio, km, color, cuotas, anio, patente, vendido.

// Luego de eso, deberemos exportar la variable con nuestro array

let autos = [
  {
    marca: "Ford",
    modelo: "Fiesta",
    color: "Azul",
    anio: 2019,
    km: 200,
    precio: 150000,
    cuotas: 12,
    patente: "APL123",
    vendido: false,
  },
  {
    marca: "Toyota",
    modelo: "Corolla",
    color: "Blanco",
    anio: 2019,
    km: 0,
    precio: 100000,
    cuotas: 14,
    patente: "JJK116",
    vendido: false,
  },
];

// module.exports = autos;

// ETAPA 2 y 3
// Instrucciones

// En esta primera etapa, necesitamos requerir tu módulo autos y guardarlo en la variable autosImportados que se encuentra en la misma carpeta del archivo donde estás trabajando. Recordá que es el mismo archivo que creaste en la etapa anterior. 
// Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.
// Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.

// const autosImportados = require("./consigna");

// let concesionaria = {
//     autos: autos,
//     buscarAuto: function(patente) {
//         return this.autos.find(auto => auto.patente === patente) || null;
//     }
// }

// ETAPA 3
// Instrucciones

// Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.
// Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior. 
// Te sugerimos utilizar this.autos en lugar de autosImportados.
// Recordá que cuando trabajamos con Arrays tenemos varios métodos para iterar sobre ellos, y uno de ellos nos sirve para buscar. 

// console.log(concesionaria.buscarAuto("APL123"))

// ETAPA 4
// Instrucciones
// Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.
// ¿Cómo lo resuelven?
// Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto, la cual ya nos devuelve el objeto literal a modificar.

// let concesionaria = {
//     autos: autos,
//     buscarAuto: function(patente) {
//         return this.autos.find(auto => auto.patente === patente) || null;
//     },
//     venderAuto: function(patente) {
//         let auto = this.buscarAuto(patente);
//         if (auto) {
//             auto.vendido = true;
//         }
//     }
// }

// ETAPA 5
// Instrucciones
// La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta. A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían de aparecer los autos que ya fueron vendidos.
// Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior. Tené en cuenta que estamos optimizando nuestro código, por lo cual, deberíamos utilizar el método filter.

// let concesionaria = {
//     autos: autos,
//     buscarAuto: function(patente) {
//         return this.autos.find(auto => auto.patente === patente) || null;
//     },
//     venderAuto: function(patente) {
//         let auto = this.buscarAuto(patente);
//         if (auto) {
//             auto.vendido = true;
//         }
//     },
//     autosParaLaVenta: function() {
//         return this.autos.filter(auto => !auto.vendido);
//     }
// }

// ETAPA 6
// Instrucciones
// María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos.
// ¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?
// Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.

// let concesionaria = {
//         autos: autos,
//         buscarAuto: function(patente) {
//             return this.autos.find(auto => auto.patente === patente) || null;
//         },
//         venderAuto: function(patente) {
//             let auto = this.buscarAuto(patente);
//             if (auto) {
//                 auto.vendido = true;
//             }
//         },
//         autosParaLaVenta: function() {
//             return this.autos.filter(auto => !auto.vendido);
//         },
//         autosNuevos: function() {
//             return this.autosParaLaVenta().filter(auto => auto.km < 100);
//         }
//     }

//ETAPA 7
//Instrucciones
// El cliente le pidió saber cuánto dinero generaron las ventas.
// María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".
// Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
// ¿Te acuerdas cuál es el método de Array con el que puedes generar un nuevo Array? 

// let concesionaria = {
//     autos: autos,
//     buscarAuto: function(patente) {
//         return this.autos.find(auto => auto.patente === patente) || null;
//     },
//     venderAuto: function(patente) {
//         let auto = this.buscarAuto(patente);
//         if (auto) {
//             auto.vendido = true;
//         }
//     },
//     autosParaLaVenta: function() {
//         return this.autos.filter(auto => !auto.vendido);
//     },
//     autosNuevos: function() {
//         return this.autosParaLaVenta().filter(auto => auto.km < 100);
//     },
//     listaDeVentas: function() {
//         return this.autos.filter(auto => auto.vendido).map(auto => auto.precio);
//     }
// }

//ETAPA 8
// Instrucciones
// Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas. Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear!

// let concesionaria = {
//     autos: autos,
//     buscarAuto: function(patente) {
//         return this.autos.find(auto => auto.patente === patente) || null;
//     },
//     venderAuto: function(patente) {
//         let auto = this.buscarAuto(patente);
//         if (auto) {
//             auto.vendido = true;
//         }
//     },
//     autosParaLaVenta: function() {
//         return this.autos.filter(auto => !auto.vendido);
//     },
//     autosNuevos: function() {
//         return this.autosParaLaVenta().filter(auto => auto.km < 100);
//     },
//     listaDeVentas: function() {
//         return this.autos.filter(auto => auto.vendido).map(auto => auto.precio);
//     },
//     totalDeVentas: function() {
//         return this.listaDeVentas().reduce((total, precio) => total + precio, 0);
//     }
// }

//ETAPA 9
// Instrucciones
// Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante: la de verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.
// Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.
// Una persona va a ser representada mediante un objeto literal de la siguiente forma:
// {
// nombre: “Juan”,
// capacidadDePagoEnCuotas: 20000,
// capacidadDePagoTotal: 100000
// }
// Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.

// let concesionaria = {
//     autos: autos,
//     buscarAuto: function(patente) {
//         return this.autos.find(auto => auto.patente === patente) || null;
//     },
//     venderAuto: function(patente) {
//         let auto = this.buscarAuto(patente);
//         if (auto) {
//             auto.vendido = true;
//         }
//     },
//     autosParaLaVenta: function() {
//         return this.autos.filter(auto => !auto.vendido);
//     },
//     autosNuevos: function() {
//         return this.autosParaLaVenta().filter(auto => auto.km < 100);
//     },
//     listaDeVentas: function() {
//         return this.autos.filter(auto => auto.vendido).map(auto => auto.precio);
//     },
//     totalDeVentas: function() {
//         return this.listaDeVentas().reduce((total, precio) => total + precio, 0);
//     },
//     puedeComprar: function(auto, persona) {
//         return (persona.capacidadDePagoTotal > auto.precio) && (persona.capacidadDePagoEnCuotas > (auto.precio / auto.cuotas));
//     }
// }

//ETAPA 10
/* 
Instrucciones
Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.
La función debe de realizar los siguientes pasos:
1) Obtener los autos para la venta
2) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?
3) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.
Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
*/

let cliente = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000,
 };

let concesionaria = {
    autos: autos,
    buscarAuto: function(patente) {
        return this.autos.find(auto => auto.patente === patente) || null;
    },
    venderAuto: function(patente) {
        let auto = this.buscarAuto(patente);
        if (auto) {
            auto.vendido = true;
        }
    },
    autosParaLaVenta: function() {
        return this.autos.filter(auto => !auto.vendido);
    },
    autosNuevos: function() {
        return this.autosParaLaVenta().filter(auto => auto.km < 100);
    },
    listaDeVentas: function() {
        return this.autos.filter(auto => auto.vendido).map(auto => auto.precio);
    },
    totalDeVentas: function() {
        return this.listaDeVentas().reduce((total, precio) => total + precio, 0);
    },
    puedeComprar: function(auto, persona) {
        return (persona.capacidadDePagoTotal > auto.precio) && (persona.capacidadDePagoEnCuotas > (auto.precio / auto.cuotas));
    },
    autosQuePuedeComprar: function(persona) {
        return this.autosParaLaVenta().filter(auto => this.puedeComprar(auto, persona));
    }
}

console.log(concesionaria.autosQuePuedeComprar(cliente));