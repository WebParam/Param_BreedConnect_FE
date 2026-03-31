import React, {useEffect} from 'react';
import { useForm, Controller } from 'react-hook-form';
import '../tabs/stylesheets/ContactUs.css';

const ContactUs = () => {
    const { control, handleSubmit, errors } = useForm();


    const onSubmit = async (data) => {
        try {
          // Send the form data to your server here
          // You can use Axios or any other method to make an HTTP request.
          console.log('Form data:', data);
    
          // Reset the form after submission (if needed)
          // reset(); // Uncomment if you want to reset the form
    
          // Handle success or show a success message to the user
        } catch (error) {
          // Handle errors, show an error message, or perform any other error handling
          console.error('Form submission error:', error);
        }
      };


  return (
    <div>
      <h1>Contact Informatiom</h1>
      <div className="contact-container">
        <div className="map-container">
          <iframe
            title="Map"
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=we work sandton&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen
          />
        </div>
        <div className="form-container">
          <h2>Get In Touch</h2>
          {/* Place your contact form here */}
          <div className="form-column">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Name</label>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => <input {...field} type="text" />}
              />
            </div>
            <div>
              <label>Email</label>
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field }) => <input {...field} type="email" />}
              />
            </div>
            <div>
              <label>Subject</label>
              <Controller
                name="subject"
                control={control}
                rules={{ required: "Subject is required" }}
                render={({ field }) => <input {...field} type="text" />}
              />
            </div>
            <div>
              <label>Message</label>
              <Controller
                name="message"
                control={control}
                rules={{ required: "Message is required" }}
                render={({ field }) => <input {...field} type="textarea"  className='textArea'/>}
              />
            </div>
            <button type="submit" className='buttonSave'>Submit</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;