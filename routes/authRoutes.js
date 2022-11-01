import { register, logIn, updateUser } from '../controllers/authController.js';
import express from 'express';

const router = express.Router();

router.route('/register').post(register);
router.route('/log-in').post(logIn);
router.route('/update-user').patch(updateUser);

export default router;
