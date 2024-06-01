import fs from 'fs';

let importar = (...marca) => {
    const figuras1 = JSON.parse(fs.readFileSync('./datos/figuras1.json', 'utf-8'));
    const figuras2 = JSON.parse(fs.readFileSync('./datos/figuras2.json', 'utf-8'));
    const figuras3 = JSON.parse(fs.readFileSync('./datos/figuras3.json', 'utf-8'));

    const figuras = figuras1.concat(figuras2, figuras3);
    return figuras.filter(figura => marca.includes(figura.marca));
}

export default importar;
