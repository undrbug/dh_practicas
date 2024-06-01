import archivoTareas from "./funcionesDeTareas.js";

const tareas = archivoTareas.leerJSON();

// tareas.forEach(tarea => {
//     console.log(tarea.titulo);
// })

const accion = process.argv[2];

// if (accion === 'listar') {
//     tareas.forEach(tarea => {
//         console.log(tarea.titulo);
//     })
// } else if (accion === undefined) {
//     console.log('Atención - Tienes que pasar una acción');
// }
// else {
//     console.log('No entiendo qué quieres hacer');
// }

let listAcciones = ['listar', 'pendientes', 'terminadas'];

const listarAcciones = () => {
    console.log('Las acciones disponibles son:');
    listAcciones.forEach(accion => {
        console.log(`-${accion}`);
    })
}

/*
Vamos por el segundo paso: Crear un nuevo case que al identificar
la acción “crear” y una nueva tarea, ejecute las funciones
“escribirJSON” y “guardarTarea”.
*/

switch (accion) {
    case 'listar':
        console.log(`----------Listado de tareas----------`);
        tareas.forEach((tarea,idx) => {
            console.log(`${++idx}-${tarea.titulo} - ${tarea.estado}`);
        })
        break;
    case 'crear':
        const nuevaTarea = {
            id: tareas.length + 1,
            titulo: process.argv[3],
            descripcion: process.argv[4],
            estado: 'pendiente'
        }
        archivoTareas.guardarTarea(nuevaTarea);
        console.log('Tarea creada con éxito');
        break;
    case `filtrar`:
        let estado = process.argv[3].toLocaleLowerCase();
        let tareasPorEstado = archivoTareas.filtrarPorEstado(estado);
        if (tareasPorEstado.length === 0) {
            console.log(`No hay tareas con ese estado ${estado}`);
        }else{
            tareasPorEstado.forEach((tarea, idx) => {
                console.log(`${++idx}-${tarea.titulo} - ${tarea.estado}`);
            })
        }
        break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción');
        listarAcciones();
        break;
    default:
        console.log('No entiendo qué quieres hacer');
        listarAcciones();
        break;
}

