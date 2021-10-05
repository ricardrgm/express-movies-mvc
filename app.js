import express from 'express';
import moviesRoutes from './routes/moviesRoutes.js';
import errorRouter from './routes/errorRoutes.js'
import clientErrorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());
app.use('/movies', moviesRoutes);
app.use('*', errorRouter);

app.use(clientErrorHandler);

export default app;