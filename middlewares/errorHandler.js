<<<<<<< HEAD
import HttpError from "http-errors";

const clientErrorHandler = (error, req, res, next) => {
  if (error instanceof HttpError.HttpError) {
    res.status(error.statusCode).json({ error: error.message });
  }
};

export default clientErrorHandler;
=======
import HttpError from "http-errors"

const clientErrorHandler = (error,req,res,next)=>{
    if(error instanceof HttpError.HttpError)
        res.status(error.statusCode).json({ERROR: error.message})

    next(error);
}


export default clientErrorHandler;
>>>>>>> 2c6a961fad1d30a13dd7d03499924d8ba9e0c872
