import { fetcher } from "../utils/fetcher.js";

export async function getCountry(req,res){

    try {
        const countryResponse = await fetcher("https://countriesnow.space/api/v0.1/countries/capital")


        res.status(200).json({
            success: true,
            message: countryResponse?.msg,
            data:countryResponse?.data
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error.',
        });
    }
   
    
}

export async function getState(req,res) {
    const country = req?.params?.state

    try {
        if(!country){
            res.status(400).json({
                success:false,
                message:"Country is required",
            })
        }
        
        const stateResponse = await fetcher("https://countriesnow.space/api/v0.1/countries/states",{
            method:"POST",
            body:JSON.stringify({country})
        })
    
    
        res.status(200).json({
            success:true,
            message:"State Fetched Successfully",
            data:stateResponse.data
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Unable to get State",
        })
    }

    
}

export async function getLGA(req,res) {
    const state = req?.params?.state

    try {
        if(!state){
            res.status(400).json({
                success:false,
                message:"State Param is required",
            })
        }
        
        const lgaResponse = await fetcher(`https://nga-states-lga.onrender.com/?state=${state}`)
        
        console.log(lgaResponse)
    
        res.status(200).json({
            success:true,
            message:"LGA Fetched Successfully",
            data:lgaResponse
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Unable to get LGA",
        })
    }

    
}

