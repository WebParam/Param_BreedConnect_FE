import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Partials/DashboardLayout";
import { Link, useLocation } from "react-router-dom";
import { GetBreederOrders, updateProduct, uploadProduct } from "../../../api/endpoints";
import { ToastContainer, toast } from 'react-toastify';
import {getBreederPurchaseRequests, AcceptRequestToPurchase,RejectRequestToPurchase} from "../../../api/endpoints"
import { FaCheckCircle, FaTimesCircle,FaEnvelope } from "react-icons/fa";
import moment from 'moment'

export default function OrderList() {
  

const _location = useLocation();
const [orders, setOrders] = useState([]);


useEffect(()=>{
  _GetOrdersByBreeder();
}, [])

async function _GetOrdersByBreeder(){
  const response = await  GetBreederOrders();
debugger;
console.log("RERE", response);
  const res = response.data.map(x=>x?.data);
console.log("ORDER", response.data)
  setOrders(response.data);


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
                        <li className="active"><a href="order-list.html">Orders</a></li>
                      </ul>
                    </div>
                    {/* End Sherah Breadcrumb */}
                    {/* <a href="order-details" className="sherah-btn sherah-gbcolor">Add New Vendor</a> */}
                  </div>
                </div>

                <h4 style={{fontSize:"1.5em", fontWeight:"600"}} className=" mt-6">Recent orders</h4>

{/* <div className="col-md-12"> */}
                <div style={{float: "left", marginRight: "1%",  paddingTop: "2%", paddingBottom: "2%", borderRadius:"15px"}} className="products-sorting col-md-4 bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mt-[40px]">
              
                <img style={{maxHeight:"60px"}} src={`${process.env.PUBLIC_URL}/assets/images/default.png`}  alt="Profile"  />
                  <div>
                  
                  <p className="font-400 text-[13px]">
                    <span className="text-qgray">Jane Doe </span> <br/>December 30 2023
                  </p>
                </div>
                  <div className="flex space-x-3 items-center">
                  <p className="font-400 text-[13px]">
                    <span className="text-qgray">R4000</span>
                  </p>
                    {/* <span className="font-400 text-[13px]">Sort by:</span>
                    <div className="flex space-x-3 items-center border-b border-b-qgray">
                      <span className="font-400 text-[13px] text-qgray">
                        Default
                      </span>
                      <span>
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1 1L5 5L9 1" stroke="#9A9A9A" />
                        </svg>
                      </span> */}
                    {/* </div> */}
                  </div>
                  <div>
                  <div class="sherah-table__status sherah-color3 sherah-color3__bg--opactity">Pending</div>
                  </div>
               
                </div>
                <div style={{ paddingTop: "2%", paddingBottom: "2%", borderRadius:"15px"}} className="products-sorting col-md-4 bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mt-[40px]">
                <img style={{maxHeight:"60px"}} src={`${process.env.PUBLIC_URL}/assets/images/default.png`}  alt="Profile"  />
                  <div>
                  
                  <p className="font-400 text-[13px]">
                    <span className="text-qgray">Jane Doe </span> <br/>December 30 2023
                  </p>
                </div>
                  <div className="flex space-x-3 items-center">
                  <p className="font-400 text-[13px]">
                    <span className="text-qgray">R4000</span>
                  </p>
                    {/* <span className="font-400 text-[13px]">Sort by:</span>
                    <div className="flex space-x-3 items-center border-b border-b-qgray">
                      <span className="font-400 text-[13px] text-qgray">
                        Default
                      </span>
                      <span>
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1 1L5 5L9 1" stroke="#9A9A9A" />
                        </svg>
                      </span> */}
                    {/* </div> */}
                  </div>
                  <div>
                  <div class="sherah-table__status sherah-color3 sherah-color3__bg--opactity">Pending</div>
                  </div>
               
                </div>
                {/* </div> */}
                <div className="sherah-table col-md-10 sherah-page-inner sherah-border sherah-default-bg mg-top-25">
        

                  <table id="sherah-table__vendor" className="sherah-table__main sherah-table__main-v3">
                    {/* sherah Table Head */}
                    <thead className="sherah-table__head">
                      {/* <tr> */}
                        {/* <th className="sherah-table__column-1 sherah-table__h1">Request ID</th>
                        <th className="sherah-table__column-2 sherah-table__h2">Customer Name</th>
                        <th className="sherah-table__column-3 sherah-table__h3">Date</th>
                        <th className="sherah-table__column-4 sherah-table__h4">Status</th>
                        <th className="sherah-table__column-5 sherah-table__h5">Order Total</th>
                        <th className="sherah-table__column-8 sherah-table__h8">Action</th> */}
                          <tr className="text-base text-qgray whitespace-nowrap px-2 border-b default-border-bottom ">
               
                      <td className="py-4 pl-5 whitespace-nowrap table-header">Id</td>
                      <td className="py-4 whitespace-nowrap table-header">Name</td>
                      <td className="py-4 whitespace-nowrap table-header">Status</td>
                      <td className="py-4 whitespace-nowrap table-header">Date</td>
                      <td className="py-4 whitespace-nowrap table-header">Amount</td>
                      <td className="py-4 whitespace-nowrap table-header">Code</td>
             
                    {/* </tr> */}
                      </tr>
                    </thead>
                    <tbody className="sherah-table__body">

                      {
                       
                       orders.map((x,i)=> {return(
                        <>
                          <tr className=" border-b hover:bg-gray-50">
                      <td className="py-1">
                        <span style={{float:"left"}}>
                          {x?.id}
                        {/* <img src={`${process.env.PUBLIC_URL}/assets/images/d2.jpg`}  alt="breeder" className="customer"/> */}
                       
                        </span>
                      
                     
                      </td>
                      <td className="text-center py-1 px-2">
                        <span className="text-qblack px-2 " style={{float:"left"}}>
                          
                          {x?.customer?.firstname} {x?.customer?.lastname}
                        </span>
                      </td>
                      <td className="text-center py-1 px-2">
                        <span className="text-qblack px-2 " style={{float:"left"}}>
                          
                          {x?.status}
                        </span>
                      </td>
                      <td className="px-1">
                        <span className="text-lg text-qgray font-medium" style={{float:"left"}}>
                        {moment(x?.dateCreated).fromNow()}
                        </span>
                      </td>
                     
                      <td className="px-1">
                        <span className="">
                        <span className="text-qblack px-2 ">
                          
                          {x?.product?.price}
                          </span>
                        
                        </span>
                      </td>
                      <td className="py-1 mt-2" style={{paddingLeft:"0px", marginTop:"", float:"left"}}>
                      <span className="">
                         {/* {x.pin} */}
                         <input style={{width: "150px", height: "auto"}} type="text" />
                        
                        </span>
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
