import DashboardLayout from "../Partials/DashboardLayout";
import QuestionnaireComponent from "../Questionnaires/questionaire-component"
import IcoDashboard from "./../Auth/Profile/icons/IcoDashboard";
import IcoLogout from "./../Auth/Profile/icons/IcoLogout";
import IcoPeople from "./../Auth/Profile/icons/IcoPeople";
import Dashboard from "./../Auth/Profile/tabs/Dashboard";
import OrderTab from "./../Auth/Profile/tabs/OrderTab";
import PasswordTab from "./../Auth/Profile/tabs/PasswordTab";
import Payment from "./../Auth/Profile/tabs/Payment";
import ProfileTab from "./../Auth/Profile/tabs/ProfileTab";
import ReviewTab from "./../Auth/Profile/tabs/ReviewTab";
import SupportTab from "./../Auth/Profile/tabs/SupportTab";
import WishlistTab from "./../Auth/Profile/tabs/WishlistTab";
import SwipesTab from "./../Auth/Profile/tabs/SwipesTab";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import datas from "../../data/products.json";
// import BreadcrumbCom from "../../BreadcrumbCom";


export default function BreederProfile() {
  const [switchDashboard, setSwitchDashboard] = useState(false);
  const location = useLocation();
  const getHashContent = location.hash.split("#");
  const [active, setActive] = useState("profile");
  useEffect(() => {
    setActive(
      getHashContent && getHashContent.length > 1
        ? getHashContent[1]
        : "profile"
    );
  }, [getHashContent]);

  const cookies = new Cookies();

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
                    {active === "dashboard" ? (
                      <Dashboard />
                    ) : active === "profile" ? (
                      <>
                        <ProfileTab />
                      </>
                    ) : active === "messages" ? (
                      <>
                        <Payment />
                      </>
                    ) : active === "orders" ? (
                      <>
                        <OrderTab />
                      </>
                    ) : active === "wishlist" ? (
                      <>
                        <WishlistTab />
                      </>
                    ) : active === "swipes" ? (
                      <>
                        <SwipesTab />
                      </>
                    ) : active === "password" ? (
                      <>
                        <PasswordTab />
                      </>
                    ) : active === "support" ? (
                      <>
                        <SupportTab />
                      </>
                    ) : active === "review" ? (
                      <>
                        <ReviewTab products={datas.products} />
                      </>
                    ) : (
                      ""
                    )}
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
