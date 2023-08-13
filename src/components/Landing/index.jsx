import { useEffect, useState } from "react";
import InputCom from "../Helpers/InputCom";
import LoginLayout from "../Partials/LoginLayout";
import LandingPageLayout from "../Partials/LandingPageLayout";
import Image from "../../media/home-back.png"
// import Thumbnail from "./Thumbnail";
import { Link } from "react-router-dom";
import LandingTopBar from "../Partials/Headers/HeaderFive/LandingTopBar";
export default function Landing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled , setDisable] = useState(true)
  const [formData, setFormData] = useState({});

 

  const handleSubmit = (event) => {
  
    debugger;
    console.log(email)
    setFormData({
      emails : email,
      passwords : password
    })

    console.log("Form data:", formData);

    event.preventDefault();

    // You can perform other actions here, such as submitting the form data to a server.
  };

  const [checked, setValue] = useState(false);
  const rememberMe = () => {
    setValue(!checked);
  };
debugger;
  
  return (
    <LandingPageLayout childrenClasses="pt-0 pb-0">
      <div className="login-page-wrapper w-full py-10 background-banner" style={{backgroundImage: `url(${Image})`}}>
        <LandingTopBar/>
      <h1 style={{padding:"15%", marginTop:"15%", textAlign:"center"}} className="text-[34px] font-bold leading-[74px] text-white mainHeader">
             <strong>Lorem Ipsum</strong>
           <div style={{ marginLeft:"45%"}}>  
                <Link to="/login">
                    <div className="w-[121px] h-10">
                    <span className="yellow-btn">Sign up</span>
                    </div>
                </Link>
            </div>
        </h1>
   
   
      </div>
    </LandingPageLayout>
  );
}
