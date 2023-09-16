import { LoginSuccess, RegisterSuccess } from "../services/loginService";
import { POST, GET } from "./client";


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


export const getBreederProducts = async (breederId) => {
  try {
    const getAllProductsResult = await GET(`products/breeder/${breederId}`);

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


export const AllProducts = async () => {
  const productsResult = await GET('products')

  if(productsResult!=null && productsResult.status==200){
    return productsResult
  }else{
    alert("failed to fetch products")
  }

//return productsResult;
}

export const GetRequest = async () => {
  const productsResult = await GET('products')

  if(productsResult!=null && productsResult.status==200){
    return productsResult
  }else{
    alert("failed to fetch products")
  }

//return productsResult;
}

export const RequestToPurchase = async (product) => {
  console.log("product", product)
  const payload = {
    breederId: "64e7cccba2772a81945bf086",
    customerId: "64e7cccba2772a819454f086",
    productId: product.id,
    status: 0
  }
  const requestResult = await POST(`purchaserequest/create`,payload)

  if(requestResult!=null && requestResult.status==200){
    alert("Requested Successfully")
    return requestResult
  }else{
    alert("failed to request to purchase")
  }

//return productsResult;
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

