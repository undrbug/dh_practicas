import {sumar} from './sumar.js';
import {restar} from './restar.js';
import {multiplicar} from './multiplicar.js';
import {dividir} from './dividir.js';

const calculadora = (a, b, operacion) => {
    switch (operacion) {
        case 'sumar':
            return sumar(a, b);
        case 'restar':
            return restar(a, b);
        case 'multiplicar':
            return multiplicar(a, b);
        case 'dividir':
            return dividir(a, b);
        default:
            return 'Operación no válida';
    }
}

export default calculadora;