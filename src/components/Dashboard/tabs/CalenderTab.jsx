import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import '../tabs/stylesheets/calender.css'
import { 
  AddMeetingSchedule, 
  AllMeetingsScheduledById, 
  AllMeetingsScheduled, 
  AllMeetingsScheduledByBreeder, 
  AllMeetingsScheduledByCustomer,
  GetBreederProducts, 
  GetPurchaseRequest,
  getBreederPurchaseRequests } from '../../../api/endpoints'


export default function CalenderTab() {
    const [date, setDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [meetings, setMeetings] = useState([]);
    const [customerAppointments, setCustomerAppointments] = useState([]);
    const [breederAppointments, setBreederAppointments] = useState([]);
    const [breederProducts, setBreederProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState();
    const [selectedCustomer, setSelectedCustomer] = useState();
    const [selectedCustomerId, setSelectedCustomerId] = useState();
    const [customer, setCustomer] = useState([]);
    const [sellerName, setSellerName] = useState('');
    const [meetingTime, setMeetingTime] = useState('');
    const [BreederId, setBreederId] = useState('');
    const [Status, setStatus] = useState('');
    const [CustomerId, setCustomerId] = useState('');
    const [appointmentMessage, setAppointmentMessage] = useState('');
    const [purchaseRequest, setPurchaseRequest] = useState();
    const [productWithUsers, setProductWithUsers] = useState();
    const [ProductId, setProductId] = useState('');

  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleDateChange = (selectedDate) => {
      setDate(selectedDate);
      openModal();
    };

    const handleSelectChange = event => {
     setSelectedProduct(event.target.value)
    };

     const handleSelectCustomerChange = (event) => {
      
     setSelectedCustomer(event.target.value)
      //console.log(productWithUsers.filter(x => x.data?.customer?.firstname === selectedCustomer))
      const customer = productWithUsers.filter(x => x.data?.customer?.firstname === selectedCustomer)
      setCustomer(customer)
    };
  
    const handleScheduleMeeting = async (e) => {
      e.preventDefault();
      console.log("---",customer[0].data.customerId)
      await getPurchaseRequestAndCreateAppointment()   
    };

    async function GetMeetings(){
      const _meetings = await AllMeetingsScheduled();
      setMeetings(_meetings?.data);
 
    }

    const getBreederRequests = async () => {
      const res = await getBreederPurchaseRequests();
      setProductWithUsers(res.data)
      // console.log("Purchase Requests", productWithUsers)
    }



    async function getBreederProducts(){
      const _products = await GetBreederProducts();
      setBreederProducts(_products?.data);
    }

    async function GetCustomerAppointments(){

      const _meetings = await AllMeetingsScheduledByCustomer();
      setCustomerAppointments(_meetings?.data);
      debugger;
    }

    async function getPurchaseRequestAndCreateAppointment(){
     // const _requestRes = await GetPurchaseRequest(Id);
      //setPurchaseRequest(_requestRes?.data[0]);
      const data = productWithUsers.filter(x => x.data?.customer?.firstname === selectedCustomer)
      if(data[0].data.purchase.id){
      const newMeeting = {
        appointmentMessage,
        purchaserequestid: data[0].data.purchase.id,
        date: meetingTime
      };

     // setMeetings([...meetings, newMeeting]);
      const saveMeeting = await AddMeetingSchedule(newMeeting);
      console.log("save res", saveMeeting)
      if(saveMeeting){
        closeModal();
        //setCustomerName('');
        setSellerName('');
        setMeetingTime('');
      }

      GetCustomerAppointments();
    }
    }


    async function GetBreederAppointments(){

      const _meetings = await AllMeetingsScheduledByBreeder();
      setBreederAppointments(_meetings?.data);
      debugger;
    }

    

    useEffect(() =>{
      GetMeetings();
      GetBreederAppointments();
      getBreederProducts();
      getBreederRequests();
     }, [])
  
    return (
      <div className="scheduler-container">
        <h1>Meeting Scheduler</h1>
        <div className="calendar-container">
          <Calendar onChange={handleDateChange} value={date} />
        </div>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Schedule a Meeting</h2>
              <form onSubmit={handleScheduleMeeting}>
                <div className="form-group">
                  <label htmlFor="productName">Select Product</label>
                  <select
                    id="dynamicSelect"
                    className="form-control"
                    value={selectedProduct}
                    onChange={(e) => handleSelectChange(e)}
                  >
                    <option value="">Select an product</option>
                    {breederProducts.map(option => (
                      <option key={option.value} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
        
                </div>
                <div className="form-group">
                  <label htmlFor="customer">Select Customer</label>
                  <select
                    id="dynamicSelect"
                    className="form-control"
                    value={selectedCustomer}
                    onChange={(e) => handleSelectCustomerChange(e, )}
                  >
                    <option value="">Select an customer</option>
                    {productWithUsers.map(option => (
                      <option key={option.data.value} value={option.id}>
                        {option.data.customer.firstname}
                      </option>
                    ))}
                  </select>
        
                </div>
                <div className="form-group">
                  <label htmlFor="appointmentMessage">Subject:</label>
                  <input
                    type="text"
                    id="appointmentMessage"
                    value={appointmentMessage}
                    onChange={(e) => setAppointmentMessage(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="meetingTime">Meeting Time:</label>
                  <input
                    type="datetime-local"
                    id="meetingTime"
                    value={meetingTime}
                    onChange={(e) => setMeetingTime(e.target.value)}
                  />
                </div>
                <button type="submit" className='meetingBtn'>Schedule</button>
                <button onClick={closeModal} className='meetingBtn'>Cancel</button>
              </form>
            </div>
          </div>
        )}
        <div className="meetings-list">
          <h1>Scheduled Meetings</h1>
          <ul>
          {breederAppointments.map((meeting, index) => (
            <>
              <li class="meeting-item" onClick={handleDateChange}>
                  {/* <div class="meeting-title">Meeting {index}</div> */}
                  <div class="meeting-details">
                      <span class="meeting-date">Customer:</span> {meeting?.customer?.firstname}<br/>
                      <span class="meeting-date">Subject:</span> {meeting?.appointmentMessage}<br/>
                      <span class="meeting-date">Date and Time:</span> {meeting?.date}
                  </div>
              </li>
             
              </>
            ))}
          </ul>
        </div>
      </div>
    );
  }