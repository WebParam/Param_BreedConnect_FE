import { useEffect, useState } from 'react';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';
import breedAxios from './axios-breed';
import DashboardLayout from "../../Partials/DashboardLayout";
import { Link, useLocation } from "react-router-dom";
import { CreatePaymentLink,GenerateLink } from "../../../api/endpoints";
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [messages, setMessages] = useState([]);
  const [breeders, setBreeders] = useState([]);
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      setMessages(response.data);
    });
    breedAxios.get('/chats/breeder/651162283325879f3e81868d').then(response => {
      setBreeders(response.data);
    });
    breedAxios.get('/chats/customer/65109f1b5f348ffddab88745').then(response => {
      setCustomers(response.data);
    });
  }, [])

  useEffect(() => {
  
    var pusher = new Pusher('349866ddbfc4a5071728', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages ,newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])

  console.log(messages);
  console.log('breeders ', breeders);
  console.log('customers ', customers);

  const [paymentLink, setPaymentLink] = useState("");


  // const paymentForm = document.getElementById('paymentForm');
  // paymentForm.addEventListener("submit", payWithPaystack, false);
  
  async function payWithPaystack(purchaseRequestId) {
  
    const res = await CreatePaymentLink("6510a0095f348ffddab88748");
    debugger;
  
  }
  
  async function pay(paymentLinkId){
    const res = await GenerateLink("6510a3bc6404f47b14274a70");
    debugger;
    const url = res.data.data.authorization_url;
    window.location.href = url;
  
  }
  

  return (

    <>
    <DashboardLayout>
    <>
    <ToastContainer />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="sherah-body">
            {/* Dashboard Inner */}
            <div className="sherah-dsinner">
              <div className="sherah-breadcrumb mg-top-30">
                <h2 className="sherah-breadcrumb__title">Message</h2>
                <ul className="sherah-breadcrumb__list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li className="active">
                    <a href="chat-messages.html">Message</a>
                  </li>
                </ul>
              </div>
              <div className="sherah-chatbox__main">
                
              <button type="submit" onClick={()=>payWithPaystack()}> Requestpayment </button>
              <button type="submit" onClick={()=>pay()}> Pay </button>
              <div className="sherah-chatbox">
              <div className="row">
               <Sidebar />
               <Chat messages={messages}/>
              </div>
            </div>
            {/* End Dashboard Inner */}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    {/* <script src=""></script> */}
    </>
    </DashboardLayout>
       </>
  );
}

export default App;
