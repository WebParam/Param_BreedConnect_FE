
import React from 'react';
import Message from './Message'; 
//import './stylesheets/MessagesList.css';

function MessageList({  }) {


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
  
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className="message-bubble">
          <div className="client-info">
            {/* <img src={message.client.avatar} alt={message.sender} className="client-avatar" /> */}
            <img src={`${process.env.PUBLIC_URL}/assets/images/default.png`}className="client-avatar" /> 
            <div className="client-name">{message.content}</div>
          </div>
          <Message text={message.text} isReceived={message.isReceived} />
        </div>
      ))}
    </div>
  );
}

export default MessageList;
