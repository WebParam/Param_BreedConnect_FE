
import {getBreederPurchaseRequests} from "../../../api/endpoints";
import React, { useEffect, useState } from "react";
import moment from 'moment'

function RecentSwipes({  }) {
  const [productRequests, setProductRequests] = useState([]);
  async function GetPurchaseRequestsByBreeder(){
  const response = await  getBreederPurchaseRequests();
  const res = response.data.map(x=>x.data);
  
    setProductRequests(res);

  
  }

  useEffect(()=>{
    GetPurchaseRequestsByBreeder();
  }, [])

  
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
