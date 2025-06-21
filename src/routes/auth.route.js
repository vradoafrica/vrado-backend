import { Router }from "express"
import { handleOtpVerification, signup, verifyOtp } from '../controllers/auth.controller.js';

const authRouter = Router()


// src/controllers/userController.js

// authRouter.post("/request-otp",requestOtp)

authRouter.post("/sign-up",signup)

authRouter.post("/verify-otp",handleOtpVerification)

export default authRouter