import checkBusinessName from "../../services/cac/checkBusinessName.js";

export default async function CheckName(req,res){
    const data = req.body
    const request = await checkBusinessName(data)
     
    return res.status(500).json({
        request
      });
}
    