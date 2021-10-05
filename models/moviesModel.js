import movies from '../data/movies.js';

class MoviesModel{
    getMovies(){
        return movies;        
    }
    getMovieById(id){
        return movies.find(element => element.id ==id);
    }
}

export default new MoviesModel()