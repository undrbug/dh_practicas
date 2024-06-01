// Para este ejercicio contamos con un array de destinos del mundo ya definido.

// Queremos, usando destructuramiento, definir las variables bariloche y china, y extraer del array únicamente los destinos "Bariloche" y "China".
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [...china] = destinosDelMundo;

console.log(destinosDelMundo);
console.log(china);

china[0] = 'Cancún';
console.log(destinosDelMundo);
console.log(china);

// Queremos, usando desestructuramiento, definir las variables marca y color, haciendo que las mismas tengan el valor correspondiente del objeto literal.
let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let { marca, color } = auto;