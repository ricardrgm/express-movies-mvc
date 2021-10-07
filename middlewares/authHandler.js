import HttpError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userModel from "../models/userModel.js";
// vamopsm usar authoritation via Bearer.

const getTokenFrom = (req) => {
  const authoritation = req.get("authorization");
  if (authoritation && authoritation.toLowerCase().startWith("bearer ")) {
    return authoritation.substring(7);
  } else {
    return null;
  }
};

//liberia JWT npm i jsonwebtoken
const SECRET = "misecreto";
const tokenVerify = (token) => jwt.verify(token, SECRET);

const authUser = (req, res, next) => {
  //Authorization: string = "Bearer (posicion = 7) 1234"
  //Toke = "1234"
  const token = getTokenFrom(req);
  const decodedToken = tokenVerify(token);

  if (!token || !decodedToken.username) {
    next(HttpError(401, { message: "Token invalis o missing" }));
  } else {
    const user = userModel.createUser(decodedToken.username);
    user === undefined
      ? next()
      : next(HttpError(401, { message: "el token no es correcto" }));
    next();
  }
  //desencriptar el token para obtener el user
  //comparar el usuario con el usuario de la BBDD
  //si existe ... podemos obtener la fecha de caducidad.

  //token ? next() : next(HttpError(401, { message: "el token no es correcto" }));
};

const generatorToken = (username) => {
  const token = jwt.sign({ username: username }, SECRET);
  return token;
};

const encryptPassword = async (req, res, next) => {
  try {
    const saltRounds = 10;
    const passw = req.body.password;
    const passwordHash = await bcrypt.hash(passw, saltRounds);
    req.body.password = passwordHash;
    //volvemos a inyectar emn la request.
    next();
  } catch (error) {
    next(error);
  }
};

export default {
  authUser,
  encryptPassword,
  generatorToken
};
