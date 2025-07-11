import checkBusinessName from "../../services/cac/checkBusinessName.js";

export default async function CheckName(req,res){
  try {
    const data = req.body

   if(!data?.lineOfBusiness || !data?.proposedName || !data?.classificationId){
    res.status(400).json({success:false,message:"All body data are required"});
   }

    const businessResponse = await checkBusinessName(data)
     
    res.status(200).json({...businessResponse});
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error.',
  });
  }
}
    