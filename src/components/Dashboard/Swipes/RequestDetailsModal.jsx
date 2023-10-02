import React, { useState } from 'react';
import './request.css'

const RequestModal = ({ isOpen, onClose, productRequests }) => {
  const [activeTab, setActiveTab] = useState('product');
  console.log("pro", productRequests)
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
    <div className="modalContainer">
    <div className="product-details">
      <img src={productRequests.product.images[0].url} alt={productRequests.product.name} className="product-image" />
      <div className="product-info">
        <h2>Information</h2>

        {/* Tabs */}
        <div className="product-tabs">
          <div
            className={`tab ${activeTab === 'product' ? 'active' : ''}`}
            onClick={() => handleTabClick('product')}
          >
            Product
          </div>
          <div
            className={`tab ${activeTab === 'customer' ? 'active' : ''}`}
            onClick={() => handleTabClick('customer')}
          >
            Customer
          </div>
          {/* Add more tabs as needed */}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'product' && (
            <div>
            <p className='p-text'>Product Name: {productRequests.product.name}</p>
            <p className='p-text'>Location: {productRequests.product.location}</p>
            <p className='p-text'>Price: {productRequests.product.price}</p>
            <p className='p-text'>Health Records: {productRequests.product.healthRecords}</p>
            <p className='p-text'>Availability: {productRequests.product.availability}</p>
            </div>
          )}
          {activeTab === 'customer' && (
              <div>
              <p className='p-text'>Full Name: {productRequests.customer.firstname} {productRequests.customer.lastname}</p>
              <p className='p-text'>Location: {productRequests.customer.address}</p>
              <p className='p-text'>Cell No.: {productRequests.customer.cellphone}</p>
              <br/>
              <br/>
              </div>
          )}
          {/* Add more tab content as needed */}
        </div>
      </div>
    </div>
    <center><button onClick={onClose}>Close</button></center>
    </div>
  
    </div>
  );
};

export default RequestModal;