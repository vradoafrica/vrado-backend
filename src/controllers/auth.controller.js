import {
  checkUserExists,
  createNewUser,
} from "../services/database/user.service.js";

import sendMail from "../services/email/sendMail.js";
import { verifyOTP,requestOtp } from "../services/database/otp.service.js";
import { isValidEmail } from "../utils/validation.js";




const handleLogin = async (email) => {

  const otp = await requestOtp(email)
  return otp
};

export const signup = async function (req, res) {
  const { email } = req.body;
  
  try {
  // CHECK IF USER EXISTS IN DB
  const validEmail = isValidEmail(email)
  if (!validEmail) res.status(400).json({message:"Valid Email required"});
  const userExists = await checkUserExists(email);
  
  if (!userExists) {
    const newUser = await createNewUser(email);
    if (!newUser) res.status(404).json("Unable to create Account");
    const login = await handleLogin(newUser.email);
    res.status(200).json(login);
  } else {
    const login = await handleLogin(email);
    res.status(200).json(login);
  }  
  } catch (error) {
    
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
  
};

// export const requestOtp = async (req, res) => {
//   const { email } = req.body;

//   let response;
//   if (email) {
//     const otp = generateOtp();
//     const emailSent = true;
//     response = {
//       success: true,
//       message: "OTP has been sent successfully",
//       data: {
//         deliveryMethod: "email",
//         email,
//         expiresIn: 300,
//       },
//     };
//   } else {
//     response = { error: "Email is required" };
//   }
//   console.log(req.body);

//   res.status(200).json(response);
// };

export const handleOtpVerification = async (req, res) => {
  const { email, otp } = req.body;

  const validEmail = isValidEmail(email)
  
  if (!validEmail) res.status(400).json({message:"Valid Email required"});

  // Check if input is provided
  if (!validEmail || (!otp && String(otp))) {
    return res.status(400).json({
      success: false,
      message: 'Email and OTP are required.',
    });
  }

  try {
    const isValid = await verifyOTP(email, otp);
    
    if (!isValid.success) {
      return res.status(401).json(isValid);
    }
    
    return res.status(200).json(isValid);

  } catch (error) {
    console.error('OTP verification error:', error.message);

    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};
