import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Partials/DashboardLayout";
import { Link, useLocation } from "react-router-dom";
import { getProduct, updateProduct, uploadProduct } from "../../../api/endpoints";
import { ToastContainer, toast } from 'react-toastify';
import {getBreederPurchaseRequests, AcceptRequestToPurchase,RejectRequestToPurchase} from "../../../api/endpoints"
import { FaCheckCircle, FaTimesCircle,FaEnvelope } from "react-icons/fa";
import {ProductsTab} from "../../Customer/tabs/ProductsTab";
import moment from 'moment'

export default function Products() {
  

const _location = useLocation();
const [productRequests, setProductRequests] = useState([]);


useEffect(()=>{
  GetPurchaseRequestsByBreeder();
}, [])

async function GetPurchaseRequestsByBreeder(){
  const response = await  getBreederPurchaseRequests();
  debugger;
const res = response.data.map(x=>x.data);

  setProductRequests(res);


}

async function AcceptProductRequest(id){
  const _id = toast.loading("Please wait...", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const response = await AcceptRequestToPurchase(id);
  debugger;
  if(response!=null && response.status ==200){
      let target = productRequests.filter(x=>x.id==id)[0];
  const newList= productRequests.filter(x=>x.id!=id);
  target.status=2;
  const _ = [...newList,target];
  setProductRequests(_);
  toast.update(_id, {
    autoClose:2000,
    render: "Product request accepted, you can now message the customer",
    type: "success",
    isLoading: false,
    
  });

  }else{
    toast.update(_id, {
      autoClose:2000,
      render: "Error accepting request, please try again",
      type: "error",
      isLoading: false,
      
    });
  }


}

async function RejectProductPurchase(id){
  const response = await RejectRequestToPurchase(id);
}

async function CancelProductPurchase(id){
  const response = await RejectRequestToPurchase(id);
}

async function Message(id){

}


  return (
   <>
<DashboardLayout>
<>
<ToastContainer />

<div className="container">
        <div className="row">	
          <div className="col-12">
            <div className="sherah-body">
              {/* Dashboard Inner */}
              <div className="sherah-dsinner">
                <div className="row mg-top-30">
                  <div className="col-12 sherah-flex-between">
                    {/* Sherah Breadcrumb */}
                    <div className="sherah-breadcrumb">
                      {/* <h2 className="sherah-breadcrumb__title">Order list</h2> */}
                      <ul className="sherah-breadcrumb__list"> 
                        {/* <li><a href="#">Home</a></li> */}
                        {/* <li className="active"><a href="order-list.html">Order List</a></li> */}
                      </ul>
                    </div>
                    {/* End Sherah Breadcrumb */}
                    {/* <a href="order-details" className="sherah-btn sherah-gbcolor">Add New Vendor</a> */}
                  </div>
                </div>
                <ProductsTab />
              </div>
              {/* End Dashboard Inner */}
            </div>
          </div>
        </div>	
      </div>

</>
</DashboardLayout>
   </>
  );
}
