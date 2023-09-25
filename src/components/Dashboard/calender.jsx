import React, { useEffect, useState } from "react";
import DashboardLayout from "../Partials/DashboardLayout";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import CalenderTab from "./tabs/CalenderTab";

export default function CalendarSchedule() {
  

const _location = useLocation();



useEffect(()=>{

}, [])

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
                <div className="sherah-table col-md-10 sherah-page-inner sherah-border sherah-default-bg mg-top-25">
        
                <CalenderTab />
                
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
