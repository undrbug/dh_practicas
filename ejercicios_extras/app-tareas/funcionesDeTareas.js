import fs from 'fs';
import { arch } from 'os';

// const leerArchivo = () => {
//     return JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'));
// }

// export default leerArchivo;

let archivoTareas = {
    archivo: './tareas.json',
    // tareas: this.leerJSON(),
    leerJSON: function() {
        try {
            return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
        } catch (error) {
            console.log(`Ups, tuvimos un error: ${error}`);
            // return [];
        }
    },
    escribirJSON: function(tareas) {
        try {
            //convertimos el array en cadena json
            //null y ' ' son para que se vea mas lindo (null porque no hay funcion de reemplazo para el array y ' ' es para que haya un espacio entre los elementos del array)
            //despues guardamos la cadena en el archivo
            fs.writeFileSync(this.archivo, JSON.stringify(tareas, null, ' '));
        } catch (error) {
            console.log(`Ups, tuvimos un error: ${error}`);
        }
    },
    guardarTarea: function(tarea) {
        let tareas = this.leerJSON();
        tareas.push(tarea);
        this.escribirJSON(tareas);
    },
    filtrarPorEstado: function(estado) {
        let tareas = this.leerJSON();
        return tareas.filter(tarea => tarea.estado === estado);
    },
}

export default archivoTareas;