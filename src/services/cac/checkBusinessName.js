export default async function checkBusinessName(data) {
  let responseData;
  try {
    const request = await fetch(process.env.CAC_NAME_SEARCH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, shouldBeSimilarToPurposedName: true }),
    });

    if (!request.ok) {
      const response = await request.json();

      throw new Error(response.message);
    } else {
      const response = await request.json();

      let success = response.status;


      if (success == "200") {
        responseData = response?.recommendedAction;
      } else {
        responseData = response;
      }
    }
  } catch (error) {
    responseData = { success: "err", message: error.message };
  }
  console.log(responseData);
  return responseData;
}
