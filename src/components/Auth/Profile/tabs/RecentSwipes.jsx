
import {GetPurchaseRequest, GetCustomerProducts} from "../../../../api/endpoints";
import React, { useEffect, useState } from "react";
import moment from 'moment';

import Cookies from "universal-cookie";
const cookies = new Cookies();
const user = cookies.get("bcon-user");

function RecentSwipes() {
  const [recentSwipes, setRecentSwipes] = useState([]);
  async function GetCustomerRecentSwipes(){
  const products = await GetCustomerProducts();
  console.log("products", products.data.filter(x => x.status === 1))
    setRecentSwipes(products.data.filter(x => x.status === 1));
  }

  useEffect(()=>{
    GetCustomerRecentSwipes();
  }, [])

  
  return (
    <div className="message-list">
      {recentSwipes.map((swipe, index) => (
        <div key={index} className=' row mt-3'>
          <div className='col-md-4'>
           <img src={swipe.images[0].url}  className="client-avatar" /> 
           </div>
          <div className="client-info col-md-6" style={{alignItems:"flex-start"}} >
           <h4>{swipe?.name}</h4>
           <div className="client-name">{moment(swipe.date).fromNow()}</div>
          </div>
         
        </div>
      ))}
    </div>
  );
}

export default RecentSwipes;