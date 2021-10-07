<<<<<<< HEAD
//  Canalizar todo los errores con el metodo next
import HttpError from "http-errors";
import userModel from "../models/userModel.js";
//import bcrypt from 'bcrypt';

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

const login = (req, resp, next) => {
  const body = req.body;

  if (!body.username || !body.password) {
    next(HttpError(400, { message: "Error parámetros entrada user/pass" }));
  } else {
    const user = { username: body.username, password: body.password };
    const result = userModel.loginUser(user);

    if (typeof result === "undefined") {
      next(HttpError(401, { message: "user/passw incorrecto" }));
    } else {

      //liberia JWT npm i jsonwebtoken
      const token = "1234";
      resp.status(201).json({ token: token });
    }
  }
};

export default {
  register,
  login
};
=======
import HttpError from "http-errors";
import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';

// const checkUserPassword = (req,res)

// const encrypt = (password)=>{
//     const saltRounds = 10;

//     return bcrypt.hash(password, saltRounds)
// }

const register = async (req, res, next) => {

    try {
        const body = req.body;

        if (!body.username || !body.password) {
            next(HttpError(400, { message: 'Error en los parámetros de entrada' }))
        } else {


            // const passwordHash = await encrypt(body.password);

            const user = { username: body.username, password: body.password };

            const result = userModel.createUser(user);

            if (result < 0)
                next(HttpError(400, { message: 'No se pudo registrar' }))

            res.status(201).json(result);
        }

    } catch (error) {
        next(error);
    }



}

const login = async (req, res, next) => {

    try {
        const body = req.body;

        if (!body.username || !body.password) {
            next(HttpError(400, { message: 'Error en los parámetros de entrada' }))
        } else {
            const user = { username: body.username, password: body.password };

            const result = userModel.loginUser(user);

            if (result === undefined) {
                next(HttpError(400, { message: 'Username or Password incorrect' }));
            } else {
                await bcrypt.compare(body.password, result.password);
                const token = '1234';
                res.status(200).json({ token: token });
            }
        }
    }
    catch (error) {
        next(error);
    }
}

export default {
    register,
    login
}
>>>>>>> 2c6a961fad1d30a13dd7d03499924d8ba9e0c872
