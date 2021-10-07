//import express from 'express';
import Router from "express";
import moviesController from "../controllers/moviesController.js";
import authHandler from '../middlewares/authHandler.js'


//const movieRoutes = express.Router();
// movieRoutes.get('/', moviesController.getAllMovies);
// movieRoutes.get('/:id', moviesController.getMovieById);
// movieRoutes.post('/', moviesController.insertMovie);
//export default movieRoutes;

const router = Router();
router.use(authHandler.authUser);

router
  .route("/")
  .get(moviesController.getAllMovies)
  .post(moviesController.insertMovie)
  .delete(moviesController.deleteMovie);

router
  .route("/:id")
  .get(moviesController.getMovieById)
  .delete(moviesController.deleteMovieById);
//         .put(moviesController.updateMovie)
//         .delete(moviesController.deleteMovieById)

export default router;
