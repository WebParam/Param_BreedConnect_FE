import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Partials/DashboardLayout";
import { Link, useLocation } from "react-router-dom";
import { getProduct, updateProduct, uploadProduct } from "../../../api/endpoints";
import { ToastContainer, toast } from 'react-toastify';
import {getBreederPurchaseRequests, AcceptRequestToPurchase,RejectRequestToPurchase} from "../../../api/endpoints"
import { FaCheckCircle, FaTimesCircle,FaEnvelope } from "react-icons/fa";

export default function OrderList() {
  

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
                      <h2 className="sherah-breadcrumb__title">Order list</h2>
                      <ul className="sherah-breadcrumb__list"> 
                        <li><a href="#">Home</a></li>
                        <li className="active"><a href="order-list.html">Order List</a></li>
                      </ul>
                    </div>
                    {/* End Sherah Breadcrumb */}
                    <a href="order-details" className="sherah-btn sherah-gbcolor">Add New Vendor</a>
                  </div>
                </div>
                <div className="sherah-table sherah-page-inner sherah-border sherah-default-bg mg-top-25">
                  <table id="sherah-table__vendor" className="sherah-table__main sherah-table__main-v3">
                    {/* sherah Table Head */}
                    <thead className="sherah-table__head">
                      <tr>
                        <th className="sherah-table__column-1 sherah-table__h1">Request ID</th>
                        <th className="sherah-table__column-2 sherah-table__h2">Customer Name</th>
                        <th className="sherah-table__column-3 sherah-table__h3">Date</th>
                        <th className="sherah-table__column-4 sherah-table__h4">Status</th>
                        <th className="sherah-table__column-5 sherah-table__h5">Order Total</th>
                        <th className="sherah-table__column-8 sherah-table__h8">Action</th>
                      </tr>
                    </thead>
                    <tbody className="sherah-table__body">

                      {
                       
                       productRequests.map(x=> {return(
                        <>
                         <tr>
                          <td className="sherah-table__column-1 sherah-table__data-1">
                            <div className="sherah-language-form__input">
                              <input className="sherah-language-form__check" id="checkbox" name="checkbox" type="checkbox" />
                              <p className="crany-table__product--number"><a href="#" className="sherah-color1">{x.id}</a></p>
                            </div>
                          </td>
                          <td className="sherah-table__column-2 sherah-table__data-2">
                            <div className="sherah-table__product-content">
                              <p className="sherah-table__product-desc">{x.customer.firstname} {x.customer.lastname}</p>
                            </div>
                          </td>
                          <td className="sherah-table__column-3 sherah-table__data-3">
                            <p className="sherah-table__product-desc">{x.date} <span className="sherah-table__time">04:26 PM</span></p>
                          </td>
                          <td className="sherah-table__column-4 sherah-table__data-4">
                            <div className="sherah-table__product-content">
                              <div className="sherah-table__status sherah-color2 sherah-color2__bg--opactity">{x.status}</div>
                            </div>
                          </td>
                          <td className="sherah-table__column-5 sherah-table__data-5">
                            <div className="sherah-table__product-content">
                              <p className="sherah-table__product-desc">R{x.product.price}</p>
                            </div>
                          </td>
                          <td className="sherah-table__column-8 sherah-table__data-8">
                            {x.status ==1 &&<>
                              <div className="sherah-table__status__group">
                              <a onClick={()=>{AcceptProductRequest(x.id)}} className="sherah-table__action sherah-color2 sherah-color3__bg--opactity">
                              <FaCheckCircle/>
                              </a>
                              <a onClick={()=>{RejectProductPurchase(x.id)}} className="sherah-table__action sherah-color2 sherah-color2__bg--offset">
                              <FaTimesCircle/>
                              </a>
                            </div>
                            </>
                            }
                            {x.status ==2 &&<>
                              <div className="sherah-table__status__group">
                              <a onClick={()=>{Message(x.id)}} className="sherah-table__action sherah-color2 sherah-color3__bg--opactity">
                              <FaEnvelope/>
                              </a>
                              <a onClick={()=>{CancelProductPurchase(x.id)}} className="sherah-table__action sherah-color2 sherah-color2__bg--offset">
                              <FaTimesCircle/>
                              </a>
                            </div>
                            </>
                            }
                            
                          
                          </td>
                         </tr>
                        </>
                        )})
                      }
     
                    </tbody>
                  </table>
                </div>
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
