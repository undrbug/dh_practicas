window.onload = function(){
    let body = document.querySelector('body');
    let logoDH = document.querySelector('.logoDH');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

//DARK MODE    
    const toggleDarkMode = () => {
        body.classList.toggle('fondoMoviesList');
        body.classList.toggle('dark-mode');
    };

    let modo = confirm('Desea modo oscuro');
    if(modo){
        toggleDarkMode();
    }
        
    logoDH.addEventListener('mouseover',()=>{
        toggleDarkMode();
    })
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}