import movies from '../data/movies.js';

class MoviesModel{
    getMovies(){
        return movies;        
    }
    getMovieById(id){
        return movies.find(element => element.id ==id);
    }
    removeMovie(id){
        const index = movies.findIndex(element => element.id ==id);
        movies.splice(index,1);
        return;
    }
}

export default new MoviesModel()