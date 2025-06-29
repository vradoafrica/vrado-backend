export const getUser = async (req,res,next)=>{

    return res.status(200).json({message:'authorized',user:req?.user?._doc})
}