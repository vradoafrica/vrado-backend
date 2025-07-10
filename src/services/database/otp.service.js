import { OTP } from "../../model/otp.model.js";
import User from "../../model/user.model.js";
import { generateOtp } from "../../utils/generateOtp.js";
import { isValidEmail } from "../../utils/validation.js";
import generateToken from "../../utils/generateToken.js"
import sendEmail from "../email/sendMail.js";

export const verifyOTP = async(email,otp)=>{
    const otpRecord = await OTP.findOne({ email, otp });
    
   
    if(!otpRecord){
      return {success:false,message: 'Invalid OTP' };
    }else if(+new Date(otpRecord.expiresAt) < +new Date()){
      return {success:false,message: 'OTP expired' };

    }else if(otpRecord){
      const userDetails = await User.findOneAndUpdate(
        { email },
        { isVerified: true },
        { new: true, runValidators: true }
      );
      const token = generateToken(userDetails)

      const clearOtpDb = await OTP.deleteMany({
        expiresAt: { $lt: new Date() }
      });
      
      return {success:true,message: 'OTP has been verified successfully',data:{userDetails,token} }
      
    }else{
      return {success:false, message: 'Unable to Verify OTP' };
  
    }
}

export const requestOtp = async (email) => {
  const otp = generateOtp();
 
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

  const otpGen = await OTP.create({ email, otp, expiresAt });



    // SEND OTP TO USERS EMAIL
  
  const text = `Welcome,
  
  Your One-Time Password (OTP) is: ${otp}
  
  Please enter this code to complete your action. This OTP is valid for the next 5 minutes.
  
  If you didn't request this, please ignore this message.
  
  Thanks,
  Vrado Ai`;
  
  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Your OTP Code</title>
    <style>
      .otp-box {
        font-size: 24px;
        font-weight: bold;
        background: #f4f4f4;
        padding: 10px 20px;
        display: inline-block;
        border-radius: 5px;
        margin: 20px 0;
      }
    </style>
  </head>
  <body>
    <p>Welcome ,</p>
    <p>Your One-Time Password (OTP) is:</p>
    <div class="otp-box">${otp}</div>
    <p>Please enter this code to complete your action. This OTP is valid for the next 10 minutes.</p>
    <p>If you didn't request this, please ignore this message.</p>
    <br>
    <p>Thanks,<br><strong>Vrado</strong></p>
  </body>
  </html>
  `;
  
  
  
    const emailSent = await sendEmail({to:email,subject:'Your OTP Code',text,html});
    
  
  console.log(emailSent)

  if(otpGen && emailSent){

   return {
      success: true,
      message: "OTP has been sent successfully",
      data: {
        deliveryMethod: "email",
        email,
        expiresAt,
      },
  }
}
   
}
