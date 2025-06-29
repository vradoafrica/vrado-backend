import { checkBusinessExists, createNewBusiness,getBusinessByID} from "../services/database/business.service.js"


  export const registerBusiness = async function (req, res) {
    const userEmail = req?.user?._doc.email
    const userId = req?.user?._doc._id
    const {email,phone,name} = req.body

    // Check Business Details
    const verifyBusiness = await checkBusinessExists(email,userId,phone,name)
    

    if(verifyBusiness){
            return res.status(400).json({
              success: false,
              message: 'Unable to register busniess',
            });
    }else{
        const newBusiness = await createNewBusiness({...req.body,userId},userEmail)
        res.status(200).json({success:true,newBusiness})
    }

    // {"userId":"685ead1c0f1573a07b997622",
    //   "name": "food eaters",
    //      "email": "friday@gmal.com",
    //      "phone": "2349049841543",
    //      "address": "hilltop",
    //      "website": "www.test.com",
    //      "logoUrl": "https.logo.com"}
    
  }
  
  export const getBusiness = async function (req, res) {
    const userId = req?.user?._doc._id
    
    const business = await getBusinessByID(userId)

    if(business){
        return res.status(200).json({
              success: true,
              data:business,
              message:"Business found"
            });
    }else{
      return res.status(404).json({
        success: false,
        message:"No Business found"
      });
    }

    console.log(verifyBusiness)
    
  }