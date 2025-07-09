import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import businessRoute from './routes/business.route.js';
import { authenticate } from './middleware/authorize.middleware.js';
import limiter from './middleware/rateLimiter.middlewate.js';
import businessNameCheck from './routes/cac/businessName.route.js';






const app = express()

app.use(cors({
  // origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  origin:"*",
  credentials: true,
}));

app.use(express.json());  
app.use(limiter)

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/users",authenticate,userRouter)
app.use("/api/v1/business",authenticate,businessRoute)
app.use("/api/v1/cac/checkname",businessNameCheck)









export default app;
