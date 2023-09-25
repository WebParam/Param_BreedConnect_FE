import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import '../tabs/stylesheets/calender.css'
import { AddMeetingSchedule, AllMeetingsScheduledById, AllMeetingsScheduled, AllMeetingsScheduledByBreeder, AllMeetingsScheduledByCustomer,GetCustomerProducts, GetPurchaseRequest } from '../../../../api/endpoints'


export default function Calender() {
    const [date, setDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [meetings, setMeetings] = useState([]);
    const [customerAppointments, setCustomerAppointments] = useState([]);
    const [breederAppointments, setBreederAppointments] = useState([]);
    const [customerProducts, setCustProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState();
    const [purchaseId, setPurchaseId] = useState();
    const [customerName, setCustomerName] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [meetingTime, setMeetingTime] = useState('');
    const [BreederId, setBreederId] = useState('');
    const [Status, setStatus] = useState('');
    const [CustomerId, setCustomerId] = useState('');
    const [AppointmentMessage, setAppointmentMessage] = useState('');
    const [Purchaserequestid, setPurchaserequestid] = useState('');
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
      await getPurchaseRequest(customerAppointments[0].customerId);
      e.preventDefault();
  
      if (selectedProduct) {
        const newMeeting = {
          BreederId:customerProducts[0].creatingUser,
          CustomerId: customerAppointments[0].customerId,
          AppointmentMessage,
          Purchaserequestid: purchaseId,
          ProductId: selectedProduct,
          Status,
          date: meetingTime
        };

        console.log("new meeting", newMeeting)
  
        //setMeetings([...meetings, newMeeting]);
        // const saveMeeting = await AddMeetingSchedule(newMeeting);
        // if(saveMeeting){
        //   console.log("save res", saveMeeting)
        //   closeModal();
        //   setCustomerName('');
        //   setSellerName('');
        //   setMeetingTime('');
        // }

      }
    };

    async function GetMeetings(){
      const _meetings = await AllMeetingsScheduled();
      setMeetings(_meetings?.data);
      console.log("meetings", meetings)
 
    }


    async function GetCustProducts(){
      const _products = await GetCustomerProducts();
      setCustProducts(_products?.data);
      console.log("_products", _products)
    }

    async function GetCustomerAppointments(){

      const _meetings = await AllMeetingsScheduledByCustomer();
      setCustomerAppointments(_meetings?.data);
      debugger;
    }

    async function getPurchaseRequest(customerId){
      const _requestRes = await GetPurchaseRequest(customerId);
      console.log("purchaseId", _requestRes?.data)
      setPurchaserequestid(_requestRes?.data);
      debugger;
    }


    async function GetBreederAppointments(){

      const _meetings = await AllMeetingsScheduledByBreeder();
      setBreederAppointments(_meetings?.data);
      debugger;
    }

    

    useEffect(()=>{
      GetMeetings();
      GetCustomerAppointments();
      GetBreederAppointments();
      GetCustProducts();
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
                {/* <div className="form-group">
                  <label htmlFor="customerName">Customer Name:</label>
                  <input
                    type="text"
                    id="customerName"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div> */}
                <div className="form-group">
                  <label htmlFor="productName">Select Product</label>
                  <select
                    id="dynamicSelect"
                    className="form-control"
                    value={selectedProduct}
                    onChange={(e) => handleSelectChange(e)}
                  >
                    <option value="">Select an product</option>
                    {customerProducts.map(option => (
                      <option key={option.value} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                {/* <Select
                 labelId="dropdown-label"
                  label="Select an option"
                  value={selectedOption}
                  name={modalContent[index]?.question}
                  onChange={(event) => handleSelectChange(event, modalContent[index])}
              >
                  {modalContent[index]?.options.map((option) => (
                      <MenuItem key={option?.value} value={option?.value}>
                          {option?.name}
                      </MenuItem>
                  ))}
              </Select> */}

                  {/* <input
                    type="text"
                    id="productName"
                    value={ProductId}
                    onChange={(e) => setProductId(e.target.value)}
                  /> */}
                </div>

                <div className="form-group">
                  <label htmlFor="appointmentMessage">Subject:</label>
                  <input
                    type="text"
                    id="appointmentMessage"
                    value={AppointmentMessage}
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
          <h2>Scheduled Meetings</h2>
          <ul>
            {customerAppointments.map((meeting, index) => (
              <li key={index}>
                <strong>Date:</strong> {new Date(meeting?.date).toLocaleDateString()},{' '}
                {new Date(meeting?.date).toLocaleDateString()} | <strong>Customer:</strong>{' '}
                {meeting?.customer?.firstname} | <strong>Breeder :</strong> {meeting?.breeder?.firstname}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }