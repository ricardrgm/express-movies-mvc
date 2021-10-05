import HttpError from "http-errors";

const clientErrorHandler = (error, req, res, next) => {
  if (error instanceof HttpError.HttpError)
    res.status(error.statusCode).json({ Error : error.message});
};

export default clientErrorHandler;
