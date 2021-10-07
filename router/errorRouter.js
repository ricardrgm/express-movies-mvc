import Router from 'express';
import HttpError from 'http-errors';

const router = Router();

// router.all ('/', (req,res) => 
// res.json({Result: "No existe la ruta"}));

router.all ('/', (req,res, next) => 
next (HttpError(404,{message: "No existe la ruta"})));

export default router;


