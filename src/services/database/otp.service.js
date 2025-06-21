import { OTP } from "../../model/otp.model.js";
import User from "../../model/user.model.js";
import { generateOtp } from "../../utils/generateOtp.js";
import { isValidEmail } from "../../utils/validation.js";


export const verifyOTP = async(email,otp)=>{
    const otpRecord = await OTP.findOne({ email, otp });
    
    console.log(otpRecord)
    
    if(!otpRecord){
      return {success:false,message: 'Invalid OTP' };
    }else if()

  switch(otpRecord){
    case !otpRecord:
      return {success:false,message: 'Invalid OTP' };
      
    case :
      return {success:false,message: 'OTP expired' };

    case otpRecord:
      await OTP.deleteMany({ email }); // Clean up all expired/used OTPs
      await User.findOneAndUpdate({ email }, { isVerified: true });
      return {success:true,message: 'OTP has been verified successfully' }
    
    default:
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
