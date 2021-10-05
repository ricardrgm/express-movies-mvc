import moviesModel from '../models/moviesModel.js';
import HttpError from 'http-errors';
const getAllMovies = (req,res) =>{
    const movies = moviesModel.getMovies();
    res.json(movies);
}

const getMovieById = (req,res,next)=>{
    if(!req.params.id)
        next(HttpError(400,{message:'no parameter found'}));
    const id = req.params.id;

    const movie = moviesModel.getMovieById(id);
    res.json(movie);
}


export default {
    getAllMovies
}