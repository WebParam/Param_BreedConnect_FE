import React from "react";
import { Avatar } from "@mui/material";
import { Link } from 'react-router-dom';

function SidebarChat({ id, users, userLoggedInDetails }) {

  console.log('id: ' + id);
  let recipientName = null;
  let lastMessage = null;

  if(users[0]?.email === userLoggedInDetails.email)
  {
      recipientName = users[1]?.fullName;
      lastMessage = users[1]?.lastMessage;
  }else if(users[1]?.email === userLoggedInDetails.email){
      recipientName = users[0]?.fullName;
      lastMessage = users[0]?.lastMessage;
  }

  return (
    <li>
    <Link to={`api/chat/${id}/${recipientName}`}>
    <div className="sherah-chatbox__inner">
      <div className="sherah-chatbox__author">
        <div className="sherah-chatbox__author-img">
          {/* <img src="img/chat-author1.png" alt="#" /> */}
          <Avatar />
          <span className="sherah-chatbox__author-online" />
        </div>
        <div className="sherah-chatbox__author-content">
          <h4 className="sherah-chatbox__author-title">
            {recipientName}
          </h4>
          <p className="sherah-chatbox__author-desc">
            {lastMessage}
          </p>
        </div>
      </div>
    </div>
    </Link>
  </li>
  );
}

export default SidebarChat;
