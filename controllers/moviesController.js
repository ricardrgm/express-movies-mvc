import moviesModel from '../models/moviesModel.js';
import HttpError from 'http-errors';
<<<<<<< HEAD

=======
>>>>>>> 2c6a961fad1d30a13dd7d03499924d8ba9e0c872
const getAllMovies = (req,res) =>{
    const movies = moviesModel.getMovies();
    res.json(movies);
}

<<<<<<< HEAD
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
=======
const getMovieById = (req,res,next)=>{
    if(!req.params.id)
        next(HttpError(400,{message:'no parameter found'}));
    const id = req.params.id;

    const movie = moviesModel.getMovieById(id);
    res.json(movie);
}

const removeMovie = (req,res,next)=>{
    const id = req.body.id;

    moviesModel.removeMovie(id);
    res.json({result:'ok'});
>>>>>>> 2c6a961fad1d30a13dd7d03499924d8ba9e0c872
}


export default {
    getAllMovies,
    getMovieById,
<<<<<<< HEAD
    insertMovie,
    deleteMovieById,
    deleteMovie
=======
    removeMovie
>>>>>>> 2c6a961fad1d30a13dd7d03499924d8ba9e0c872
}