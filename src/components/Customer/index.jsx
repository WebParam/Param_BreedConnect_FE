import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import datas from "../../data/products.json";
import BreadcrumbCom from "../BreadcrumbCom";
import Layout from "../Partials/Layout";
import IcoDashboard from "./icons/IcoDashboard";
import IcoLogout from "./icons/IcoLogout";
import IcoProduct from './icons/IcoProducts';
import IcoOrders from './icons/IcoOrders';
import Dashboard from "./tabs/Dashboard";
import OrderTab from "./tabs/OrderTab";
import ProductsTab from './tabs/ProductsTab';


export default function Customers() {
  const [switchDashboard, setSwitchDashboard] = useState(false);
  const location = useLocation();
  const getHashContent = location.hash.split("#");
  const [active, setActive] = useState("orders");
  useEffect(() => {
    setActive(
      getHashContent && getHashContent.length > 1
        ? getHashContent[1]
        : "orders"
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
                { name: "customer", path: "/customer" },
              ]}
            />
            <div className="w-full bg-white px-10 py-9">
              <div className="title-area w-full flex justify-between items-center">
               <div className="flex space-x-3 items-center font-bold text-qblack">
                          <span>
                            <IcoDashboard />
                          </span>
                          <span className=" font-normal text-base">
                            Dashboard
                          </span>
                        </div>
              </div>
              <div className="profile-wrapper w-full mt-8 flex space-x-10">
                <div className="w-[140px] min-h-[600px] border-r border-[rgba(0, 0, 0, 0.1)]">
                  <div className="flex flex-col space-y-10">
                    <div className="item group">
                      <Link to="/customer#products">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                            <IcoProduct/>
                          </span>
                          <span className=" font-normal text-base">
                            Products
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="item group">
                      <Link to="/customer#orders">
                        <div className="flex space-x-3 items-center text-qgray hover:text-qblack">
                          <span>
                          <IcoOrders/>
                          </span>
                          <span className=" font-normal text-base">
                            Orders
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
                            Log out
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="item-body dashboard-wrapper w-full">
                    {active === "orders" ? (
                      <Dashboard />
                    
                    ) 
                    : active === "products" ? (
                      <>
                        <ProductsTab />
                      </>
                    )
                    : active === "orders" ? (
                      <>
                        <OrderTab />
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
