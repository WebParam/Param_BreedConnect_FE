import React, { useState } from 'react';
import InputCom from "../../../Helpers/InputCom";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    {
      title: 'Personal Information',
      content: <div>
          <div className="input-item flex space-x-2.5 mb-8">
            <div className="w-1/4 h-full text-label">
              Full Name:
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                placeholder="Full Name"
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
           </div>
           <div className="input-item flex space-x-2.5 mb-8">
            <div className="w-1/4 h-full text-label">
              Email Address
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                placeholder="Email Address"
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
           </div>
           <div className="input-item flex space-x-2.5 mb-8">
            <div className="w-1/4 h-full text-label">
              Phone:
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                placeholder="012 3  *******"
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
           </div>
           <div className="input-item flex space-x-2.5 mb-8">
            <div className="w-1/4 h-full text-label">
              City
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                placeholder="City"
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
           </div>
           <div className="input-item flex space-x-2.5 mb-8">
            <div className="w-1/4 h-full text-label">
              Province
            </div>
            <div className="w-1/2 h-full">
              <InputCom
                placeholder="Province"
                type="text"
                inputClasses="h-[50px]"
              />
            </div>
           </div>
        
           
      </div>,
    },
    {
      title: 'Documents',
      content: <div>Content for Tab 2</div>,
    }
  ];



  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default Tabs;
