import moviesModel from '../models/moviesModel.js';
import HttpError from 'http-errors';

const getAllMovies = (req,res) =>{
    const movies = moviesModel.getMovies();
    res.json(movies);
}

const getMovieById =(req, res, next) =>{
    // error management
    // necesitamos un módulo de mapeo de errores npm i http-errors
    if(!req.params.id) next(HttpError(400, {message:'sin parametro de búqueda'}));

    const id = req.params.id;
    const movie = moviesModel.getMovieById(id);
    res.json(movie);
} 

const insertMovie = (req, res) =>{
    const movie = req.body;
    const msg = moviesModel.insertMovie(movie);
    res.json({ message: msg });
}

const deleteMovieById = (req, res) =>{
    const id = req.params.id;
    const msg = moviesModel.deleteMovieById(id);
    
    res.json({ message: msg});
}

const deleteMovie = (req, res) =>{
    //const movie = req.body.id;
    const movie = req.body;
    const msg = moviesModel.deleteMovieById(movie.id);
    
    // const movie = req.body;
    // const msg = moviesModel.deleteMovie(movie);
    
    res.json({ message: msg});
}


export default {
    getAllMovies,
    getMovieById,
    insertMovie,
    deleteMovieById,
    deleteMovie
}