import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../tabs/stylesheets/calender.css'


export default function Calender() {
    const [date, setDate] = useState(new Date());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [meetings, setMeetings] = useState([]);
    const [customerName, setCustomerName] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [meetingTime, setMeetingTime] = useState('');
  
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
  
    const handleScheduleMeeting = (e) => {
      e.preventDefault();
  
      if (customerName && sellerName && meetingTime) {
        const newMeeting = {
          customerName,
          sellerName,
          meetingTime,
          date,
        };
  
        setMeetings([...meetings, newMeeting]);
        closeModal();
        setCustomerName('');
        setSellerName('');
        setMeetingTime('');
      }
    };
  
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
                  <label htmlFor="customerName">Customer Name:</label>
                  <input
                    type="text"
                    id="customerName"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sellerName">Breeder Name:</label>
                  <input
                    type="text"
                    id="sellerName"
                    value={sellerName}
                    onChange={(e) => setSellerName(e.target.value)}
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
            {meetings.map((meeting, index) => (
              <li key={index}>
                <strong>Date:</strong> {meeting.date.toLocaleDateString()},{' '}
                {meeting.date.toLocaleTimeString()} | <strong>Customer:</strong>{' '}
                {meeting.customerName} | <strong>Breeder :</strong> {meeting.sellerName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }