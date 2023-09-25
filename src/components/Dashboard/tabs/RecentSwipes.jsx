

import Message from './Message'; 
import './stylesheets/MessagesList.css';
import {getBreederPurchaseRequests} from "../../../api/endpoints";
import React, { useEffect, useState } from "react";
import moment from 'moment'

function RecentSwipes({  }) {
  const [productRequests, setProductRequests] = useState([]);
  async function GetPurchaseRequestsByBreeder(){
    const response = await  getBreederPurchaseRequests();
    debugger;
    debugger
  const res = response.data.map(x=>x.data);
  
    setProductRequests(res);

  
  }

  useEffect(()=>{
    GetPurchaseRequestsByBreeder();
  }, [])

  
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
      {productRequests.map((message, index) => (
        <div key={index} className=' row mt-3'>
          <div className='col-md-4'>
           <img src={`${process.env.PUBLIC_URL}/assets/images/default.png`} x className="client-avatar" /> 
           </div>
          <div className="client-info col-md-6" style={{alignItems:"flex-start"}} >
            {/* <img src={message.client.avatar} alt={message.sender} className="client-avatar" /> */}
           <h4>{message?.customer?.firstname}</h4>
            <div className="client-name">{moment(message.date).fromNow()}</div>
          </div>
         
        </div>
      ))}
    </div>
  );
}

export default RecentSwipes;
