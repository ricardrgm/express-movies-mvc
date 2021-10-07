import movies from '../data/movies.js';

class MoviesModel{
    getMovies(){
        return movies;        
    }
    getMovieById(id){
<<<<<<< HEAD
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

=======
        return movies.find(element => element.id ==id);
    }
    removeMovie(id){
        const index = movies.findIndex(element => element.id ==id);
        movies.splice(index,1);
        return;
    }
>>>>>>> 2c6a961fad1d30a13dd7d03499924d8ba9e0c872
}

export default new MoviesModel()