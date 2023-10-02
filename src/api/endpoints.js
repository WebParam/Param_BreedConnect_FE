import { LoginSuccess, RegisterSuccess } from "../services/loginService";
import { POST, GET } from "./client";
import Cookies from "universal-cookie";

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

export const getUserProfile = async () => {
  try {
    const getAllProductsResult = await GET(`profile/getProfile`);

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



export const getAllProductsByCustomer = async () => {
  try {
    const getAllProductsResult = await GET(`products/customer`);

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
    const getAllProductsResult = await GET(`products/breeder`);

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


export const getBreederPurchaseRequests = async () => {
  try {
    const getAllProductsResult = await GET(`purchaserequests/breeder/`);

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
export const verifyPayment = async (txRef,reference) => {
  try {
    const res = await GET(`payment/verifyPayment/${txRef}/${reference}`);

    if (res != null && res.status === 200) {
      return res; 
    } else {
     
      console.error('Error: Unable to authorize payment');
      return null; // Return null or another appropriate value
    }
  } catch (error) {
    console.error('Error:', error);
    return null; // Return null or another appropriate value
  }
};

export const GetBreederOrders = async () => {
  try {
    const getAllProductsResult = await GET(`orders/breeder/`);

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


export const GetInvoice = async (orderId) => {
  try {
    const getPdfResult = await GET(`orders/invoice/${orderId}`);

    if (getPdfResult != null && getPdfResult.status === 200) {
      return getPdfResult; 
    } else {
     
      console.error('Error: Unable to fetch products');
      return null; // Return null or another appropriate value
    }
  } catch (error) {
    console.error('Error:', error);
    return null; // Return null or another appropriate value
  }
};



export const GetCustomerOrders = async () => {
  try {
    const getAllProductsResult = await GET(`orders/customer/`);

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

export const AllMeetingsScheduled = async () => {
  const meetingsResult = await GET('appointment/schedule/all')

  if(meetingsResult!=null && meetingsResult.status==200){
    return meetingsResult
  }else{
    alert("failed to fetch meetings")
  }

//return meetingsResult;
}
export const AllMeetingsScheduledById = async (id) => {
  const meetingsResult = await GET(`appointment/schedule/${id}`)

  if(meetingsResult!=null && meetingsResult.status==200){
    return meetingsResult
  }else{
    alert("failed to fetch meetings")
  }

//return meetingsResult;
}

export const AllMeetingsScheduledByCustomer = async () => {
  const meetingsResult = await GET(`appointment/customer`)

  if(meetingsResult!=null && meetingsResult.status==200){
    console.log("customer meetings", meetingsResult);
    return meetingsResult
  }else{
    alert("failed to fetch meetings")
  }

//return meetingsResult;
}

export const AllMeetingsScheduledByBreeder = async () => {
  const meetingsResult = await GET(`appointment/breeder`)

  if(meetingsResult!=null && meetingsResult.status==200){
    console.log("breeder meetings", meetingsResult);
    return meetingsResult
  }else{
    alert("failed to fetch meetings")
  }

//return meetingsResult;
}

export const AddMeetingSchedule = async (appointment) => {
  const meetingsResult = await POST(`calender/schedule/new`, appointment)

  if(meetingsResult!=null && meetingsResult.status==200){
    return meetingsResult
  }else{
    alert("failed to post meeting")
  }

//return meetingsResult;
}

export const GetCustomerProducts = async () => {
  const productsResult = await GET('products/customer');
  if(productsResult!=null && productsResult.status==200){
    return productsResult
  }else{
    alert("failed to fetch products")
  }
}

export const GetBreederProducts = async () => {
  const productsResult = await GET('products/breeder');
  if(productsResult!=null && productsResult.status==200){
    return productsResult
  }else{
    alert("failed to fetch products")
  }
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
  const checkPurchaseRequest = await GET(`purchaserequests/customer/${product.customerId}`)
  const found = checkPurchaseRequest.data.find(x => x.productId === product.ProductId);
  console.log("found", found)
  if(!found){
    const requestResult = await POST(`purchaserequest/create`,product)
    return requestResult
  }else{
    return
  }



//return productsResult;
}

export const AcceptRequestToPurchase = async (purchaseRequestId) => {
  const payload={
    PurchaseRequestId: purchaseRequestId
  }
  const requestResult = await POST(`purchaserequest/accept`,payload)

    return requestResult


//return productsResult;
}

export const RejectRequestToPurchase = async (purchaseRequestId) => {
  const payload={
    PurchaseRequestId: purchaseRequestId
  }
  const requestResult = await POST(`purchaserequest/reject`,payload)

    return requestResult

}



export const CreatePaymentLink = async (purchaseRequestId) => {
  const payload={
    PurchaseRequestId: purchaseRequestId
  }
  const requestResult = await POST(`payment/createPaymentLink`,payload);

    return requestResult

}


export const GenerateLink = async (paymentLinkId) => {

  const requestResult = await GET(`payment/generateLink/${paymentLinkId}`);

    return requestResult

}

export const GetNotifications = async () => {

  const requestResult = await GET(`notifications`);

    return requestResult

}

export const GetPurchaseRequest = async (customerId) => {
  console.log("my requests payload", customerId)
  const requestResult = await GET(`purchaserequests/customer/${customerId}`);
  console.log("my response", requestResult)
  return requestResult
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

