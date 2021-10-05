import movies from '../data/movies.js';

class MoviesModel{
    getMovies(){
        return movies;        
    }
    getMovieById(id){
        return movies.filter((element) => element.id == id)[0];
    }

    insertMovie(movie){
       const msg = (movies.push(movie) > 0)? "New Movie to List OK": "New Movie to List KO!!!";
       return msg;
    }

    deleteMovieById(id){
        const indice = movies.findIndex((element) => element.id == id)
        movies.splice(indice,1);
        return "movie eliminada";
    }

    deleteMovie(movie){
        const indice = movies.findIndex((element) => element.id == movie.id)
        movies.splice(indice,1);
        return "movie eliminada";
    }

}

export default new MoviesModel()