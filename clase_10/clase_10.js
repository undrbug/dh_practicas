/* 
Instrucciones

Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados para acordar un recuperatorio. Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados respectivamente
*/

let alumnos = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'Jessica', promedio: 3, aprobado: false},
    {nombre: 'Jerry', promedio: 4, aprobado: false},
    {nombre: 'Jordan', promedio: 6, aprobado: true}
];

let aprobados = alumnos.filter(alumno => alumno.aprobado);
let desaprobados = alumnos.filter(alumno => !alumno.aprobado);

console.log(`Aprobados: ${aprobados.map(alumno => alumno.nombre)}`);
console.log(`Aprobados: ${desaprobados.map(alumno => alumno.nombre)}`);

/* 
Instrucciones
Hagamos lío...

Nos dejaron una lista con los horarios de partida de algunos aviones. Esta lista se reproduce directamente en las pantallas del aeropuerto y, a modo de travesura, queremos adelantar una hora cada partida. Nuestro trabajo será utilizar el método map para poder lograrlo y almacenar la lista en una variable nueva llamada horariosAtrasados.
*/
let horariosPartida = [12, 14, 18, 21];
//deberia llamarse horariosAdelantados
let horariosAtrasados = horariosPartida.map(horario => horario - 1);

/* 
reduce ()
Instrucciones

Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.

Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.
*/

let vueltas = [5, 8, 12, 3, 22];

let totalVueltas = vueltas.reduce((acumulador = 0, vuelta) => acumulador + vuelta);

console.log(totalVueltas);

/* 
forEach
Instrucciones

Para este ejercicio tenemos el array listaDeSupermercado. Nuestro trabajo será mostrar cada ítem de esa lista por consola utilizando un foreach.
*/

let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

listaDeSuperMercado.forEach((item) => console.log(item));


/* 
Micro desafío 1:

Instrucciones
DH-Bici
El Tech Leader presenta al equipo un nuevo proyecto de compra y venta de bicicletas. Hay
llevar un control del stock de bicicletas y generar código que permita analizar los datos de las
mismas. Para lograr estos objetivos, nos encarga las siguientes tareas:

1. Crear una carpeta de trabajo y dentro de ella un archivo (bicicletas.json). Este
último debe contener un array de objetos literales con todos las bicicletas que se
tienen en stock. Por cada bicicleta se necesita conocer la siguiente información:
a. Marca (Fierce, Shifter, Olmo, Battle, TopMega,SLP, Halley, Fixie, etc ).
b. Modelo (FM18SI29AM211, FM18F29AM210, Regal, Sunshine, Techno,
    Ruta).
    c. Rodado (16, 26, 28, 29 ).
    d. Año de fabricación (2019, 2020, 2021, 2022, etc);
    e. Color (Celeste, negro, gris, amarillo, rosa, rojo, verde, Naranja, etc).
    f. Peso en Kilogramos(13, 15, 16, 17 );
    g. Tipo (Montañera, Paseo, Retro, Triatlón ).
    h. Precio (Coloque el precio que usted desee).
    i. Vendida (si ó no).
    Con esta información, puedes realizar todos los registros que quieras.
    
    2. Crear un archivo (datosBici.js). Este archivo será un módulo propio, en el que
    debes construir una función que tendrá la responsabilidad de importar el archivo
    de (bicicletas.json). Para esto, seguramente nos convenga usar el módulo
    nativo de NodeJs. File System - FS.
    
    3. Guardar el contenido del archivo (bicicletas.json) en una variable y convertirla
    a un tipo de dato array. ¿Se te ocurre cómo? Te dejamos un enlace para
    profundizar sobre el recurso a utilizar.
    
    Este archivo es un módulo propio y por tal motivo una vez que se crea.. ¿Recuerdas
    cuál debe serla última línea del archivo?.
    */
   
//importamos nuestro modulo:
import traerDatos from './datosBici.js';

//traemos los datos del archivo bicicletas.json
let bicicletasJSON = traerDatos();
// console.log(bicicletasJSON);
//convertimos los datos a un array
let bicicletas = JSON.parse(bicicletasJSON);
// console.log("array ", bicicletas);

/* 
Micro desafío 2:

Instrucciones

1. Crear un nuevo archivo (app.js). En este, deberás importar el módulo creado
(datosBici.js) y crear un objeto literal con el nombre de (dhBici). Este último
tendrá como primer atributo (bicicletas), y debe contener la lista de las
bicicletas importadas.

2. Dentro del objeto literal crea las funcionalidades que el Tech Leader requiere
que desarrollemos en base a lo exigido por el cliente:
    a. Crear una funcionalidad (buscarBici) que reciba por parámetro el (id) de
la bicicleta y devuelva la bici que corresponde. En caso de no
encontrarla, deberá retornar null. Estamos optimizando nuestro código,
por lo que deberíamos utilizar el método filter.
    b. Crear una funcionalidad de (venderBici) que reciba el (id). En caso de
encontrar la bicicleta, debe asignarle el estado de vendida (si) y retornar
todos los datos de la bicicleta. En el caso de no encontrar la bicicleta,
debe retornar al usuario: “Bicicleta no encontrada”. Puedes aprovechar
la función (buscarBici).
    c. Crear la funcionalidad (biciParaLaVenta). Tendrá la responsabilidad de
devolver todas aquellas bicicletas que aún no estén vendidas. Recuerda
que estamos optimizando nuestro código, por lo que deberíamos utilizar
el método filter.
    d. Finalmente el Tech Leader nos felicita por todo el trabajo y nos pide un
último esfuerzo. Tenemos que desarrollar una funcionalidad
(totalDeVentas) que retorne la suma del valor de todas las ventas
realizadas. Se recomienda utilizar la función reduce.

3. Una vez hechas todas estas tareas, debemos comprobar la funcionalidad de las
mismas, usando el console.log() e invocando cada una de ellas pasando los
parámetros.
*/
let dhBici = {
    bicicletas: bicicletas,
    buscarBici: (id)=> {
        let bici = bicicletas.filter(bici => bici.id === id);
        return bici.length > 0 ? bici : null;
    },
    venderBici: function(id) {
        let bici = this.buscarBici(id);
        if (bici) {
        // if (this.buscarBici(id)) {
            if (bici[0].vendida === "no") {
                bici[0].vendida = "si";
                // this.buscarBici(id).map(bici => bici.vendida = "si")
                return bici;
             } else {
                 return "Bicicleta ya vendida"
             }
        } else {
            return "Bicicleta no encontrada";
        }
        // if (this.buscarBici(id)) {

        //     this.buscarBici(id).map(bici => bici.vendida = "si")
        //     return this.buscarBici(id);
        // }
    },
    biciParaLaVenta: ()=> bicicletas.filter(bici => bici.vendida === "no"),
    totalDeVentas: function() {
        return this.bicicletas.filter(bici => bici.vendida === "si").reduce((acumulador, bici) => acumulador + bici.precio, 0);
    } 
}
//Todas las bicicletas en stock
// console.log(`Todas las bicicletas: `,dhBici.bicicletas);

//Buscar una bici pasando id
// console.log(`Buscar bicicleta con id 1: `,dhBici.buscarBici(2));

//Vender una bici pasando id 
// console.log(dhBici.venderBici(2));

//Bicicletas para la venta
// console.log(dhBici.biciParaLaVenta());

//Total de ventas
console.log("El total de vendidas es: ", dhBici.totalDeVentas());


/* 
Desafío extra (opcional):

Instrucciones
Si llegaste hasta acá, significa que vienes trabajando bastante bien poniendo en práctica los
diferentes contenidos vistos hasta el momento. ¡Felicitaciones!

Para que no te quedes con las ganas y puedas seguir practicando, te proponemos que
desarrolles las siguientes funciones dentro del mismo archivo (app.js) :

    1. Crear una función (aumentoBici) que reciba por parámetro el porcentaje de
aumento. Tendrá la responsabilidad de devolver el listado de todas las bicicletas con
el aumento que reciba por parámetro. Estamos optimizando nuestro código, por lo
cual, deberíamos utilizar el método map.
    2. Crear la funcionalidad (biciPorRodado) que reciba por parámetro el “número del
rodado”. Tendrá la responsabilidad de retornar todas aquellas bicicletas que
correspondan al rodado recibido por parámetro. Estamos optimizando nuestro
código, por lo que deberíamos utilizar el método filter.
    3. Crear una función (listarTodasLasBici) que tendrá la responsabilidad de mostrar al
usuario el listado de todas las bicicletas registradas en el sistema. Para ello puedes
valerte del uso de la función forEach() y también puedes investigar sobre el uso de la
sentencia for... of()
*/

// const aumentoBici = (porcentaje) => {
//     return dhBici.bicicletas.map(bici => {
//         bici.precio = bici.precio + (bici.precio * porcentaje / 100);
//         return bici;
//     });
// }

//Con spread operator para no modificar directamente el array original
const aumentoBici = (porcentaje) => {
    return dhBici.bicicletas.map(bici => {
        const nuevoPrecio = bici.precio * (1 + porcentaje / 100);
        return { ...bici, precio: nuevoPrecio };
    });
}

// console.log(aumentoBici(10));
// console.log(bicicletas)

const biciPorRodado = (rodado) => {
    return dhBici.bicicletas.filter(bici => bici.rodado === rodado);
}

// console.log(biciPorRodado(26));

//Recorriendo todas las bicicletas con ForEach
// dhBici.bicicletas.forEach(bici => console.log(bici));

//Recorriendo todas las bicicletas con For...of
// for (const bici of dhBici.bicicletas) {
//     console.log(bici);
// }