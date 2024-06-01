import importar from './collectibles.js';

let hotToys = importar('Hot Toys');
let bandai = importar('Bandai');
let starWars = importar('Star Wars');

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let collectibles = {
    figuras: unifiedCollectibles,
    listFiguras: function() {
        this.figuras.forEach(figure => {
            console.log(`Marca: ${figure.marca} - Nombre: ${figure.nombre} - Precio: ${figure.precio} - Stock: ${figure.stock}`);
        });
    },
    figuresByBrand: function(brand) {
        return this.figuras.filter(figure => figure.marca === brand);
    }
}

collectibles.listFiguras();
console.log(collectibles.figuresByBrand('Hot Toys'));
