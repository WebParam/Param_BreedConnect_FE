import { useEffect, useState } from "react";
import InputCom from "../Helpers/InputCom";
import LoginLayout from "../Partials/LoginLayout";
import LandingPageLayout from "../Partials/LandingPageLayout";
import Image from "../../media/home-back.png"
import Profile from '../../media/profile.png';
import Breeders from '../../media/breeders.png';
import Rectangle from '../../media/Rectangle.png';
import './landing.css'

// import Thumbnail from "./Thumbnail";
import { Link } from "react-router-dom";
import LandingTopBar from "../Partials/Headers/HeaderFive/LandingTopBar";
import Header from "../Partials/Headers/HeaderFive/LandingTopBar";
export default function Landing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisable] = useState(true)
  const [formData, setFormData] = useState({});



  const handleSubmit = (event) => {
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

  return (
    <LandingPageLayout childrenClasses="pt-0 pb-0">
      <div className="login-page-wrapper w-full py-10 background-banner" style={{ backgroundImage: `url(${Image})`, fontFamily: "Inter" }}>
        <LandingTopBar />
        <h1 className="text-[34px] font-bold leading-[74px] text-white mainHeader headerSection1">
             <strong>Lorem Ipsum</strong>
           <div>  
                <Link to="/login">
                    <div className="">
                    <center><span className="create-btn">Create Account</span></center>
                    </div>
                </Link>
            </div>
        </h1>
        </div>
            <div className="grid-container">
              <div className="grid-item">
                <div className="headerSection">
                  <p>Lorem ipsum</p>
                </div>
                <div className="section">
                  Browse through various<span className="innerText"> Breeder Profiles</span>
                </div>
                <div className="subSection">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                </div>
              <div className="grid-item">
                <div className="section">
                <img src={Profile} alt="PNG Image" />
                </div>
              </div>
              <div className="grid-item">
              <div className="headerSection">
                  <p>Lorem ipsum</p>
                </div>
                <div className="section">
                Creating a <span className="innerText">safe environment</span> for breeders
                </div>
                <div className="subSection">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
              </div>
              <div className="grid-item">
                <div className="section">
                <img src={Breeders} alt="PNG Image" />
                </div>
              </div>
              <div style={{padding:"10%", width:"100%", background:`url(${Rectangle})`}}>
              {/* <div className="section">
                <img src={Rectangle} alt="PNG Image" />
                </div> */}
              </div>
           
              <div className="breeders my-10"><center>Meet some of our breeders</center></div>
         
              <div className="breeders-content">
              <div className="grid-container">
              <div className="grid-item">
                <div className="breeder">Hi, Im Jane Doe</div>
                <div className="headerSection">
                  <p>Lorem ipsum</p>
                </div>
                <div className="section">
                  Browse through various<span className="innerText"> Breeder Profiles</span>
                </div>
                <div className="subSection">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                </div>
              <div className="grid-item">
                <div className="section">
                <img src={Profile} alt="PNG Image" />
                </div>
              </div>
              </div>
              </div>
              </div>

              
              

        <div>

        </div>

    
    </LandingPageLayout>
  );
}
