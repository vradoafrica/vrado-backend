import User from "../../model/user.model.js";

export const checkUserExists = async (email)=>{
  const user = await User.findOne({ email });

  if (user) {
    return true;
  }else{
    return false;
  }
}

export const createNewUser = async (email)=>{
  const user = await User.create({ email });
  if(user){
    return user
  }else{
    return false
  }
}