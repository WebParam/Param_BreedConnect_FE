import { Link } from "react-router-dom";
import Arrow from "../../../Helpers/icons/Arrow";
import Selectbox from "../../../Helpers/Selectbox";
import Logo from "../../../../media/logo.svg"
import './LandingTopBar.css'

export default function LandingTopBar({ className }) {
  return (
    <>
      <div
        className={`w-full h-10 ${
          className || ""
        }`}
      >
        <div className="container-x mx-auto h-full">
          
          <div className="flex justify-between items-center h-full">
            <div className="topbar-nav">
           
              <ul className="flex space-x-6">
               {/* <li  style={{marginTop:"7%", fontSize:"1.5em"}}>
                <a href="/">
                      <img className="logoHeader"
                        
                          // src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
                          src={Logo}
                          alt="logo"
                      />
                  </a>
               </li> */}
                <li style={{marginTop:"7%", fontSize:"1em"}}>
                  <Link to="/">
                    <span style={{fontSize:"1em"}} >
                      About Us
                    </span>
                  </Link>
                </li>
                <li style={{marginTop:"7%",fontSize:"1em"}}>
                  <Link to="/tracking-order">
                    <span style={{fontSize:"1em"}} >
                      Safety
                    </span>
                  </Link>
                </li>
                <li style={{marginTop:"7%", fontSize:"1em"}}>
                  <Link to="/faq">
                    <span style={{fontSize:"1em"}} >
                      Community
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="topbar-dropdowns sm:block hidden" style={{marginTop:"2%"}}>
              <div className="flex space-x-6">
                <div className="country-select flex space-x-1 items-center">
                  {/* <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/country-logo-16x16.png`}
                      width="16"
                      height="16"
                      alt="country logo"
                      className="overflow-hidden rounded-full"
                    />
                  </div> */}
                  <Selectbox
                    className="w-fit"
                    datas={["South Africa", "United State", "India"]}
                  />
                  <div>
                    <Arrow className="fill-current qblack" />
                  </div>
                </div>
                <div>
                <Link to="/Login">
                <div className="mt-3">
                    <center><span className="login-btn">Log In</span></center>
                  </div>
                  </Link>
                </div>
                {/* <div className="currency-select flex space-x-1 items-center">
                  <Selectbox className="w-fit" datas={["USD", "BDT"]} />
                  <Arrow className="fill-current qblack" />
                </div>
                <div className="language-select flex space-x-1 items-center">
                  <Selectbox className="w-fit" datas={["Bangla", "english"]} />
                  <Arrow className="fill-current qblack" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
