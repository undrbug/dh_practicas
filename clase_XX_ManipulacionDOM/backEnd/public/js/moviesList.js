
let body = document.getElementsByTagName("body")[0];

let h1 = document.getElementsByClassName("moviesListTitulo")[0];


if (prompt("¿Desea activar el modo oscuro?")) {
    body.style.backgroundColor = "#7f7f7f";
    // body.classList.add("fondoMoviesList");
}

h1.classList.add("fondoMoviesList");

h1.style.color = "white";
h1.style.backgroundColor = "teal"
//relleno
h1.style.padding = "20px";