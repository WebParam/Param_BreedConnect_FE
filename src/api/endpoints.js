import { LoginSuccess } from "../services/loginService";
import { POST } from "./client";

//users
export const LoginEmail = async (email,password)=>{
    const loginResult = await POST(`user/login`, 
    {
        email:email,
        password:password
    });
  return loginResult;
}

export const RegisterCustomer = async (payload )=>{
    const registerResult = await POST(`user/register/customer`, 
    payload);

    if(registerResult!=null && registerResult.status==200){
      LoginSuccess(registerResult);
    }else{
      alert("register failed")
    }
  return registerResult;
}

export const RegisterBreeder = async (
  payload
  )=>{
  const registerResult = await POST(`user/register/breeder`, 
  payload);

  if(registerResult!=null && registerResult.status==200){
    LoginSuccess(registerResult);
  }else{
    alert("register failed")
  }

return registerResult;
}


export const LoginGoogle = async (
    {
      id,
      email,
      verified_email,
      name,
      given_name,
      family_name,
      link,
      picture,
      locale,
      hd
    }
    )=>{
    const registerResult = await POST(`user/login/google`, 
    {

        username: email,
        secret: id,
        firstname: given_name,
        lastname: family_name,
        email: email,
        cellphone: ""

    });
  
  return registerResult;
}

