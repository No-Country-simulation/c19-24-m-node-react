import { Router } from 'express';
import { Auth } from '../controllers/authController.js';

const router = Router();

router.post("/login", Auth.login);

router.post("/register", Auth.register);

export default router;