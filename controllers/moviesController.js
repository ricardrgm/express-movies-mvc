import moviesModel from "../models/moviesModel.js";
import HttpError from "http-errors";

const getAllMovies = (req, res) => {
  const movies = moviesModel.getMovies();
  res.json(movies);
};

// si accedemos a las BBDD el metodo es async (async / await)

// const getAllMovies = async (req,res) =>{
//     const movies = await moviesModel.getMovies();
//     res.json(movies);
// }

const insertMovie = (req, res, next) => {
  if (!req.body.title) next(HttpError(400, { message: "Movie Title missing" }));
  else {
    const movie = req.body; 
    const movies = moviesModel.insertMovie(movie);
    res.json(movies);
  }
};

const getMovieById = (req, res, next) => {
  if (!req.params.id) next(HttpError(400, { message: "no parameter found" }));
  else {
    const id = req.params.id;

    const movie = moviesModel.getMovieById(id);
    res.json(movie);
  }
};

const removeMovie = (req, res, next) => {
  const id = req.body.id;

  moviesModel.removeMovie(id);
  res.json({ result: "ok" });
};

export default {
  getAllMovies,
  getMovieById,
  removeMovie,
  insertMovie,
};
