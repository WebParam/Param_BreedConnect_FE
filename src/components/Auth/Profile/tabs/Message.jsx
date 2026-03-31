import React from 'react';
import './stylesheets/Message.css';

function Message({ text, isReceived }) {
    const messageClass = isReceived ? 'received' : 'sent';
  
    return (
      <div className={`message ${messageClass}`}>
        <div className="message-bubble">
          {text}
        </div>
      </div>
    );
  }
  
  export default Message;

  
  
