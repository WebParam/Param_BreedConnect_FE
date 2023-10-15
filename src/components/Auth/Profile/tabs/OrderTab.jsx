import {React , useState, useEffect} from "react";
import './stylesheets/tabs.css'
import InputCom from "../../../Helpers/InputCom";
import { GetCustomerOrders } from '../../../../api/endpoints';
import moment from 'moment';
import StatusComponent from '../../../Shared/StatusColor';
import axios from "axios";

export default function OrderTab() {

  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const ordersRes =  await GetCustomerOrders();
    if(ordersRes.data.length){
      setOrders(ordersRes.data);
    }
  }

  async function GetPdf(){

    axios(`https://localhost:7061/orders/invoice/65187e91d746faf1160084d9`, {
      method: 'GET',
      responseType: 'blob' //Force to receive data in a Blob Format
    })
    .then(response => {
    //Create a Blob from the PDF Stream
      const file = new Blob(
        [response.data], 
        {type: 'application/pdf'});
    //Build a URL from the file
      const fileURL = URL.createObjectURL(file);
    //Open the URL on new Window
    debugger
      window.open(fileURL);
    })
    .catch(error => {
      
      console.log(error);
    });
    
    
    }

  useEffect(()=>{
    getOrders();
  }, [])

  return (
    <>
      <div className="relative w-full overflow-x-auto sm:rounded-lg orders">
        <h2>Transactions</h2>
        {   
        orders.length ?
      //   <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      //   <tbody>
      //     {/* table heading */}
      //     <tr className="text-base text-qgray whitespace-nowrap px-2 border-b default-border-bottom ">
      //       <td className="py-2 whitespace-nowrap text-center">Ref No</td>
      //       <td className="py-4 whitespace-nowrap text-center">Name</td>
      //       <td className="py-4 whitespace-nowrap text-center">Status</td>
      //       <td className="py-4 whitespace-nowrap  text-center">Date</td>
      //       <td className="py-4 whitespace-nowrap  text-center">Amount</td>
      //       <td className="py-4 whitespace-nowrap  text-center">Code</td>
      //     </tr>
      //  {
      //     orders.map((order, index) => (
      //     <tr className=" border-b hover:bg-gray-50">
      //     <td className="text-center py-1">
      //       <span className="text-lg text-qgray font-medium">#{order?.paymentReference}</span>
      //     </td>
      //     <td className="text-center py-4 px-1">
      //       <span className="text-base text-qgray  whitespace-nowrap">
      //         {order?.product?.name} (From {order?.breeder?.firstname})
      //       </span>
      //     </td>
      //     <td className="text-center py-4 px-1">
      //       <span className="text-sm rounded text-green-500 s p-2">
      //         {/* {order?.status === 0 ? 'Pending' : order?.status === 1 ? 'Completed' : 'Failed'} */}
      //         <StatusComponent status={order?.status === 0 ? 'Pending' : order?.status === 1 ? 'Completed' : 'Failed'}/>
      //       </span>
      //     </td>
      //     <td className="text-center py-1 px-2">
      //       <span className="text-base text-qblack whitespace-nowrap px-2 ">
      //       {moment(order?.dateCreated).format("YYYY/MM/DD")}
      //       </span>
      //     </td>
      //     <td className="text-center py-4">
      //     <span className="text-base text-qblack whitespace-nowrap px-2 ">
      //       R{order?.purchaseRequest?.amount}.00
      //       </span>
      //     </td>
      //     <td className="text-center py-1 px-2">
      //       <span className="text-base text-qblack whitespace-nowrap px-2 ">
      //       <InputCom
      //       placeholder="Code"
      //       type="text"
      //       inputClasses="h-[10px]"
      //       value={order?.pin}
      //     />
      //       </span>
      //     </td>
      //   </tr>
          
      //     ))
      //     }
      //  </tbody>
      // </table>
      <div className="container">
        <div className="row">	
          <div className="col-12">
            <div className="sherah-body">
              {/* Dashboard Inner */}
              <div className="sherah-dsinner">
                <div className="row mg-top-30">
                  <div className="col-12 sherah-flex-between">
                    {/* Sherah Breadcrumb */}
                    <div className="sherah-breadcrumb">
                      <h2 className="sherah-breadcrumb__title">Order list</h2>
                      <ul className="sherah-breadcrumb__list"> 
                        <li><a href="#">Home</a></li>
                        <li className="active"><a href="order-list.html">Orders</a></li>
                      </ul>
                    </div>
                    {/* End Sherah Breadcrumb */}
                    {/* <a href="order-details" className="sherah-btn sherah-gbcolor">Add New Vendor</a> */}
                  </div>
                </div>

                <h4 style={{fontSize:"1.5em", fontWeight:"600"}} className=" mt-6">Recent orders</h4>

{/* <div className="col-md-12"> */}


             
 {
                   orders.map((x,i)=>{ return <>
                  
                  {i==0 ? <div style={{float: "left", marginRight: "1%",  paddingTop: "2%", paddingBottom: "2%", borderRadius:"15px"}} className="products-sorting col-md-4 bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mt-[40px]">
              
                <img style={{maxHeight:"60px"}} src={x.customer.profilePicture ?? `${process.env.PUBLIC_URL}/assets/images/default.png`}  alt="Profile"  />
                  <div>
                  
                  <p className="font-400 text-[13px]">
                    <span className="text-qgray">{x.customer.firstname} </span> <br/>{moment(x.purchaseRequest?.date).fromNow()} 
                  </p>
                </div>
                  <div className="flex space-x-3 items-center">
                  <p className="font-400 text-[13px]">
                    <span className="text-qgray">R {x.product.price}</span>
                  </p>
                   
                  </div>
                  <div>
                  <div class="sherah-table__status sherah-color3 sherah-color3__bg--opactity">Pending</div>
                  </div>
               
                </div>

                : <div style={{ paddingTop: "2%", paddingBottom: "2%", borderRadius:"15px"}} className="products-sorting col-md-4 bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mt-[40px]">
                <img style={{maxHeight:"60px"}}  src={x.customer.profilePicture ?? `${process.env.PUBLIC_URL}/assets/images/default.png`} alt="Profile"  />
                  <div>
                  
                  <p className="font-400 text-[13px]">
                  <span className="text-qgray">{x.customer.firstname} </span> <br/>{moment(x.purchaseRequest?.date).fromNow()} 
                  </p>
                </div>
                  <div className="flex space-x-3 items-center">
                  <p className="font-400 text-[13px]">
                  <span className="text-qgray">R {x.product.price}</span>
                  </p>
                   
                  </div>
                  <div>
                  <div class="sherah-table__status sherah-color3 sherah-color3__bg--opactity">Pending</div>
                  </div>
               
                </div>
                   }
                </>
                   })}
                {/* </div> */}
                <div className="sherah-table col-md-10 sherah-page-inner sherah-border sherah-default-bg mg-top-25">
        

                  <table id="sherah-table__vendor" className="sherah-table__main sherah-table__main-v3">
                    {/* sherah Table Head */}
                    <thead className="sherah-table__head">
                      {/* <tr> */}
                        {/* <th className="sherah-table__column-1 sherah-table__h1">Request ID</th>
                        <th className="sherah-table__column-2 sherah-table__h2">Customer Name</th>
                        <th className="sherah-table__column-3 sherah-table__h3">Date</th>
                        <th className="sherah-table__column-4 sherah-table__h4">Status</th>
                        <th className="sherah-table__column-5 sherah-table__h5">Order Total</th>
                        <th className="sherah-table__column-8 sherah-table__h8">Action</th> */}
                          <tr className="text-base text-qgray whitespace-nowrap px-2 border-b default-border-bottom ">
               
                      <td className="py-4 pl-5 whitespace-nowrap table-header">Id</td>
                      <td className="py-4 whitespace-nowrap table-header">Name</td>
                      <td className="py-4 whitespace-nowrap table-header">Status</td>
                      <td className="py-4 whitespace-nowrap table-header">Date</td>
                      <td className="py-4 whitespace-nowrap table-header">Amount</td>
                      <td className="py-4 whitespace-nowrap table-header">Code</td>
                      <td className="py-4 whitespace-nowrap table-header">Action</td>
             
                    {/* </tr> */}
                      </tr>
                    </thead>
                    <tbody className="sherah-table__body">

                      {
                       
                       orders.map((x,i)=> {return(
                        <>
                          <tr className=" border-b hover:bg-gray-50">
                      <td className="py-1">
                        <span style={{float:"left"}}>
                          {x?.id.substring(0,5)}
                        </span>
                      </td>
                      <td className="text-center py-1 px-2">
                        <span className="text-qblack px-2 " style={{float:"left"}}>
                          
                          {x?.customer?.firstname} {x?.customer?.lastname}
                        </span>
                      </td>
                      <td className="text-center py-1 px-2">
                        <span className="text-qblack px-2 " style={{float:"left"}}>
                          
                          {x?.status}
                        </span>
                      </td>
                      <td className="px-1">
                        <span className="text-lg text-qgray font-medium" style={{float:"left"}}>
                        {moment(x?.dateCreated).fromNow()}
                        </span>
                      </td>
                     
                      <td className="px-1">
                        <span className="">
                        <span className="text-qblack px-2 ">
                          
                          {x?.product?.price}
                          </span>
                        
                        </span>
                      </td>
                      <td className="py-1 mt-2" style={{paddingLeft:"0px", marginTop:"", float:"left"}}>
                      {/* <span className="">
                         <input onChange={(e)=>{setPin(e.target.value); e.preventDefault()}} style={{width: "150px", height: "auto"}} className="mt-2" type="text" />
                        </span> */}
                      </td>
                      
                      <td className="py-1 mt-2" style={{paddingLeft:"0px", marginTop:""}}>
                      <span className="">
                         {/* {x.pin} */}
                         {/* <a style={{}} onClick={(e)=>{ FinalizeOrder(x.id);}}><small>Complete </small> </a> 
                         <br/> */}
                         {x.status==3 && <a style={{ cursor:"pointer"}} href="" onClick={(e)=>{e.preventDefault(); GetPdf()}}><small>Invoice </small> </a> }
                         <br/>
                         {x.status!=3 && <a style={{cursor:"pointer"}} href=""  onClick={(e)=>{e.preventDefault(); GetPdf()}}><small>Cancel </small> </a>}
                        </span>
                      </td>
                    </tr>
                        </>
                        )})
                      }
     
                    </tbody>
                  </table>
                </div>
              </div>
              {/* End Dashboard Inner */}
            </div>
          </div>
        </div>	
        </div>
        :
            <div style={{margin:"10em"}}>
              <h2><center>No active orders</center></h2>
            </div>
        }

      </div>
    </>
  );
}
