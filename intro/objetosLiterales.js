//funcion constructora
function Pais(nombre, poblacion, capital, idioma) {
    this.nombre = nombre;
    this.poblacion = poblacion;
    this.capital = capital;
    this.idioma = idioma;
}
//instanciamos un objeto con la funcion constructora
let miPais = new Pais("Argentina", 40000000, "Buenos Aires", "Español");

//creamos una clase con la misma funcionalidad que la funcion constructora
class Pais2 {
    constructor(nombre, poblacion, capital, idioma) {
        this.nombre = nombre;
        this.poblacion = poblacion;
        this.capital = capital;
        this.idioma = idioma;
        this.reporte = function () {
            console.log(this.nombre + " tiene una población de " + this.poblacion + " habitantes");
            return ""
        };
    }
}

let miPais2 = new Pais2("Argentina", 40000000, "Buenos Aires", "Español");
console.log(miPais2);
console.log(miPais2.reporte());

console.log(miPais.nombre + " tiene una población de " + miPais.poblacion + " habitantes");

let arrPaises = [
    {
        nombre: "Argentina",
        poblacion: 40000000,
        capital: "Buenos Aires",
        idioma: "Español",
    },
    {
        nombre: "Brasil",
        poblacion: 200000000,
        capital: "Brasilia",
        idioma: "Portugues",
    },
    {
        nombre: "Chile",
        poblacion: 18000000,
        capital: "Santiago",
        idioma: "Español",
    }
]
console.log(`recorriendo con un forEach`);
arrPaises.forEach(pais => {
    console.log(`Nombre: ${pais.nombre} - Poblacion: ${pais.poblacion} - Capital: ${pais.capital} - Idioma: ${pais.idioma}`);
}); 

console.log(`creamos un objeto literal y lo mostramos por consola`);
//objeto literal
let perro = {
    nombre: "wolfy",
    edad: 5,
    vacunado : true
}
console.log(perro);
