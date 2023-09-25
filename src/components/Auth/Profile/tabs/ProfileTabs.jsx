
import InputCom from "../../../Helpers/InputCom";

import {getUserProfile} from "../../../../api/endpoints";
import React, { useEffect, useState } from "react";


function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [profile, setProfile] = useState();
  const [biography, setBiography] = useState("");
  const [years, setYears] = useState("");
  const [passion, setPassion] = useState("");
  const [practices, setPractices] = useState("");

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  async function GetUser(){

    const _profile = await getUserProfile();
  
    setProfile(_profile?.data);
    setBiography(_profile.profile?.biography??"")
    setPassion(_profile.profile?.passion??"")
    setYears(_profile.profile?.years??"")
    setPractices(_profile.profile?.bestPractices??"")

    
    debugger;


  }

  useEffect(()=>{
   GetUser();
  }, [])



  const tabs = [
    {
      title: 'Personal Information',
      content: <div>
           <form className="sherah-wc__form-main" action="#">
        <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">
                           Full name :  {profile?.firstname} {profile?.lastname}
                          </label>
                          {/* <div className="form-group__input">
                            <input
                              className="sherah-wc__form-input"
                              placeholder=""
                              type="text"
                              name="p_title"
                              // onChange={(e)=>{setTitle(e.target.value)}}
                              // value={title}
                            />
                          </div> */}
                        </div>
                      </div>
                    
                      
                      {/* <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">
                            Delivery / Collection*
                          </label>
                          <select
                            className="form-group__input"
                            aria-label="Default select example"
                          >
                            <option selected="">Select delivery</option>
                            <option value={1}>Delivery</option>
                            <option value={2}>Collection</option>
                            <option value={3}>Both</option>
                          </select>
                        </div>
                      </div> */}
                      <div className="col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">
                          Email address:  {profile?.email}
                          </label>
                          {/* <div className="form-group__input">
                            <input
                              className="sherah-wc__form-input"
                              placeholder=""
                              type="text"
                              name="p_title"
                              defaultValue={""}
                              // onChange={(e)=>{setDescription(e.target.value)}}
                              // value={description}
                            />
                          </div> */}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="sherah-wc__form-label">
                         Phone:  {profile?.cellphone}
                          </label>
                          {/* <div className="form-group__input">
                            <input
                              className="sherah-wc__form-input"
                              placeholder=""
                              type="text"
                              name="p_title"
                              defaultValue={""}
                              // onChange={(e)=>{setDescription(e.target.value)}}
                              // value={description}
                            />
                          </div> */}
                        </div>
                      </div>
                      {/* <div className="col-9">
                        
                        <div className="form-group mt-4 p-4">
                        <h4>Biography</h4>
                          <label className="sherah-wc__form-label">
                          <small>Enter a brief introduction about yourself and your breeding philosophy...</small>
                          </label>
                          <div className="form-group__input">
                            <textarea
                            rows="8"
                              className="sherah-wc__form-input"
                              placeholder=""
                              type="text"
                              name="p_title"
                              onChange={(e)=>{setBiography(e.target.value)}}
                              value={biography}
                            />
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="col-5">
                        
                        <div className="form-group mt-4 p-4">
                        <h3 className='mb-2'>About Your Breeding</h3>
                          <label className="sherah-wc__form-label">
                           Years of breeding
                          </label>
                          <div className="form-group__input">
                            <input
                              className="sherah-wc__form-input"
                              placeholder=""
                              type="text"
                              name="p_title"
                              onChange={(e)=>{setYears(e.target.value)}}
                              value={years}
                            />
                          </div>
                        </div>
                      </div> */}
                    
                      {/* <div className="col-9">
                        
                        <div className="form-group mt-2 p-4">
                        <h4>What drives your passion for breeding:</h4>
                          <label className="sherah-wc__form-label">
                          <small>Share your story...</small>
                          </label>
                          <div className="form-group__input">
                            <textarea
                            rows="8"
                              className="sherah-wc__form-input"
                              placeholder=""
                              type="text"
                              name="p_title"
                              onChange={(e)=>{setPassion(e.target.value)}}
                              value={passion}
                            />
                          </div>
                        </div>
                      </div> */}
                  
                      {/* <div className="col-9">
                        
                        <div className="form-group mt-2 p-4">
                        <h3>Breeding Practices</h3>
                          <label className="sherah-wc__form-label">
                          <small>Describe your breeding practices and goals</small>
                          </label>
                          <div className="form-group__input">
                            <textarea
                            rows="8"
                              className="sherah-wc__form-input"
                              placeholder=""
                              type="text"
                              name="p_title"
                              onChange={(e)=>{setPractices(e.target.value)}}
                              value={practices}
                            />
                          </div>
                        </div>
                      </div> */}

                    

                    </div>
                    </form>
           
      </div>
    }
  ];



  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default Tabs;