import express from 'express';
import moviesController from '../controllers/moviesController.js';
const movieRoutes = express.Router();


movieRoutes.get('/', moviesController.getAllMovies);
movieRoutes.get('/:id', moviesController.getMovieById);
movieRoutes.post('/', moviesController.newMovie);

export default movieRoutes;