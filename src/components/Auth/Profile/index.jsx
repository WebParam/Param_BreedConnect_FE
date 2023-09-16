import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import datas from "../../../data/products.json";
import BreadcrumbCom from "../../BreadcrumbCom";
import Layout from "../../Partials/Layout";
import IcoAdress from "./icons/IcoAdress";
import IcoCart from "./icons/IcoCart";
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

export default function Profile() {
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



  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="profile-page-wrapper w-full">
        <div className="container-x mx-auto">
          <div className="w-full my-10">
            <BreadcrumbCom
              paths={[
                { name: "home", path: "/" },
                { name: "profile", path: "/profile" },
              ]}
            />
            <div className="w-full bg-white px-10 py-9">
              <div className="title-area w-full flex justify-between items-center">
               <div className="flex space-x-3 items-center font-bold text-qblack">
                          <span>
                            <IcoDashboard />
                          </span>
                          <span className=" font-normal text-base">
                            Your Dashbaord
                          </span>
                        </div>
              </div>
              <div className="profile-wrapper w-full mt-8 flex space-x-10">
                <div className="w-[236px] min-h-[600px] border-r border-[rgba(0, 0, 0, 0.1)]">
                  <div className="flex flex-col space-y-10">
                    <div className="item group">
                      <Link to="/profile#profile">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                            <IcoPeople />
                          </span>
                          <span className=" font-normal text-base">
                            Profile
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="item group">
                      <Link to="/profile#messages">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                          
                          </span>
                          <span className=" font-normal text-base">
                            Messages
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="item group">
                      <Link to="/profile#orders">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                          
                          </span>
                          <span className=" font-normal text-base">
                            Orders
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="item group">
                      <Link to="/profile#products">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                          
                          </span>
                          <span className=" font-normal text-base">
                            Products
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="item group">
                      <Link to="/profile#swipes">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                          
                          </span>
                          <span className=" font-normal text-base">
                            Swipes
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="item group">
                      <Link to="/profile#settings">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                          
                          </span>
                          <span className=" font-normal text-base">
                            Settings
                          </span>
                        </div>
                      </Link>
                    </div>

                    
                    <div className="item group">
                      <Link to="/profile#profile">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                            <IcoLogout />
                          </span>
                          <span className=" font-normal text-base">
                            Logoout
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
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
        </div>
      </div>
    </Layout>
  );
}
