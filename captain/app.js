import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import captainRoutes from './routes/captain.routes.js';
import cookieParser from 'cookie-parser';
import connect from './db/db.js';
connect();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', captainRoutes);

export default app;