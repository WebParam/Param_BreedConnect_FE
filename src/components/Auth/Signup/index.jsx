import React, { useState } from "react";
import InputCom from "../../Helpers/InputCom";
import Layout from "../../Partials/Layout";
import Thumbnail from "./Thumbnail";
import LoginLayout from "../../Partials/LoginLayout";
import { POST } from "../../../api/client";
import { RegisterCustomer } from "../../../api/endpoints";
import CustomInputVal from "../../Helpers/CustomInputVal";
import Logo from "../../../media/logo.png"
import axios from "axios";
import { toast } from 'react-toastify';

export default function Signup() {
  const [name, setName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [secret, setSecret] = useState("");

  const [confirmSecret, setConfirmSecret] = useState("");

  const [formData, setFormData] = useState({});



  const [checked, setValue] = useState(false);
  const rememberMe = () => {
    setValue(!checked);
  };

  const  registerUser = async()=>{
    const _id = toast.loading("Registering user..", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const payload ={
      username: email,
      secret: secret,
      firstname: name,
      lastname: lname,
      email: email,
      secret: secret,
      cellphone: phone
    }
    debugger;
    const response = await RegisterCustomer(payload);
    if(response.status ==200){
      toast.update(_id, {
        render: "Successfully registered new user. Please login.",
        type: "success",
        isLoading: false,
      });
    }else{
      toast.update(_id, {
        render: response.response.data,
        type: "error",
        isLoading: false,
        
      });
    }

    console.log("response", response);

  }


  return (
    <LoginLayout childrenClasses="pt-0 pb-0">
      <div className="login-page-wrapper w-full py-10">
      <div className="my-5">
      <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
                  <h1 className="text-[4em] font-bold leading-[74px] text-blue">
                    Register
                  </h1>
                  <div className="shape">
                    <svg
                      width="172"
                      height="29"
                      viewBox="0 0 172 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.08742C17.6667 19.0972 30.5 31.1305 62.5 27.2693C110.617 21.4634 150 -10.09 171 5.08727"
                        stroke="#FFBB38"
                      />
                    </svg>
                  </div>
                </div>
        {/* <img
            style={{textAlign:"center", margin:"0 auto"}}
            width="20%"
            height=""
            // src={`${process.env.PUBLIC_URL}/assets/images/logo-3.svg`}
            src={Logo}
            alt="logo"
        /> */}
        </div>

        <div className="container-x mx-auto">
          <div className="lg:flex items-center relative">
            <div className="lg:w-[572px] w-full bg-white flex flex-col sm:px-10 sm:py-8 p-5 ">
              <div className="w-full">
            
                {/* <form > */}
                <div className="input-area">
                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                    <InputCom
                      inputStyle={{ padding: "15px" }}
                      inputContainerStyle={{ borderRadius: "20px" }}
                      placeholder="First Name"
                      label="First Name*"
                      name="fname"
                      type="text"
                      inputClasses="h-[50px]"
                      value={name}
                      inputHandler={(e) => setName(e.target.value)}
                      required={true}

                    />

                    <InputCom
                      inputStyle={{ padding: "15px" }}
                      inputContainerStyle={{ borderRadius: "20px" }}
                      placeholder="Last Name"
                      label="Last Name*"
                      name="lname"
                      type="text"
                      value={lname}
                      inputClasses="h-[50px]"
                      inputHandler={(e) => setlName(e.target.value)}
                      required={true}
                    />
                  </div>

                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                    <InputCom
                      inputStyle={{ padding: "15px" }}
                      inputContainerStyle={{ borderRadius: "20px" }}
                      placeholder="Demo@gmail.com"
                      label="Email Address*"
                      name="email"
                      type="email"
                      inputClasses="h-[50px]"
                      value={email}
                      inputHandler={(e) => setEmail(e.target.value)}
                      required={true}
                    />

                    <InputCom
                      inputStyle={{ padding: "15px" }}
                      inputContainerStyle={{ borderRadius: "20px" }}
                      placeholder="081 123 4567"
                      label="Phone*"
                      name="phone"
                      value={phone}
                      type="number"
                      inputClasses="h-[50px]"
                      inputHandler={(e) => setPhone(e.target.value)}
                      required={true}
                    />
                  </div>

                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                    <InputCom
                      inputStyle={{ padding: "15px" }}
                      inputContainerStyle={{ borderRadius: "20px" }}
                      placeholder="********"
                      label="Password*"
                      name="secret"
                      type="password"
                      value={secret}
                      inputClasses="h-[50px]"
                      inputHandler={(e) => setSecret(e.target.value)}
                      customInputValArray={[
                        <CustomInputVal
                          value={secret}
                          valFunction={(value) => { return value.length < 8 }}
                          message={"Password is less than 8 characters"}
                        />,
                        <CustomInputVal
                          value={secret}
                          valFunction={(value) => { return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value) == false }}
                          message={"Password does not contain a special character"}
                        />
                      ]}
                      required={true}
                    />

                    <InputCom
                      inputStyle={{ padding: "15px" }}
                      inputContainerStyle={{ borderRadius: "20px" }}
                      placeholder="*********"
                      label="Confirm password*"
                      name="confirmSecret"
                      type="password"
                      inputClasses="h-[50px]"
                      value={confirmSecret}
                      inputHandler={(e) => setConfirmSecret(e.target.value)}
                      required={true}
                      customInputValArray={[
                        <CustomInputVal
                          value={confirmSecret}
                          valFunction={(value) => { return value != secret }}
                          message={"Passwords do not match"}
                        />]}
                    />

                  </div>


                  <div className="forgot-password-area mb-7">
                    <div className="remember-checkbox flex items-center space-x-2.5">
                      <button
                        onClick={rememberMe}
                        type="button"
                        className="w-5 h-5 text-qblack flex justify-center items-center border border-light-gray"
                      >
                        {checked && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                      <span
                        onClick={rememberMe}
                        className="text-base text-black"
                      >
                        I agree with the
                        <span className="" style={{ color: "rgb(137 207 240)" }}> terms and conditions </span>
                        of Breed Connect.
                      </span>
                    </div>
                  </div>

                  <div className="signin-area mb-3">
                    <div className="flex justify-center">
                      <button onClick={registerUser}

                        className="black-btn text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                      >
                        <span>Create Account</span>
                      </button>
                    </div>
                  </div>

                  <div className="signup-area flex justify-center">
                    <p className="text-base text-qgraytwo font-normal">
                      Already have an Account?
                      <a href="/login" className="ml-2 text-qblack" style={{ color: "rgb(137 207 240)" }}>
                        Log In
                      </a>
                    </p>
                  </div>
                </div>
                {/* </form> */}
              </div>
            </div>
            <div className="flex-1 lg:flex hidden transform scale-60 xl:scale-100   xl:justify-center">
              <div
                className="absolute xl:-right-20 -right-[138px]"
                style={{ top: "calc(50% - 258px)" }}
              >
                <Thumbnail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginLayout>
  );

}
