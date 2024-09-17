window.onload = function() {
    
    

let main = document.querySelector('main');
let h2 = document.querySelector('h2');
let a = document.querySelector('a');
let p = document.querySelectorAll('p');

let nombre = prompt('Ingrese su nombre');

h2.innerText = nombre ? `Bienvenido ${nombre}` : 'Bienvenido Invitado';

h2.style.textTransform = 'uppercase';

a.style.color = '#E51B3E';

if (confirm('¿Desea colocar un fondo de pantalla?')) {
    document.body.classList.add('fondo');
}

// let fondo = confirm('¿Desea colocar un fondo de pantalla?');
// if (fondo) {
//     document.body.classList.add('fondo');
// }

p.forEach((element, index) => {
    if (index % 2 == 0) {
        element.classList.add('destacadoPar');
    } else {
        element.classList.add('destacadoImpar');
    }
});

main.style.display = 'block';



}