
import axios from "axios"
import Cookies from "universal-cookie";
const cookies = new Cookies();
const user = JSON.stringify(cookies.get("bc-user"));

const header =  {
     //  "Authorization": `Anonymous`,
      "Access-Control-Allow-Origin": "*",
      "ngrok-skip-browser-warning": "69420",
      "bc-user": user??""
    }
  
const origin = "https://localhost:7061";
// const origin = "https://cb84-154-0-14-142.ngrok-free.app"

function RefreshToken(){

  cookies.remove("bc-user");
  cookies.set("bc-user", user,{path: '/', expires: new Date(Date.now()+2592000)});
}

export async function GET(endPoint) {
  try {
    RefreshToken();
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
    debugger;
    RefreshToken();
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
