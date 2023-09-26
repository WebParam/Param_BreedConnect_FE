import DashboardLayout from "../Partials/DashboardLayout";
import QuestionnaireComponent from "../Questionnaires/questionaire-component"
import IcoDashboard from "./icons/IcoDashboard";
import IcoLogout from "./icons/IcoLogout";
import IcoPeople from "./icons/IcoPeople";
import Dashboard from "./tabs/Dashboard";
import OrderTab from "./tabs/OrderTab";
import PasswordTab from "./tabs/PasswordTab";
import Payment from "./tabs/Payment";
import ProfileTab from "./tabs/ProfileTab";
import ReviewTab from "./tabs/ReviewTab";
import SupportTab from "./tabs/SupportTab";
import WishlistTab from "./tabs/WishlistTab";
import SwipesTab from "./tabs/SwipesTab";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import datas from "../../data/products.json";
import {getBreederPurchaseRequests, AcceptRequestToPurchase,RejectRequestToPurchase} from "../../api/endpoints"
// import BreadcrumbCom from "../../BreadcrumbCom";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function BreederProfile() {
  const [switchDashboard, setSwitchDashboard] = useState(false);
  const location = useLocation();

  const [breeder, setBreeder] = useState(location.state)
  const getHashContent = location.hash.split("#");
  const [active, setActive] = useState("profile");
  useEffect(() => {
    setActive(
      getHashContent && getHashContent.length > 1
        ? getHashContent[1]
        : "profile"
    );
  }, [getHashContent]);



function logout(){

cookies.remove("bc-user");
window.location.href="/"
}


  return (
   <>
<DashboardLayout>
<>

<div className="container">
        <div className="row">	
          <div className="col-12">
            <div className="sherah-body">
              {/* Dashboard Inner */}
              <div className="sherah-dsinner">
                {/* Sherah Breadcrumb */}
                <div className="sherah-breadcrumb mg-top-30">
                  <h2 className="sherah-breadcrumb__title" style={{marginTop:"5%"}}></h2>
                  {/* <ul className="sherah-breadcrumb__list"> 
                    <li><a href="#">Home</a></li>
                    <li className="active"><a href="profile-info.html">Personal Information</a></li>
                  </ul> */}
                </div>
                {/* End Sherah Breadcrumb */}
            

                <div className="w-full bg-white px-10 py-9" style={{borderRadius: "15px"}}>
              <div className="title-area w-full flex justify-between items-center">
               <div className="flex space-x-3 items-center font-bold text-qblack">
                          {/* <span>
                            <IcoDashboard />
                          </span>
                          <span className=" font-normal text-base">
                            Your Dashbaord
                          </span> */}
                        </div>
              </div>
              <div className="profile-wrapper w-full mt-8 flex space-x-10">
     
                <div className="flex-1">
                  <div className="item-body dashboard-wrapper w-full">
          
                      <>
                        <ProfileTab profile={breeder}/>
                      </>
                  
                  </div>
                </div>
              </div>
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
