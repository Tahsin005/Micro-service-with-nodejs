import express from 'express';
import { login, logout, profile, register, acceptedRide } from '../controllers/user.controller.js';
import { userAuth } from '../middleware/auth.middleware.js';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/profile', userAuth, profile);
router.get('/accepted-ride', userAuth, acceptedRide);

export default router;