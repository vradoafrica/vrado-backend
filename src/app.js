import express from 'express';
import http from "http"
import cors from 'cors';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import { Server } from 'socket.io';
import { authenticate } from './middleware/authorize.middleware.js';
import handleSocket from './websocket/socket.js';
import cookieParser from 'cookie-parser';





const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // or 'http://localhost:3000' if you want to be specific
    methods: ['GET', 'POST']
  }
});



app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());  
app.use(cookieParser())

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/users",authenticate,userRouter)



io.on('connection',handleSocket);








export default server;
