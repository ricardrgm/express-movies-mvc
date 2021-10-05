import movies from '../data/movies.js';

class MoviesModel{
    getMovies(){
        return movies;        
    }
    getMovieById(id){
        return movies.filter((element) => element.id == id)[0];
    }

    newMovie(movie){
       const msg = (movies.push(movie) > 0)? "New Movie to List OK": "New Movie to List KO!!!";
       return msg;
    }

}

export default new MoviesModel()