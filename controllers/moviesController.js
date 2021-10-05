import moviesModel from '../models/moviesModel.js';

const getAllMovies = (req,res) =>{
    const movies = moviesModel.getMovies();
    res.json(movies);
}

const getMovieById =(req, res) =>{
    const id = req.params.id;
    const movie = moviesModel.getMovieById(id);
    res.json(movie);
} 

const newMovie = (req, res) =>{
    const movie = req.body;
    const msg = moviesModel.newMovie(movie);
    res.json({ result: msg });
}

export default {
    getAllMovies,
    getMovieById,
    newMovie
}