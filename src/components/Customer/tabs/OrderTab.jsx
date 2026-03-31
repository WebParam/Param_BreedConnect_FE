import React from "react";
import './stylesheets/tabs.css'
import InputCom from "../../Helpers/InputCom";

export default function OrderTab() {
  return (
    <>
      <div className="relative w-full overflow-x-auto sm:rounded-lg orders">
        <h2>Transactions</h2>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {/* table heading */}
            <tr className="text-base text-qgray whitespace-nowrap px-2 border-b default-border-bottom ">
              <td className="py-2 whitespace-nowrap text-center">ID</td>
              <td className="py-4 whitespace-nowrap text-center">Name</td>
              <td className="py-4 whitespace-nowrap text-center">Status</td>
              <td className="py-4 whitespace-nowrap  text-center">Date</td>
              <td className="py-4 whitespace-nowrap  text-center">Amount</td>
              <td className="py-4 whitespace-nowrap  text-center">Code</td>
            </tr>
            {/* table heading end */}
            <tr className=" border-b hover:bg-gray-50">
              <td className="text-center py-1">
                <span className="text-lg text-qgray font-medium">#354</span>
              </td>
              <td className="text-center py-4 px-1">
                <span className="text-base text-qgray  whitespace-nowrap">
                  Fub 05,2021
                </span>
              </td>
              <td className="text-center py-4 px-1">
                <span className="text-sm rounded text-green-500 bg-green-100 p-2 status completed">
                  Completed
                </span>
              </td>
              <td className="text-center py-1 px-2">
                <span className="text-base text-qblack whitespace-nowrap px-2 ">
                October 2022
                </span>
              </td>
              <td className="text-center py-4">
              <span className="text-base text-qblack whitespace-nowrap px-2 ">
              R30,000
                </span>
              </td>
              <td className="text-center py-1 px-2">
                <span className="text-base text-qblack whitespace-nowrap px-2 ">
                <InputCom
                placeholder="Code"
                type="text"
                inputClasses="h-[10px]"
              />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
