import { useRef, useState } from "react";
import InputCom from "../../../Helpers/InputCom";
import Tabs from '../tabs/ProfileTabs';
import MessageList from "./MessagesList";
import './stylesheets/Profile.css'
import RecentOrders from "./RecentOrders";
import RecentSwipes from "./RecentSwipes";
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
      <div className="profile" style={{maxWidth:"100%"}}>
      <div className="cover-photo" style={{width:"100%"}}>
      <img src={`${process.env.PUBLIC_URL}/assets/images/cover.png`} alt="Cover" />
      </div>
      <div style={{width:"50%"}}>
      <img src={`${process.env.PUBLIC_URL}/assets/images/default.png`}  alt="Profile" className="profile-picture" />
      </div>
      <div className="user" style={{width:"40%"}}>Jane Doe</div>
        
    </div>
    );
  }

  return (
    <>
    
      <div className="flex space-x-8">
       
        <div className="col-md-8 mr-2">
        <ProfileHeader/>
          <div className="input-item flex space-x-2.5 mb-8">
            <Tabs/>
 
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
              Recent swipes
            </h1>
            <p className="text-sm text-qgraytwo mb-5 ">
              <RecentSwipes  nessages={messages}/>
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
