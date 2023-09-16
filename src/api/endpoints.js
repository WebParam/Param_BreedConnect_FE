import { LoginSuccess, RegisterSuccess } from "../services/loginService";
import { GET, POST, PUT } from "./client";


//questionnaires
export const completeQuestionnaires = async (profile)=>{
  console.log("profile to save", profile, JSON.stringify(profile))
  const profileResult = await POST(`profile`, profile);

  if(profileResult!=null && profileResult.status == 200){
    console.log("Successfully saved");
    //LoginSuccess(loginResult);
  }
return profileResult;
}

export const uploadProduct = async (payload)=>{
  console.log("product to save", payload)
  const productRes = await POST(`product/create`, payload);

  if(productRes!=null && productRes.status == 200){
    console.log("Successfully saved");
    //LoginSuccess(loginResult);
  }
return productRes;
}

export const updateProduct = async (payload)=>{

  
  console.log("product to update", payload)

  const productRes = await POST(`product/update`, payload);

  if(productRes!=null && productRes.status == 200){
    console.log("Successfully saved");
    //LoginSuccess(loginResult);
  }
return productRes;
}


//users
export const LoginEmail = async (email,password)=>{
    const loginResult = await POST(`user/login`, 
    {
        id:email,
        secret:password
    });

    if(loginResult!=null && loginResult.status == 200){
      LoginSuccess(loginResult);
    }
  return loginResult;
}

export const RegisterCustomer = async (payload )=>{
    const registerResult = await POST(`user/register/customer`, 
    payload);

    if(registerResult!=null && registerResult.status==200){
      RegisterSuccess(registerResult);
      return registerResult;
    }else{
     return registerResult;
    }
  return registerResult;
}

export const getAllProducts = async () => {
  try {
    const getAllProductsResult = await GET(`products`);

    if (getAllProductsResult != null && getAllProductsResult.status === 200) {
      return getAllProductsResult; 
    } else {
     
      console.error('Error: Unable to fetch products');
      return null; // Return null or another appropriate value
    }
  } catch (error) {
    console.error('Error:', error);
    return null; // Return null or another appropriate value
  }
};



export const getProduct = async (productId) => {
  try {
    const getProductsResult = await GET(`product/${productId}`);

    if (getProductsResult != null && getProductsResult.status === 200) {
      return getProductsResult.data; // Return the data instead of the entire response
    } else {
      console.error('Error: Unable to fetch product');
      return null; // Return null or another appropriate value
    }
  } catch (error) {
    console.error('Error:', error);
    return null; // Return null or another appropriate value
  }
};


export const RegisterBreeder = async (
  payload
  )=>{
  const registerResult = await POST(`user/register/breeder`, 
  payload);

  if(registerResult!=null && registerResult.status==200){
    RegisterSuccess(registerResult);
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

