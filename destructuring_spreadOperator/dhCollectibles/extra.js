let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let copiaNumeros = arrayNumeros;
let copiaNumeros2 = [...arrayNumeros];
copiaNumeros2[0] = 100;

let [cero,  ,dos, ,cuatro] = arrayNumeros;

let arrayExtraidos = [cero, dos, cuatro];

let [,uno,, tres,, ...resto] = arrayNumeros;

resto = [uno, tres, ...resto];

// console.log(arrayExtraidos);
// console.log(resto);
// console.log(arrayNumeros);
// console.log(copiaNumeros);
let concatenados = arrayNumeros.concat(copiaNumeros2, resto);

console.log(concatenados);

let mascota = {
    nombre: "Firulais",
    tipo: "Perro",
    color: "Marrón",
    raza: "Labrador"
};

let {nombre, tipo, color, raza} = mascota;

console.log(`Hola les presento a mi mascota su nombre es ${nombre}, es un hermoso ${tipo}, de color ${color} y su raza es ${raza}`);

//shadow copy
//deep copy
//shallow copy

function wft(){
    console.log(arguments)
    console.log(Object.values(arguments))
}
const variable = 'some content'
const obj = {
    name: "Marce",
    lastName: "Bettini"
}
wft(1, 'hola loco', true, variable, obj )