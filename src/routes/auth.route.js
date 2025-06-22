import { Router }from "express"
import { handleOtpVerification, signup } from '../controllers/auth.controller.js';

const authRouter = Router()

authRouter.post("/sign-up",signup)

authRouter.post("/verify-otp",handleOtpVerification)

export default authRouter