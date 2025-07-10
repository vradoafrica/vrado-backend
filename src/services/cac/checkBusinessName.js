export default async function checkBusinessName(data) {
  let responseData
try {
    const request = await fetch(process.env.CAC_NAME_SEARCH,{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({...data,shouldBeSimilarToPurposedName:true})

    })


    if (!request.ok) {
        const response = await request.json()

        
          console.log(response)
       throw new Error(response.message);
    } else{
        const response = await request.json()

        let success = response.status
          console.log(response)
    
        if(success == "200"){
            responseData = response?.recommendedAction
        }else{
            responseData = response
        }
    }

   
    
    
} catch (error) {
    responseData = {success:false,message:error.message}
}
console.log(responseData)
return responseData
}