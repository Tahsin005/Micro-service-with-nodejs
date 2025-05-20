import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import rideRoutes from './routes/ride.routes.js';
import connect from './db/db.js';
connect();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', rideRoutes);


export default app;