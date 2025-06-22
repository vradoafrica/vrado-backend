import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import { authenticate } from './middleware/authorize.middleware.js';

import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());  

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/users",authenticate,userRouter)




export default app;
