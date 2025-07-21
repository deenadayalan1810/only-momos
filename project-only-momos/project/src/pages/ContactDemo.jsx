import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';

function ContactDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message sent sucessfully");

        setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      } else {
        alert("Message failed to send.");
      }
    } catch (err) {
      alert("Error sending message.");
      console.error(err);
    }
  };

  return (
    <>
      <HeroSection
        title="Contact2 Us"
        subtitle="We'd love to hear from you. Reach out with any questions or to make a reservation."
        backgroundImage="https://images.pexels.com/photos/6646017/pexels-photo-6646017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} value={formData.message} required />
        <button type="submit">Send Messages</button>
      </form>
    </>
  );
}

export default ContactDemo;