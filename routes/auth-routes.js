import express from 'express';
import { login, signup } from '../controllers/auth-controller.js';

const router = express.Router();

router.post('/login', login);   // Login route
router.post('/signup', signup); // Signup route

export default router;
