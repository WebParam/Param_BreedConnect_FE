import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import axios from "./axios";
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import Cookies from "universal-cookie";

function Chat() {
  const [input, setInput] = useState("");
  const { chatId, name } = useParams();

  console.log('chatId ' + chatId + ' name ' + name);

  const [messages, setMessages] = useState([]);

  useEffect(() => {

    var pusher = new Pusher('349866ddbfc4a5071728', {
      cluster: 'eu'
    });
    // Make an Axios call to the backend to retrieve messages by chatId
    axios.get(`api/messages/${chatId}`)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching messages:', error);
      });
  }, [chatId]);

  useEffect(() => {
  
    var pusher = new Pusher('349866ddbfc4a5071728', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
      console.log('Message inserted ', newMessage);
      setMessages([...messages ,newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  const sendMessage = async (e) => {
    e.preventDefault();


    const cookies = new Cookies();
    const user = cookies.get("bcon-user");

    const users = [
      {
        fullName: user.firstname + ' ' + user.lastname,
        email: user.email,
        photoUrl: user?.profilePicture,
        lastMessage: '',
        lastMessageTimestamp: ''
     },
      {
          fullName: 'RBreeder Mabunda',
          email: 'njinu@webparam.org',
          photoUrl: 'https://param-hr-resources.s3.af-south-1.amazonaws.com/65dd25d1-0e41-4cef-b243-a9fdea65fb95',
          lastMessage: '',
          lastMessageTimestamp: ''
      }
     ]

      const users00 = [
        {
            fullName: 'Njinu Kimani',
            email: 'njinu@webparam.org',
            photoUrl: 'Photo Url',
            lastMessage: 'Last Message',
            lastMessageTimestamp: 'Last Message Timestamp'
        },
        {
            fullName: 'Kimani NJ',
            email: 'njinu@webparam.org',
            photoUrl: 'Photo Url',
            lastMessage: 'Last Message',
            lastMessageTimestamp: 'Last Message Timestamp'
        }]

        const users000 = [
          {
              fullName: 'Njinu Kimani',
              email: 'njinu@webparam.org',
              photoUrl: 'Photo Url',
              lastMessage: 'Last Message',
              lastMessageTimestamp: 'Last Message Timestamp'
          },
          {
              fullName: 'Lenard M',
              email: 'lenardm@webparam.org',
              photoUrl: 'Photo Url',
              lastMessage: 'Last Message',
              lastMessageTimestamp: 'Last Message Timestamp'
          }]

        const users0 = [
          {
              fullName: 'Njinu Kimani',
              email: 'njinu@webparam.org',
              photoUrl: 'Photo Url',
              lastMessage: 'Last Message',
              lastMessageTimestamp: 'Last Message Timestamp'
          },
          {
              fullName: 'Lancest M',
              email: 'lancest.uj@gmail.com',
              photoUrl: 'Photo Url',
              lastMessage: 'Last Message',
              lastMessageTimestamp: 'Last Message Timestamp'
          }]

    // const response = await axios.post('api/createChat', {
    //   users,
    // });

    await axios.post("api/messages/new", {
      message: input,
      name: user.firstname + ' ' + user.lastname,
      timestamp: "",
      received: false,
      chatId: chatId,
      email: user.email,
      lastSeen: "",
      photoURL: ""
    });

    setMessages([...messages ,{
      message: input,
      name: user.firstname + ' ' + user.lastname,
      timestamp: "",
      received: false,
      chatId: chatId,
      email: user.email,
      lastSeen: "",
      photoURL: ""
  }]);

    // await axios.get('api/chat-user-email')
    // .then((response) => {
    //   // Handle the successful response here
    //   //setMatchingUsers(response.data);

    //   console.log('response ', response);
    // })
    // .catch((error) => {
    //   // Handle any errors here
    //   console.error('Error:', error);
    // });

    setInput("");
  };
  return (
    <div className="col-lg-8 col-md-8 col-12  sherah-chatbox__two mg-top-30">
      <div className="sherah-chatbox__explore-head sherah-border-btm">
      {chatId ? (
    <div className="sherah-chatbox__author">
      <div className="sherah-chatbox__author-img sherah-chatbox__author-img-sticky">
        {/* <img src="img/chat-top-ms.png" alt="#" /> */}
        <Avatar />
        <span className="sherah-chatbox__author-online" />
      </div>
      <div className="sherah-chatbox__heading">
        <h4 className="sherah-chatbox__heading--title">{name}</h4>
        <p className="sherah-chatbox__heading--text sherah-pcolor">
          Available
        </p>
      </div>
    </div>
  ) : null}
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
                       {/* <img src="img/chat-author10.png" alt="#" />  */}
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
            value={input} 
            disabled={chatId === null || chatId === undefined}
              name="s"
              onChange={e => setInput(e.target.value)} 
              defaultValue=""
              type="text"
              placeholder="Type your message...."
            />
            <div className="sherah-chatbox__button">
              <div className="sherah-chatbox__button-inline"></div>
              <div className="sherah-chatbox__submit">
                <button 
                  className="sherah-chatbox__submit-btn" 
                  type="submit" 
                  onClick={sendMessage}
                  // disabled={chatId === null || chatId === undefined}
                  >
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

export default Chat;
