import fs from 'fs';

const traerDatos = () => {
    const datos = fs.readFileSync('bicicletas.json', 'utf-8');
    // console.log(datos);
    // return JSON.parse(datos);
    return datos;
}

export default traerDatos;