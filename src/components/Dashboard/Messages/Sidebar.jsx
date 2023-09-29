import { useEffect, useState } from 'react';
import { Chat, DonutLarge, MoreVert, Search, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';
import breedAxios from './axios-breed';

function Sidebar() {

  const [customers, setCustomers] = useState([]);
  const [breeders, setBreeders] = useState([]);

  useEffect(() => {
    breedAxios.get('/chats/breeder/651162283325879f3e81868d').then(response => {
      setBreeders(response.data);
    });
    breedAxios.get('/chats/customer/65109f1b5f348ffddab88745').then(response => {
      setCustomers(response.data);
    });
  }, [])
  return (
 
    <div className="col-lg-3 col-md-3 col-12 sherah-chatbox__one mg-top-30">
      <div className="sherah-chatbox__top">
        <div className="sherah-chatbox__inner sherah-border-btm pd-btm-20 mg-btm-10">
          <div className="sherah-chatbox__author">
            <div className="sherah-chatbox__author-img sherah-chatbox__author-img-sticky">
              {/* <img src="img/chat-author10.png" alt="#" /> */}
              <Avatar/>
              <span className="sherah-chatbox__author-online" />
            </div>
            <div className="sherah-chatbox__author-content">
              <h4 className="sherah-chatbox__author-title">
              {breeders[0].data.breeder.firstname} {' '} {breeders[0].data.breeder.lastname}
              </h4>
              <p className="sherah-chatbox__author-desc">
                Available
              </p>
            </div>
          </div>
        </div>
        <form className="sherah-chatbox-form" action="#">
          <input
            name="s"
            defaultValue=""
            type="text"
            placeholder="Search"
          />
          <button className="search-btn" type="submit">
            <svg
              className="sherah-color1__fill"
              width={16}
              height={16}
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.6888 18.2542C10.5721 22.0645 4.46185 20.044 1.80873 16.2993C-0.984169 12.3585 -0.508523 7.01726 2.99926 3.64497C6.41228 0.362739 11.833 0.112279 15.5865 3.01273C19.3683 5.93475 20.8252 11.8651 17.3212 16.5826C17.431 16.6998 17.5417 16.8246 17.6599 16.9437C19.6263 18.9117 21.5973 20.8751 23.56 22.8468C24.3105 23.601 24.0666 24.7033 23.104 24.9575C22.573 25.0972 22.1724 24.8646 21.8075 24.4988C19.9218 22.6048 18.0276 20.7194 16.1429 18.8245C15.9674 18.65 15.8314 18.4361 15.6888 18.2542ZM2.39508 10.6363C2.38758 14.6352 5.61109 17.8742 9.62079 17.8977C13.6502 17.9212 16.9018 14.6914 16.9093 10.6597C16.9169 6.64673 13.7046 3.41609 9.69115 3.39921C5.66457 3.38232 2.40259 6.61672 2.39508 10.6363Z" />
            </svg>
          </button>
        </form>
      </div>
    <div className="sherah-chatbox__sidebar sherah-default-bg sherah-border">
      
      {/* Chatbox List */}
      <ul className="sherah-chatbox__list">
        {/* Single List */}

        {breeders.map(user => ( 
          <SidebarChat key={user.data.customer.id} id={user.data.customer.id} firstName={user.data.customer.firstname} lastName={user.data.customer.lastname} />
        ))}
        {/* End Single List */}
      </ul>
    </div>
  </div>
  )
}

export default Sidebar
