import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Partials/DashboardLayout";
import { Link, useLocation } from "react-router-dom";
import { getProduct, updateProduct, uploadProduct } from "../../../api/endpoints";
import { ToastContainer, toast } from 'react-toastify';
import ReviewTab from "../tabs/ReviewTab"
import {getBreederReviews, AcceptRequestToPurchase,RejectRequestToPurchase} from "../../../api/endpoints"
import { FaCheckCircle, FaTimesCircle,FaEnvelope } from "react-icons/fa";
import moment from 'moment'
import datas from "../../../data/products.json"
export default function Reviews() {
  

const _location = useLocation();
const [reviews, setReviews] = useState([]);


useEffect(()=>{
  GetReviewsByBreeder();
}, [])

async function GetReviewsByBreeder(){
  const response = await  getBreederReviews();
  
debugger;
  setReviews(response.data);


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
                      <h2 className="sherah-breadcrumb__title">Your product reviews</h2>
                      <ul className="sherah-breadcrumb__list"> 
                        <li><a href="#">Home</a></li>
                        <li className="active"><a href="order-list.html">Reviews</a></li>
                      </ul>
                    </div>
                    {/* End Sherah Breadcrumb */}
                    {/* <a href="order-details" className="sherah-btn sherah-gbcolor">Add New Vendor</a> */}
                  </div>
                </div>
                {reviews.length > 0 ?
                <ReviewTab products={reviews}/>
                :<> No product reviews yet..</>
                }
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
