import React from "react";
import { Avatar } from "@mui/material";

function SidebarChat({id, firstName, lastName}) {
  return (
    <li>
    <div className="sherah-chatbox__inner">
      <div className="sherah-chatbox__author">
        <div className="sherah-chatbox__author-img">
          {/* <img src="img/chat-author1.png" alt="#" /> */}
          <Avatar />
          <span className="sherah-chatbox__author-online" />
        </div>
        <div className="sherah-chatbox__author-content">
          <h4 className="sherah-chatbox__author-title">
            {firstName} {' '} {lastName}
          </h4>
          <p className="sherah-chatbox__author-desc">
            Hi
          </p>
        </div>
      </div>
    </div>
  </li>
  );
}

export default SidebarChat;
