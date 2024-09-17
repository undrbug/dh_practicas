window.addEventListener("load", () => {    
	let titulo = document.querySelector(".moviesAddTitulo");
	let formulario = document.querySelector("#formulario");
	let article = document.querySelector("article");
	titulo.innerHTML = "AGREGAR PELÍCULA";
	titulo.classList.add("titulo");
	article.classList.add("fondoTransparente");
	formulario.classList.add("fondoCRUD");

	titulo.addEventListener("mouseover", () => {
		titulo.classList.toggle("color");
	});

	let inputTitle = document.querySelector("#titulo");

	let estadoSecreto = 0;
	let key = "";
	inputTitle.addEventListener("keydown", (e) => {
		key = e.key.toLowerCase();
		console.log(key);
		if (estadoSecreto === 0 && key === "s") {
			estadoSecreto++;
		} else if (estadoSecreto === 1 && key === "e") {
			estadoSecreto++;
		} else if (estadoSecreto === 2 && key === "c") {
			estadoSecreto++;
		} else if (estadoSecreto === 3 && key === "r") {
			estadoSecreto++;
		} else if (estadoSecreto === 4 && key === "e") {
			estadoSecreto++;
		} else if (estadoSecreto === 5 && key === "t") {
			estadoSecreto++;
		} else if (estadoSecreto === 6 && key === "o") {
			estadoSecreto = 0;
			alert("SECRETO MAGICO");
		} else {
			estadoSecreto = 0;
		}
	});

    let input = document.getElementById("titulo");
    input.addEventListener('input',(e)=>{
        //como puedo comprobar si lo que se ingresa en el input aparece dentro de un string?
        let str = "secreto";
        let palabra = e.target.value;
        console.log(str.includes(palabra));
        if (str === palabra.toLowerCase()) {
            alert("PALABRA MAGICAAAAA");
        }

    })
});
