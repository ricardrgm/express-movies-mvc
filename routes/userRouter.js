import Router from 'express';
import userController from '../controllers/userController.js';
import authHandler from '../middlewares/authHandler.js';

const router = Router();


router.use(authHandler.encryptPassword);

router.route('/register')
      // .all(authHandler.encryptPassword)
      .post(userController.register);

router.route('/login')
       .post(userController.login);      

export default router;