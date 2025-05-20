import express from 'express';
const router = express.Router();
import { captainAuth, userAuth } from '../middleware/auth.middleware.js';
import { createRide, acceptRide } from '../controllers/ride.controllers.js';

router.post('/create-ride', userAuth, createRide);
router.put('/accept-ride', captainAuth, acceptRide);

export default router;