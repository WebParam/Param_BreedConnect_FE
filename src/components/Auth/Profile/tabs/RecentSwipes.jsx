
import {GetPurchaseRequest, GetCustomerProducts} from "../../../../api/endpoints";
import React, { useEffect, useState } from "react";
import moment from 'moment';

import Cookies from "universal-cookie";
const cookies = new Cookies();
const user = cookies.get("bcon-user");

function RecentSwipes() {
  const [recentSwipes, setRecentSwipes] = useState([]);
  const [custRequest, setCustRequest] = useState([]);
  async function GetCustomerRecentSwipes(){
  const products = await GetCustomerProducts();
  //const swipes = await GetPurchaseRequest(user.id)
  const custProducts = products.data.filter(x => x.status === 1)
  setRecentSwipes(custProducts);
  console.log("rerere", recentSwipes)
  }

  async function GetRequests(){
    const swipes = await GetPurchaseRequest(user.id)
    const requests = swipes.data
    setCustRequest(requests);
    console.log("rerere2", recentSwipes)
    }

  useEffect(()=>{
    GetCustomerRecentSwipes();
   // GetRequests();
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