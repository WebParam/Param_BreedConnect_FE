import React from "react";
import './stylesheets/tabs.css'
import InputCom from "../../Helpers/InputCom";

export default function SwipesTab() {
  return (
    <>
      <div className="relative w-full overflow-x-auto sm:rounded-lg orders">
        <h2>Swipes</h2>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {/* table heading */}
            <tr className="text-base text-qgray whitespace-nowrap px-2 border-b default-border-bottom ">
              <td className="py-4 whitespace-nowrap table-header">Name</td>
              <td className="py-4 whitespace-nowrap table-header"></td>
              <td className="py-4 whitespace-nowrap table-header">Date</td>
              <td className="py-4 whitespace-nowrap table-header">Accept</td>
              <td className="py-4 whitespace-nowrap table-header">Reject</td>
              <td className="py-4 whitespace-nowrap table-header"></td>
            </tr>
            {/* table heading end */}
            <tr className=" border-b hover:bg-gray-50">
              <td className="py-1">
                <span>
                <img src={`${process.env.PUBLIC_URL}/assets/images/d2.jpg`}  alt="breeder" className="customer"/>
                </span>
               
              </td>
              <td className="py-1">
                <span className="text-lg text-qgray font-medium">Jane Doe</span>
              </td>
              <td className="px-1">
                <span className="text-lg text-qgray font-medium">
                  Feb 05,2021
                </span>
              </td>
              <td className="px-1">
                <span className="">
                  <button>
                  <img src={`${process.env.PUBLIC_URL}/assets/images/accept.svg`}  alt="accept" className="accept-picture" />
                  </button>
                
                </span>
              </td>
              <td className="py-1">
              <span className="">
                  <button>
                  <img src={`${process.env.PUBLIC_URL}/assets/images/reject.svg`}  alt="reject" className="reject-picture" />
                  </button>
                
                </span>
              </td>
              <td className="text-center py-1 px-2">
                <span className="text-qblack px-2 ">
                  
                 <img src={`${process.env.PUBLIC_URL}/assets/images/d1.jpg`}  alt="breed" className="product-picture" />
                
                </span>
              </td>
              <td className="text-center py-1 px-2">
              
                <span className="text-qblack px-2 ">
                  
                <button>Details</button>
                 
                 </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
