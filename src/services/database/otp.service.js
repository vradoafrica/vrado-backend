import { OTP } from "../../model/otp.model.js";
import User from "../../model/user.model.js";
import { generateOtp } from "../../utils/generateOtp.js";
import { isValidEmail } from "../../utils/validation.js";
import generateToken from "../../utils/generateToken.js"

export const verifyOTP = async(email,otp)=>{
    const otpRecord = await OTP.findOne({ email, otp });
    
   
    
    if(!otpRecord){
      return {success:false,message: 'Invalid OTP' };
    }else if(+new Date(otpRecord.expiresAt) < +new Date()){
      return {success:false,message: 'OTP expired' };

    }else if(otpRecord){
      await OTP.deleteMany({ email }); // Clean up all expired/used OTPs
      const userDetails = await User.findOneAndUpdate({ email }, { isVerified: true });
      console.log(userDetails)
      const token = generateToken(userDetails)
      
      return {success:true,message: 'OTP has been verified successfully',data:{userDetails,token} }
    }else{
      return {success:false, message: 'Unable to Verify OTP' };
  
    }
}

export const requestOtp = async (email) => {
  const otp = generateOtp();
  console.log(otp)
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes

  const otpGen = await OTP.create({ email, otp, expiresAt });

  if(otpGen){

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
