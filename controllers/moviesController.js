import moviesModel from '../models/moviesModel.js';

const getAllMovies = (req,res) =>{
    const movies = moviesModel.getMovies();
    res.json(movies);
}



export default {
    getAllMovies
}