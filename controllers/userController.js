//  Canalizar todo los errores con el metodo next
import HttpError from "http-errors";
import userModel from "../models/userModel.js";
import authHandler from "../middlewares/authHandler.js";
import bcrypt from 'bcrypt';

//router.route("/register").post(userController.register); userRoure.js
//Usamos async cuando const passwordHash = await bcrypt.hash(body.password, saltRounds);
//const register = async (req, res, next) => {
const register =  (req, res, next) => {
  try {
      const body = req.body;
    
      if (!body.username || !body.password) {
        next(HttpError(400, { message: "Error parámetros entrada user/pass" }));
      } //else if (body.username){ comporbar que el username no exista o exista}
      else {
        //encriptar la password  ***  OJO!! trabajamos con promesas ****
        // const saltRounds = 10;
        // const passwordHash = await bcrypt.hash(body.password, saltRounds);
        // const user = { username: body.username, password: passwordHash };

        // hemos cerado un middleware en
        // authHandler : encryptPassword intercepta la req la encripta
        // y la vuelve inyectar en req -> const body = req.body;
    
        // Crear un objeto (json) use / pass
        const user = { username: body.username, password: body.password };
        const result = userModel.createUser(user);
    
        if (result < 0) {
          next(HttpError(400, { message: "No se pudo registrar" }));
        }
    
        res.status(201).json(result);
      }
      
  } catch (error) {
      next(error);
  }  
};

const login = async (req, resp, next) => {
  const body = req.body;

  if (!body.username || !body.password) {
    next(HttpError(400, { message: "Error parámetros entrada user/pass" }));
  } else {
    const user = { username: body.username, password: body.password };
    const result = userModel.loginUser(user);

    if (typeof result === "undefined") {
      next(HttpError(401, { message: "user/passw incorrecto" }));
    } else {

      // comparar el password encriyptado
      const passwordOk = await bcrypt.compare(body.password, result.password);
      if (!passwordOk) {
        next(HttpError(401, { message: "user/passw incorrecto" }));
      } else {

      //libreria JWT -> npm i jsonwebtoken
      //generar password
      const token = authHandler.generatorToken(body.username);
      resp.status(201).json({ token: token });
      }
    }
  }
};

export default {
  register,
  login
};
