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
  GetPurchaseRequest } from '../../../api/endpoints'


export default function CalenderTab() {
    const [date, setDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [meetings, setMeetings] = useState([]);
    const [customerAppointments, setCustomerAppointments] = useState([]);
    const [breederAppointments, setBreederAppointments] = useState([]);
    const [breederProducts, setBreederProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState();
    const [customerName, setCustomerName] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [meetingTime, setMeetingTime] = useState('');
    const [BreederId, setBreederId] = useState('');
    const [Status, setStatus] = useState('');
    const [CustomerId, setCustomerId] = useState('');
    const [appointmentMessage, setAppointmentMessage] = useState('');
    const [purchaseRequest, setPurchaseRequest] = useState();
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
     // t({ selectedOption: event.target.value });
     console.log("selcted", event.target.value)

     setSelectedProduct(event.target.value)
    };
  
    const handleScheduleMeeting = async (e) => {
      console.log("breederAppointments[0].BreederId", breederAppointments[0].breederId)
      e.preventDefault();
      await getPurchaseRequestAndCreateAppointment(breederAppointments[0].breederId)   
    };

    async function GetMeetings(){
      const _meetings = await AllMeetingsScheduled();
      setMeetings(_meetings?.data);
      console.log("meetings", meetings)
 
    }




    async function getBreederProducts(){
      const _products = await GetBreederProducts();
      setBreederProducts(_products?.data);
      console.log("_products", _products)
    }

    async function GetCustomerAppointments(){

      const _meetings = await AllMeetingsScheduledByCustomer();
      setCustomerAppointments(_meetings?.data);
      debugger;
    }

    async function getPurchaseRequestAndCreateAppointment(Id){
      const _requestRes = await GetPurchaseRequest(Id);
      setPurchaseRequest(_requestRes?.data[0]);
      if(_requestRes?.data[0]){
      const newMeeting = {
        appointmentMessage,
        purchaserequestid: _requestRes?.data[0].id,
        date: meetingTime
      };

     // setMeetings([...meetings, newMeeting]);
      const saveMeeting = await AddMeetingSchedule(newMeeting);
      console.log("save res", saveMeeting)
      if(saveMeeting){
        closeModal();
        setCustomerName('');
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
          {/* <h2>Scheduled Meetings</h2>
          <ul>
            {customerAppointments.map((meeting, index) => (
              <li key={index}>
                <strong>Date:</strong> {new Date(meeting?.date).toLocaleDateString()},{' '}
                {new Date(meeting?.date).toLocaleDateString()} | <strong>Customer:</strong>{' '}
                {meeting?.customer?.firstname} | <strong>Breeder :</strong> {meeting?.breeder?.firstname} |
                 <strong> Message :</strong> {meeting?.appointmentMessage}
              </li>
            ))}
          </ul> */}
          <h1>Scheduled Meetings</h1>
          <ul>
          {breederAppointments.map((meeting, index) => (
            <>
              <li class="meeting-item">
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