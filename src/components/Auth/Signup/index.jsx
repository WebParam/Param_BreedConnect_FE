import React, { useState } from "react";
import InputCom from "../../Helpers/InputCom";
import Layout from "../../Partials/Layout";
import Thumbnail from "./Thumbnail";

export default function Signup() {
  const [name, setName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setaddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setCode] = useState("");

  const [formData, setFormData] = useState({});



  const handleSubmit = (event) => {
    // debugger;
    console.log(name)
    setFormData({
      fname: name,
      lname: lname,
      email: email,
      phone: phone,
      country: country,
      address: address,
      city: city,
      postcode: postcode,
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
    <Layout childrenClasses="pt-0 pb-0">
      <div className="login-page-wrapper w-full py-10">
        <div className="container-x mx-auto">
          <div className="lg:flex items-center relative">
            <div className="lg:w-[572px] w-full lg:h-[783px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
              <div className="w-full">
                <form >
                  <div className="input-area">
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <InputCom
                        placeholder="Demo Name"
                        label="First Name*"
                        name="fname"
                        type="text"
                        inputClasses="h-[50px]"
                        value={name}
                        inputHandler={(e) => setName(e.target.value)}
                      />

                      <InputCom
                        placeholder="Demo Name"
                        label="Last Name*"
                        name="lname"
                        type="text"
                        inputClasses="h-[50px]"
                        inputHandler={(e) => setlName(e.target.value)}

                      />
                    </div>

                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <InputCom
                        placeholder="Demo@gmail.com"
                        label="Email Address*"
                        name="email"
                        type="email"
                        inputClasses="h-[50px]"
                        inputHandler={(e) => setEmail(e.target.value)}

                      />

                      <InputCom
                        placeholder="0213 *********"
                        label="Phone*"
                        name="phone"
                        type="text"
                        inputClasses="h-[50px]"
                        inputHandler={(e) => setPhone(e.target.value)}
                      // inputHandler={handleChange}
                      />
                    </div>

                    <div className="input-item mb-5">
                      <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                        Country*
                      </h6>
                      <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                        <span className="text-[13px] text-qgraytwo">
                          Select Country
                        </span>
                        <span>
                          <svg
                            width="11"
                            height="7"
                            viewBox="0 0 11 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                              fill="#222222"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="input-item mb-5">
                      <InputCom
                        placeholder="Your address Here"
                        label="Address*"
                        name="address"
                        type="text"
                        inputClasses="h-[50px]"
                        value={formData.address}
                        inputHandler={(e) => setaddress(e.target.value)}
                      />
                    </div>

                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <div className="w-1/2">
                        <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                          Town / City*
                        </h6>
                        <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                          <span className="text-[13px] text-qgraytwo">
                            Maiyami
                          </span>
                          <span>
                            <svg
                              width="11"
                              height="7"
                              viewBox="0 0 11 7"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                                fill="#222222"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="w-full h-[50px] mb-5 sm:mb-0">
                          <InputCom
                            label="Postcode / ZIP*"
                            inputClasses="w-full h-full"
                            type="text"
                            placeholder="00000"
                            value={formData.postcode}
                            inputHandler={(e) => setCode(e.target.value)}
                          />
                        </div>
                      </div>
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
                          I agree all
                          <span className="text-qblack">tarm and condition</span>
                          in BigShop.
                        </span>
                      </div>
                    </div>

                    <div className="signin-area mb-3">
                      <div className="flex justify-center">
                        <button onClick={handleSubmit}
                          type="submit"
                          className="black-btn text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                        >
                          <span>Create Account</span>
                        </button>
                      </div>
                    </div>

                    <div className="signup-area flex justify-center">
                      <p className="text-base text-qgraytwo font-normal">
                        Already have an Account?
                        <a href="/login" className="ml-2 text-qblack">
                          Log In
                        </a>
                      </p>
                    </div>
                  </div>
                </form>
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
    </Layout>
  );

}
