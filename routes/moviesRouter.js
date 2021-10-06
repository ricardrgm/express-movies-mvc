import Router from 'express';
import moviesController from '../controllers/moviesController.js';

const router = Router();

router.route('/')
         .get(moviesController.getAllMovies)
         .delete(moviesController.removeMovie)
        //  .post(moviesController.insertMovie)

 router.route('/:id')
         .get(moviesController.getMovieById)
//         .put(moviesController.updateMovie)
//         .delete(moviesController.deleteMovi)

// movieRoutes.get('/', moviesController.getAllMovies);
// movieRoutes.post('U')
export default router;