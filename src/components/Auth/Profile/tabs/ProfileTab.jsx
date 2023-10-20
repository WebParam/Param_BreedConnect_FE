import { useRef, useState } from "react";
import InputCom from "../../../Helpers/InputCom";
import Tabs from '../tabs/ProfileTabs';
import MessageList from "./MessagesList";
import './stylesheets/Profile.css'
import RecentOrders from "./RecentOrders";
import RecentSwipes from "./RecentSwipes";
import CoverProfile from '../../../../media/cover.png';

import Cookies from "universal-cookie";
const cookies = new Cookies();
const user = cookies.get("bcon-user");

export default function ProfileTab() {
  const [profileImg, setprofileImg] = useState(null);
  const [profileInfo, setProfileInfo] = useState({});

  const [profile, setProfile] = useState(user);
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    cellphone: '',
    email: '',
    address: '',
    profilePicture:''
  });


  


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

//   const handleChange = (e) => {
//     const { name, value, type } = e.target;
//     if (type === 'file') {
//       // If the input type is 'file', update the 'image' property with the selected file
//       setProfile({ ...profile, [name]: e.target.files[0] });
//     } else {
//     setProfile({ ...profile, [name]: value });

//     console.log("profile", profile)
//   };
// }


const handleChange = (event) => {
  console.log("eve", event.target)
  const { name, value } = event.target;
  setValues((prevProfile) => ({
    ...prevProfile,
    [name]: value,
  }));
};


  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Profile updated:', profile);
  //  const { firstname, lastname, cellphone, email, address, profilePicture} = values;
    //const userBody = { firstname, lastname, cellphone, email, address, profilePicture };
  };



  const [isOpen, setIsOpen] = useState(false);

  // Function to open the edit popup
  const openPopup = () => {
    setIsOpen(true);
  };

  // Function to close the edit popup
  const closePopup = () => {
    setIsOpen(false);
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
      <div className="user" style={{width:"40%"}}>{user?.firstname} {user?.lastname}</div>
      <div className="user" style={{width:"40%"}}>{user?.address}</div>
      <div>
        <button  className="buttonEdit" onClick={openPopup}>Edit Profile</button>
      {isOpen && (
        <div className="edit-popup">
          <div>
          <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
      {/* <div className="form-group">
          <label htmlFor="profilePicture">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*" // Allow only image files
            defaultValue={user.profilePicture !== undefined ? user.profilePicture : ''}
            onChange={handleChange('profilePicture')}
          />
        </div> */}
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={values.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cellphone">Phone:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={user.cellphone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
        </div>
        <button className="buttonSave" type="submit">Save Changes</button>
        <button className="buttonClose" type="submit" onClick={closePopup}>Close</button>
      </form>
          </div>
        </div>
      )}
      </div>
    </div>
    );
  }

  return (
    <>
    
      <div className="flex space-x-8">
        <div className="col-md-8 mr-2">
        <ProfileHeader/>
          <div className="input-item flex space-x-2.5 mb-8">
            <Tabs profile={user}/>
 
          </div> 
        </div>
        <div className="flex-1">
          <div className="update-logo w-full mb-9">
            <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
              Messages
            </h1>
            <p className="text-sm text-qgraytwo mb-5 ">
              <MessageList  messages={messages}/>
            </p>
      </div>

      <div className="update-logo w-full mb-9">
            <h1 className="text-xl tracking-wide font-bold text-qblack flex items-center mb-2">
              Recent swipes
            </h1>
            <p className="text-sm text-qgraytwo mb-5 ">
              <RecentSwipes  messages={messages}/>
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