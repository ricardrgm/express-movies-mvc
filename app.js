import express from 'express';
import moviesRouter from './router/moviesRouter.js';
import userRouter from './router/userRouter.js';
import errorRouter from './router/errorRouter.js'
import clientErrorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/movies', moviesRouter);
app.use('*', errorRouter);

app.use(clientErrorHandler);

export default app;