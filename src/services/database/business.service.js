import Business from "../../model/business.modal.js";
import User from "../../model/user.model.js";

export const checkBusinessExists = async (email,userId,phone,name)=>{
  try {
    const checkEmail = await Business.findOne({email});
  const checkUserId = await Business.findOne({userId});
  const checkUserPhone = await Business.findOne({phone});
  const checkBusinessName = await Business.findOne({name});


  if (checkEmail || checkUserId || checkUserPhone || checkBusinessName) {
    return true;
  }else{
    return false;
  }
  } catch (error) {
    return {message:error}
  }
}

export const createNewBusiness = async (bDetails,userEmail)=>{
  const business = await Business.create({...bDetails});
  if(business){
    // const userDetails = await User.findOneAndUpdate(
    //     { email:userEmail },
    //     { approved: true },
    //     { new: true, runValidators: true }
    //   )
    return {business}
  }else{
    return false
  }
}

export const getBusinessByID = async(userId)=>{

  const business = await Business.findOne({ userId });
console.log(business)

  if(business){
    return business
  }else{
    return false
  }
}