import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import axios from "./axios";

function ChatC({ messages }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: "Remember Mabunda",
      timestamp: "Just now",
      received: false,
    });

    setInput("");
  };
  return (
    <div className="col-lg-8 col-md-8 col-12  sherah-chatbox__two mg-top-30">
      <div className="sherah-chatbox__explore-head sherah-border-btm">
        <div className="sherah-chatbox__author">
          <div className="sherah-chatbox__author-img sherah-chatbox__author-img-sticky">
            {/* <img src="img/chat-top-ms.png" alt="#" /> */}
            <Avatar />
            <span className="sherah-chatbox__author-online" />
          </div>
          <div className="sherah-chatbox__heading">
            <h4 className="sherah-chatbox__heading--title">Hastamjaian</h4>
            <p className="sherah-chatbox__heading--text sherah-pcolor">
              Available
            </p>
          </div>
        </div>
      </div>
      <div className="sherah-chatbox__explore sherah-default-bg sherah-border">
        <div className="sherah-chatbox__explore-body">
          {messages.map((message) => (
            <div
              className={`sherah-chatbox__incoming ${
                message.received && "sherah-chatbox__outgoing"
              }`}
            >
              <ul className="sherah-chatbox__incoming-list">
                {/* Single Incoming */}
                <li>
                  <div className="sherah-chatbox__chat">
                    <div className="sherah-chatbox__author-img sherah-chatbox__author-img-sticky">
                      {/* <img src="img/chat-author10.png" alt="#" /> */}
                      <Avatar />
                      <span className="sherah-chatbox__author-online" />
                    </div>
                    <div className="sherah-chatbox__main-content">
                      <div className="sherah-chatbox__incoming-chat">
                        <p className="sherah-chatbox__incoming-text">
                          {message.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                {/* End Single Incoming */}
              </ul>
            </div>
          ))}
          {/* End Outgoing List */}
          {/* Sherah Message Box  */}

          {/* End Incomming List */}
        </div>
      </div>
      <div className="sherah-chatbox__new-message">
        <div className="sherah-chatbox__form">
          <form className="sherah-chatbox__form-inner" action="#">
            <input
              name="s"
              defaultValue=""
              type="text"
              placeholder="Type your message...."
            />
            <div className="sherah-chatbox__button">
              <div className="sherah-chatbox__button-inline"></div>
              <div className="sherah-chatbox__submit">
                <button className="sherah-chatbox__submit-btn" type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18.695"
                    height="16.249"
                    viewBox="0 0 18.695 16.249"
                  >
                    <g id="send" transform="translate(-0.001 -33.492)">
                      <path
                        id="Path_218"
                        data-name="Path 218"
                        d="M18.683,34.156a.548.548,0,0,0-.731-.627L.353,40.247a.548.548,0,0,0,0,1.023L5.3,43.179v6.014a.548.548,0,0,0,1.037.246l2.045-4.058,4.99,3.7a.548.548,0,0,0,.85-.28C18.876,33.53,18.675,34.194,18.683,34.156ZM14.339,36.08,5.765,42.186,2.077,40.761ZM6.391,43.085l7.473-5.322c-6.43,6.784-6.095,6.427-6.123,6.464-.042.056.072-.162-1.35,2.661ZM13.4,47.742,9,44.483,16.945,36.1Z"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatC;
