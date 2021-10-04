import movies from '../data/movies.js';

class MoviesModel{
    getMovies(){
        return movies;        
    }
}

export default new MoviesModel()