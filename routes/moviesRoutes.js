import express from 'express';
import moviesController from '../controllers/moviesController.js';
const movieRoutes = express.Router();


movieRoutes.get('/', moviesController.getAllMovies);

export default movieRoutes;