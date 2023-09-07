
import React from 'react';
import Message from './Message'; 
import './stylesheets/MessagesList.css';

function MessageList({ messages }) {
  
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <div key={index} className="message-wrapper">
          <div className="client-info">
            <img src={message.client.avatar} alt={message.client.name} className="client-avatar" />
            <div className="client-name">{message.client.name}</div>
          </div>
          <Message text={message.text} isReceived={message.isReceived} />
        </div>
      ))}
    </div>
  );
}

export default MessageList;
