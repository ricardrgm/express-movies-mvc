import HttpError from "http-errors";
import userModel  from "../models/userModel.js";


const register = (req,res,next)=>{
    const body = req.body;

    if(!body.username || !body.password){
        next(HttpError(400,{message:'Error en los parámetros de entrada'}))
    } else {
        const user = {username:body.username,password:body.password};

        const result = userModel.createUser(user);

    if(result<0)
    next(HttpError(400,{message:'No se pudo registrar'}))

    res.status(201).json(result);
    }
    
}

    export default {
        register
    }