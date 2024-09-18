window.addEventListener("load", () => {    
    let formulario = document.querySelector("#formulario");
    let titulo = document.querySelector(".moviesAddTitulo");
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
        console.log(estadoSecreto);
	});

    let input = document.getElementById("titulo");
    input.addEventListener('input',(e)=>{
        let str = "secreto";
        let palabra = e.target.value;
        palabra = palabra.trim().toLowerCase();
        console.log(str.includes(palabra));
        if (str === palabra) {
            alert("PALABRA MAGICAAAAA");
        }

    })
});
