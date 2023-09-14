
import axios from "axios"

const header =  {
     //  "Authorization": `Anonymous`,
      "Access-Control-Allow-Origin": "*",
      "ngrok-skip-browser-warning": "69420",
    }
  
// const origin = "https://localhost:7061";
const origin = "https://cee3-41-113-154-227.ngrok-free.app"

export async function GET(endPoint) {
  try {
    const result = await axios.get(`${origin}/${endPoint}`, { headers: header })
    return result
  } catch (error) {
    console.log(
      `[API ERROR : Method: GET; Endpoint: ${endPoint}]`,
      error.toJSON()
    )
    return error.response
  }
}

export async function POST(endPoint, payload) {
  try {

    const result = await axios.post(`${origin}/${endPoint}`, payload, { headers:header })
    return result
  } catch (error) {
    console.log(
      `[API ERROR : Method: GET; Endpoint: ${endPoint}]`,
      error.toJSON()
    )
    return error
  }
}

export function DELETE(endPoint, params) {
  axios
    .delete(`${origin}/${endPoint}`, { headers: header, params: params })
    .then(result => {
      return result
    })
    .catch(error => {
      return error
    })
}

export function PUT(endPoint, params) {
  let HEADER = {
    Authorization: `Anonymous`,
    "Access-Control-Allow-Origin": "*",
  }
  axios
    .put(`${origin}/${endPoint}`, { headers: HEADER, params: params })
    .then(result => {
      return result
    })
    .catch(error => {
      return error
    })
}
