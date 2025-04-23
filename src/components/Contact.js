// Contact.js
import React, { useState } from 'react';
import businessmanImg from '../images/businessman.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For example, sending the data to a server
    console.log('Form submitted:', formData);
    
    // Clear the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <h2><i className="fa-solid fa-mobile"></i> Contact <span className="text-primary">me</span></h2>
        <div className="row">
          <img src={businessmanImg} alt="Meeting" />
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="Name" 
              required 
            />
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Email" 
              required 
            />
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              cols="30" 
              rows="10" 
              placeholder="Message"
            ></textarea>
            <button type="submit" className="btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;