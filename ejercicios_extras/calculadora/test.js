import calculadora from "./calculadora.js";

console.log(calculadora(4, 2, "sumar"));
console.log(calculadora(6, 2, "restar"));
console.log(calculadora(2, 10, "multiplicar"));
console.log(calculadora(1, 0, "dividir"));

/*
nos invita a pensar…
a. ¿Qué hubiese sucedido si, en vez de generar un archivo por cada operación
matemática, hubiésemos programado todo en un mismo archivo?
No podriamos usar export default, deberiamos exportar todas las funciones y luego importarlas en el archivo test.js {sumar, restar, multiplicar, dividir} from './calculadora.js';

b. ¿Por qué el mejor camino es generar distintos archivos y luego requerirlos en uno solo?
por que es mas facil de mantener, de leer y de testear.
Por el principio de atomicidad, cada archivo se encarga de una sola cosa.

c. ¿Será esta metodología de trabajo una constante de aquí en adelante?
Deberia ser una constante de aqui en adelante. Es una buena practica de programacion.
*/