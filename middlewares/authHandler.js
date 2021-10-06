import HttpError from "http-errors";
import bcrypt from 'bcrypt';



const encryptPassword = async (req, res, next) => {
    try {
        const saltRounds = 10;

        const passwordHash = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = passwordHash;
        // console.log(passwordHash);
        next();
    } catch (error) {
        next(error);
    }
}

// const decryptPassword = async (req, res, next) => {
//     try {
//         const passwordCorrect = await bcrypt.compare(req.body.password, user.password)
//         if(passwordCorrect){
//             next()
//         }
//     }
//     catch(error){
//         next(error);
//     }

const authUser = (req, res, next) => {

    const authorization = req.get('authorization');

    if (!authorization) {
        next(HttpError(401, { message: 'No hay token' }));
    } else {
        const token = authorization.substring(7);

        //desencriptar el token para obtener el user
        //comparar el usuario del token con el usuario de la bd
        //obtenemos fecha caducidad token

        token ? next() : next(HttpError(401, { message: 'El token no es correcto' }))

    }

}

export default {
    authUser,
    encryptPassword
};