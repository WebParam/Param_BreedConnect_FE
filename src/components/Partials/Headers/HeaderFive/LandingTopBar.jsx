import { Link } from "react-router-dom";
import Arrow from "../../../Helpers/icons/Arrow";
import Selectbox from "../../../Helpers/Selectbox";
import Logo from "../../../../media/logo.svg"

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
               <li>
                <a href="/">
                      <img
                          width="200"
                          height="50"
                          // src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
                          src={Logo}
                          alt="logo"
                      />
                  </a>
               </li>
                <li style={{marginTop:"7%"}}>
                  <Link to="/">
                    <span className="text-xs leading-6 text-white font-500">
                      Account
                    </span>
                  </Link>
                </li>
                <li style={{marginTop:"7%"}}>
                  <Link to="/tracking-order">
                    <span className="text-xs leading-6 text-white  font-500">
                      Track Order
                    </span>
                  </Link>
                </li>
                <li style={{marginTop:"7%"}}>
                  <Link to="/faq">
                    <span className="text-xs leading-6 text-white font-500">
                      Support
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="topbar-dropdowns sm:block hidden">
              <div className="flex space-x-6">
                <div className="country-select flex space-x-1 items-center">
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/country-logo-16x16.png`}
                      width="16"
                      height="16"
                      alt="country logo"
                      className="overflow-hidden rounded-full"
                    />
                  </div>
                  <Selectbox
                    className="w-fit"
                    datas={["United State", "Bangladesh", "India"]}
                  />
                  <div>
                    <Arrow className="fill-current qblack" />
                  </div>
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
