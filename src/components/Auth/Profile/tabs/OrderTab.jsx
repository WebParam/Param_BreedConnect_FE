import {React , useState, useEffect} from "react";
import './stylesheets/tabs.css'
import InputCom from "../../../Helpers/InputCom";
import { GetCustomerOrders } from '../../../../api/endpoints';
import moment from 'moment';
import Star from "../../../Helpers/icons/Star";
import StatusComponent from '../../../Shared/StatusColor';
import StarRating from "../../../Helpers/StarRating";
import {addReview} from "../../../../api/endpoints"

export default function OrderTab() {

  const [orders, setOrders] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const getOrders = async () => {
    const ordersRes =  await GetCustomerOrders();
    if(ordersRes.data.length){
      setOrders(ordersRes.data);
    }
  }

  useEffect(()=>{
    getOrders();
  }, [])

 async function CreateReview(id){
  const payload = {
    PurchaseRequestId:orderId,
    Message:message,
    Rating:rating
  }
  const res = await addReview(payload);

  setRating(0);
  setMessage("");
  setOrderId("");



  }

  function openModal(id){
    setIsOpen(true);
    setOrderId(id);
  }

  function closeModal(){
    setIsOpen(false); 
    setRating(0);
    setMessage("");
    setOrderId("");
  }
  return (
    <>
    
 
      <div className="relative w-full overflow-x-auto sm:rounded-lg orders">
        <h2>Transactions</h2>
       

        {   
        orders.length ?
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          {/* table heading */}
          <tr className="text-base text-qgray whitespace-nowrap px-2 border-b default-border-bottom ">
            <td className="py-2 whitespace-nowrap text-center">Ref No</td>
            <td className="py-4 whitespace-nowrap text-center">Name</td>
            <td className="py-4 whitespace-nowrap text-center">Status</td>
            <td className="py-4 whitespace-nowrap  text-center">Date</td>
            <td className="py-4 whitespace-nowrap  text-center">Amount</td>
            <td className="py-4 whitespace-nowrap  text-center">Code</td>
            <td className="py-4 whitespace-nowrap  text-center">Actions</td>
          </tr>
          
       {
          orders.map((order, index) => (
          <tr className=" border-b hover:bg-gray-50">
          <td className="text-center py-1">
            <span className="text-lg text-qgray font-medium">#{order?.paymentReference}</span>
          </td>
          <td className="text-center py-4 px-1">
            <span className="text-base text-qgray  whitespace-nowrap">
              {order?.product?.name} (From {order?.breeder?.firstname})
            </span>
          </td>
          <td className="text-center py-4 px-1">
            <span className="text-sm rounded text-green-500  p-2">
              {/* {order?.status === 0 ? 'Pending' : order?.status === 1 ? 'Completed' : 'Failed'} */}
              <StatusComponent status={order?.status === 0 ? 'Pending' : order?.status === 1 ? 'Completed' : 'Failed'}/>
            </span>
          </td>
          <td className="text-center py-1 px-2">
            <span className="text-base text-qblack whitespace-nowrap px-2 ">
            {moment(order?.dateCreated).format("YYYY/MM/DD")}
            </span>
          </td>
          <td className="text-center py-4">
          <span className="text-base text-qblack whitespace-nowrap px-2 ">
            R{order?.purchaseRequest?.amount}.00
            </span>
          </td>
          <td className="text-center py-1 px-2">
            <span className="text-base text-qblack whitespace-nowrap px-2 ">
            <InputCom
            placeholder="Code"
            type="text"
            inputClasses="h-[10px]"
            value={order?.pin}
          />
            </span>
          </td>
          <td className="text-center py-1 px-2">
              <a onClick={()=>openModal(order.purchaseRequest.id)}  ><small  >Review </small> </a> 
          </td>
        
        </tr>
          
          ))
          }
       </tbody>
      </table>
        :
            <div style={{margin:"10em"}}>
              <h2><center>No active orders</center></h2>
            </div>
        }

      </div>
      <div>
       
       {isOpen && (
         <div className="edit-popup" style={{width:"80%"}}>
           <div>
           <h1>Add a review</h1>
           <form >

        <div className="flex space-x-1 items-center mb-[30px]">
          <StarRating
      
            hoverHandler={setHover}
            rating={rating}
            hoverRating={hover}
            ratingHandler={setRating}
          />
          <span className="text-qblack text-[15px] font-normal mt-1">
            ({rating}.0)
          </span>
        </div>


        <div className="form-group">
          <label htmlFor="lastName">Message</label>
          <textarea
          rows={5}
          style={{height:"150px", padding:"15px"}}
           onChange={(e)=>setMessage(e.target.value)}
          value={message}
            id="message"
            name="message"
            // value={user.lastname}
            // onChange={handleChange}
          />
        </div>

        <button className="buttonSave" onClick={(e)=>{e.preventDefault(); CreateReview()}} type="submit">Submit review</button>
        <button className="buttonClose" type="submit" onClick={()=>closeModal()}>Close</button>
      </form>
           </div>
         </div>
       )}
       </div>
    </>
  );
}
