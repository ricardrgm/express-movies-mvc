import express from 'express';
<<<<<<< HEAD
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
=======
import moviesRouter from './routes/moviesRouter.js';
import userRouter from './routes/userRouter.js';
import errorRouter from './routes/errorRouter.js';
import clientErrorHandler from './middlewares/errorHandler.js';
const app = express();

app.use(express.json());

app.use('/users',userRouter);
app.use('/movies', moviesRouter);
app.use('*',errorRouter)

app.use(clientErrorHandler);
// app.use(databaseErrorHandler);

>>>>>>> 2c6a961fad1d30a13dd7d03499924d8ba9e0c872

export default app;