import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Partials/DashboardLayout";
import { Link, useLocation } from "react-router-dom";
import { getProduct, updateProduct, uploadProduct } from "../../../api/endpoints";
import { ToastContainer, toast } from 'react-toastify';
import {getBreederPurchaseRequests, AcceptRequestToPurchase,RejectRequestToPurchase} from "../../../api/endpoints"
import { FaCheckCircle, FaTimesCircle,FaEnvelope } from "react-icons/fa";
import moment from 'moment'

export default function PurchaseRequests() {
  

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
                      <h2 className="sherah-breadcrumb__title">Swipes</h2>
                      <ul className="sherah-breadcrumb__list"> 
                        <li><a href="#">Home</a></li>
                        <li className="active"><a href="order-list.html">Swipes</a></li>
                      </ul>
                    </div>
                    {/* End Sherah Breadcrumb */}
                    {/* <a href="order-details" className="sherah-btn sherah-gbcolor">Add New Vendor</a> */}
                  </div>
                </div>
                <div className="sherah-table col-md-10 sherah-page-inner sherah-border sherah-default-bg mg-top-25">
                <h3 className="mb-5">New requests</h3>

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
               
                      <td className="py-4 pl-5 whitespace-nowrap table-header">Name</td>
                      <td className="py-4 whitespace-nowrap table-header">Interested in</td>
                      <td className="py-4 whitespace-nowrap table-header">Date</td>
                      <td className="py-4 whitespace-nowrap table-header">Accept</td>
                      <td className="py-4 whitespace-nowrap table-header">Reject</td>
              
                      <td className="py-4 whitespace-nowrap table-header"></td>
                    {/* </tr> */}
                      </tr>
                    </thead>
                    <tbody className="sherah-table__body">

                      {
                       
                       productRequests.map(x=> {return(
                        <>
                          <tr className=" border-b hover:bg-gray-50">
                      <td className="py-1">
                        <span>
                      
                        <img style={{float:"left", cursor:"pointer"}}  src={`${process.env.PUBLIC_URL}/assets/images/d2.jpg`}  alt="breeder" className="customer"/>
                       <a style={{cursor:"pointer"}} href=""> <small style={{float:"left"}}  className="mt-3 ml-1">{x?.customer?.firstname} {x?.customer?.lastname}</small></a>
                       
                        </span>
                      
                     
                      </td>
                      <td className="text-center py-1 px-2">
                        <span className="text-qblack px-2 ">
                          
                       <a style={{float:"left",cursor:"pointer"}} href=""> <img src={`${process.env.PUBLIC_URL}/assets/images/d1.jpg`}  alt="breed" style={{width:"50px", height:"50px"}} className="product-picture" /></a>
                        
                        </span>
                      </td>
                      <td className="px-1">
                        <span className="text-lg text-qgray font-medium">
                        {moment(x.date).fromNow()}
                        </span>
                      </td>
                      {x.status ==1 &&<>
                      <td className="px-1">
                        <span className="">
                          <a style={{cursor:"pointer"}} onClick={()=>{AcceptProductRequest(x.id)}}>
                          <img src={`${process.env.PUBLIC_URL}/assets/images/accept.svg`}  alt="accept" className="accept-picture" />
                          </a>
                        
                        </span>
                      </td>
                      <td className="py-1" style={{paddingLeft:"0px"}}>
                      <span className="">
                          <a style={{padding:"0px",cursor:"pointer"}}>
                          <img src={`${process.env.PUBLIC_URL}/assets/images/reject.svg`} onClick={()=>{RejectProductPurchase(x.id)}} alt="reject" className="reject-picture" />
                          </a>
                        
                        </span>
                      </td>
                      </>
                      }
                       {x.status !=1 &&<>
                        <td className="px-1" >
                        <span className="">
                          <button disabled={true}>
                          <img  src={`${process.env.PUBLIC_URL}/assets/images/accept.svg`} onClick={()=>{AcceptProductRequest(x.id)}} alt="accept" className="accept-picture" />
                          </button>
                        
                        </span>
                      </td>
                      <td className="py-1" style={{paddingLeft:"0px"}}>
                      <span className="">
                          <button style={{padding:"0px",cursor:"pointer"}}>
                          <img  src={`${process.env.PUBLIC_URL}/assets/images/reject.svg`} onClick={()=>{CancelProductPurchase(x.id)}}alt="reject" className="reject-picture" />
                          </button>
                        
                        </span>
                      </td>
                       </>
                       }
                    
                      <td className="text-center py-1 px-2">
                      
                        <span className="text-qblack px-2 ">
                          
                        <button>Details</button>
                        
                        </span>
                      </td>
                    </tr>

                        
                        </>
                        )})
                      }
     
                    </tbody>
                  </table>
                </div>


        <div style={{marginTop:"10%", float:"left"}} className="col-md-6  mg-top-25">
        
<h3 className="mb-5">Archive</h3>
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
     
            <td className="py-4 pl-5 whitespace-nowrap table-header">Name</td>
            <td className="py-4 whitespace-nowrap table-header">Interested in</td>
            <td className="py-4 whitespace-nowrap table-header">Date</td>
            <td className="py-4 whitespace-nowrap table-header">Status</td>
            <td className="py-4 whitespace-nowrap table-header">Actions</td>
    
            <td className="py-4 whitespace-nowrap table-header"></td>
          {/* </tr> */}
            </tr>
          </thead>
          <tbody className="sherah-table__body">

            {
             
             productRequests.map(x=> {return(
              <>
                <tr className=" border-b hover:bg-gray-50">
            <td className="py-1">
              <a href="">
              <span>
            
              {/* <img style={{float:"left"}} src={`${process.env.PUBLIC_URL}/assets/images/d2.jpg`}  alt="breeder" className="customer"/> */}
              <small style={{float:"left"}}  className="mt-3 ml-1">{x?.customer?.firstname} {x?.customer?.lastname}</small>
             
              </span>
            
              </a>
            </td>
            <td className="text-center py-1 px-2">
              <span className="text-qblack px-2 ">
                {x.product.name}
              {/* <img src={`${process.env.PUBLIC_URL}/assets/images/d1.jpg`}  alt="breed" style={{width:"50px", height:"50px"}} className="product-picture" /> */}
              
              </span>
            </td>
            <td className="px-1">
              <span className="text-lg text-qgray font-medium">
              <small>{moment(x.date).fromNow()}</small>
              </span>
            </td>
            {/* {x.status ==1 &&<> */}
            <td className="px-1">
            <div class="sherah-table__status sherah-color3 sherah-color3__bg--opactity">Accepted</div>
                 
            </td>
            <td className="py-1" style={{paddingLeft:"0px"}}>
            <span className="">
                {/* <button style={{padding:"0px"}}>
                <img src={`${process.env.PUBLIC_URL}/assets/images/reject.svg`} onClick={()=>{RejectProductPurchase(x.id)}} alt="reject" className="reject-picture" />
                </button> */}
                 <a href="" ><small>View </small> </a>
                 <a href="" ><small>Cancel </small> </a>
              
              </span>
            </td>
            {/* </>
            } */}
            
{/*           
            <td className="text-center py-1 px-2">
            
              <span className="text-qblack px-2 ">
                
              <button>View</button>
              
              </span>
            </td> */}
          </tr>

              
              </>
              )})
            }

          </tbody>
        </table>
      </div>





      <div style={{marginTop:"10%",float:"left"}} className="col-md-4 ml-5 mg-top-25">
        
        <h3 className="mb-5">Popular pets</h3>
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
             
                    <td className="py-4 pl-5 whitespace-nowrap table-header">Name</td>
                    <td className="py-4 whitespace-nowrap table-header">Date</td>
                    <td className="py-4 whitespace-nowrap table-header">View count</td>
                    <td className="py-4 whitespace-nowrap table-header">Actions</td>
                  {/* </tr> */}
                    </tr>
                  </thead>
                  <tbody className="sherah-table__body">
        
                    {
                     
                     productRequests.map(x=> {return(
                      <>
                        <tr className=" border-b hover:bg-gray-50">
                    <td className="py-1">
                      <span>
                    
                      {/* <img style={{float:"left"}} src={`${process.env.PUBLIC_URL}/assets/images/d2.jpg`}  alt="breeder" className="customer"/> */}
                      <small style={{float:"left"}}  className="mt-3 ml-1">{x?.customer?.firstname} {x?.customer?.lastname}</small>
                     
                      </span>
                    
                   
                    </td>
                  
                    <td className="px-1">
                      <span className="text-lg text-qgray font-medium">
                      <small>{moment(x.date).fromNow()}</small>
                      </span>
                    </td>
                    {/* {x.status ==1 &&<> */}
                    <td className="px-1">
                    <div class="sherah-table__status sherah-color3 sherah-color3__bg--opactity">12</div>
                         
                    </td>
                    <td className="py-1" style={{paddingLeft:"0px"}}>
                    <span className="">
                      {/* <button style={{padding:"0px"}}>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/reject.svg`} onClick={()=>{RejectProductPurchase(x.id)}} alt="reject" className="reject-picture" />
                      </button> */}
                      <a href=""><small>View </small> </a>
                    
                    </span>
                    </td>
                    {/* </>
                    } */}
                    
        {/*           
                    <td className="text-center py-1 px-2">
                    
                      <span className="text-qblack px-2 ">
                        
                      <button>View</button>
                      
                      </span>
                    </td> */}
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
