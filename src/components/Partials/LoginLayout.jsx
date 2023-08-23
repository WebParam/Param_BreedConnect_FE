import { useState } from "react";
import DiscountBanner from "../Home/DiscountBanner";
import Drawer from "../Mobile/Drawer";
import Footer from "./Footers/Footer";
import Header from "./Headers/HeaderOne";
import "../../index.css";
import "../../custom.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children, childrenClasses }) {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      {/* <Drawer open={drawer} action={() => setDrawer(!drawer)} /> */}
      <div className="w-full overflow-x-hidden">
        {/* <Header drawerAction={() => setDrawer(!drawer)} /> */}
        <div className={`w-full  ${childrenClasses || "pt-[30px] pb-[60px]"}`}>
        <ToastContainer />
          {children && children}
        </div>
        {/* <DiscountBanner /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}
