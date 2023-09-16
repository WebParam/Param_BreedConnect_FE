import { useRef, useState } from "react";
import InputCom from "../../../Helpers/InputCom";
import Tabs from '../tabs/ProfileTabs';
import MessageList from "./MessagesList";
import './stylesheets/Profile.css'
import RecentOrders from "./RecentOrders";

import CoverProfile from '../../../../media/cover.png';

export default function ProfileTab() {
  const [profileImg, setprofileImg] = useState(null);
  const [profileInfo, setProfileInfo] = useState({});
  const profileImgInput = useRef(null);
  const browseprofileImg = () => {
    profileImgInput.current.click();
  };
  const profileImgChangHandler = (e) => {
    if (e.target.value !== "") {
      const imgReader = new FileReader();
      imgReader.onload = (event) => {
        setprofileImg(event.target.result);
      };
      imgReader.readAsDataURL(e.target.files[0]);
    }
  };


  const messages = [
    {
        "sender": "Alice",
        "content": "Hello, how are you?",
        "timestamp": "2023-09-09 10:00:00"
    },
    {
        "sender": "Bob",
        "content": "I'm doing well, thanks! How about you?",
        "timestamp": "2023-09-09 10:05:00"
    },
    {
        "sender": "Alice",
        "content": "I'm good too. What have you been up to?",
        "timestamp": "2023-09-09 10:10:00"
    },
    {
        "sender": "Bob",
        "content": "Just working on a project. How about we meet later for coffee?",
        "timestamp": "2023-09-09 10:15:00"
    },
]

 




  function ProfileHeader() {
    return (
      <div className="profile">
      <div className="cover-photo">
      <img src={`${process.env.PUBLIC_URL}/assets/images/cover.png`} alt="Cover" />
      </div>
      <div>
      <img src={`${process.env.PUBLIC_URL}/assets/images/default.png`}  alt="Profile" className="profile-picture" />
      </div>
      <div className="user">Jane Doe</div>
        
    </div>
    );
  }

  return (
    <>
    
      <div className="flex space-x-8">
       
        <div className="w-[570px] ">
        <ProfileHeader/>
          <div className="input-item flex space-x-2.5 mb-8">
            <Tabs/>
            {/* <div className="w-1/2 h-full">
              <InputCom
                label="First Name*"
                placeholder="Demo Name"
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                label="Last Name*"
                placeholder="Demo Name"
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
          </div>
          <div className="input-item flex space-x-2.5 mb-8">
            <div className="w-1/2 h-full">
              <InputCom
                label="Email*"
                placeholder="demoemial@gmail.com"
                type="email"
                inputClasses="h-[50px]"
              />
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                label="Phone Number*"
                placeholder="012 3  *******"
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
          </div>
          <div className="input-item mb-8">
            <div className="w-full">
              <InputCom
                label="Country*"
                placeholder="country"
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
          </div>
          <div className="input-item mb-8">
            <div className="w-full">
              <InputCom
                label="Address*"
                placeholder="your address here"
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
          </div>
          <div className="input-item flex space-x-2.5 mb-8">
            <div className="w-1/2 h-full">
              <InputCom
                label="Town / City*"
                placeholder=""
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                label="Postcode / ZIP*"
                placeholder=""
                type="text"
                inputClasses="h-[50px]"
              />
            </div>*/}
          </div> 
        </div>
        <div className="flex-1">
          <div className="update-logo w-full mb-9">
            <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
              Messages
            </h1>
            <p className="text-sm text-qgraytwo mb-5 ">
              <MessageList  nessages={messages}/>
            </p>
      </div>
      <div className="update-logo w-full mb-9">
            <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
              Orders
            </h1>
            <p className="text-sm text-qgraytwo mb-5 ">
              <RecentOrders/>
            </p>
      </div>
  </div>
 </div>
  </>
  );
}
