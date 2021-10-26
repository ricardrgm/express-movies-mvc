import movies from '../data/movies.js';

// instancia la clase MySqlManager por lo tanto acceso a los metodos de conexión
import connection from '../mysql/dbManager.js';

class MoviesModel{
    // '../data/movies.js'
    getMovies(){
        return movies; 
    }

    // async getMovies(){
    //          try {
    //         const result =await connection.query(
    //             'select * from movies' 
    //         )
    //         return result;

    //     } catch (error) {
    //     }
    // }

    getMovieById(id){
        return movies.filter((element) => element.id == id)[0];
    }

    insertMovie(movie){
       const result = (movies.push(movie) > 0)? movie: "New Movie to List KO!!!";
       return result;
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