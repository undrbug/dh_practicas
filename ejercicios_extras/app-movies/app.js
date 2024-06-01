import movies from "./movies.js";

/*
Crear la funcionalidad searchMovie que debe recibir por parámetro
un id ó un title de la película. La responsabilidad de esta función será
la de mostrar el detalle de alguna de las películas registradas en
nuestro módulo movies, si la película no es encontrada entonces la
función debe devolver null.
*/

const moviesDH = {
    movies: [...movies],
    getAll: () => moviesDH.movies,
    getAlll: function() {
        return this.movies;
    },
    listMovies: function() {
        return this.movies.map(movie => movie.title);
    },
    searchMovie: function(search) {
        if (typeof search === "number") {
            //Buscar por id
            return this.movies.find(movie => movie.id === search) || null;
        } else if (typeof search === "string") {
            //Buscar por titulo o fraccion del titulo
            return this.movies.find(movie => movie.title.toLowerCase().includes(search.toLowerCase())) || null;
        } else {
            return null;
        }
    },
    searchMoviesByGenre: function(genre) {
        return this.movies.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    },
    totalPrice: function() {
        return this.movies.reduce((acc, movie) => acc + movie.price, 0);
    },
    changeMovieGenre: function(id, newGenre) {
        const movie = this.searchMovie(id);
        if (movie) {
            movie.genre = newGenre;
            return movie;
        } else {
            return null;
        }
    }


    

}

console.log(moviesDH.searchMovie("pulp"));
console.log(moviesDH.searchMovie(1));
console.log(moviesDH.getAll());
console.log(moviesDH.changeMovieGenre(5, "Drama"));
console.log(moviesDH.getAll());

