import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const contactInfo = {
    email: 'pratikshyakafle25@gmail.com',
    linkedin: 'linkedin.com/in/pratikshyakafle',
    phone: '+977-9761787098',
    address: 'Kathmandu, Nepal',
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await axios.post('https://68ce78486dc3f350777f145b.mockapi.io/contacts', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="page-container contact-section">
      <section className="container">
        <h1>Get in Touch</h1>
        <p className="contact-subtitle">
          Have a question or want to work together? Send me a message!
        </p>

        <div className="contact-content">
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <ul>
              <li><FaEnvelope /> {contactInfo.email}</li>
              <li><FaLinkedin /> <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer">{contactInfo.linkedin}</a></li>
              <li><FaPhone /> {contactInfo.phone}</li>
              <li><FaMapMarkerAlt /> {contactInfo.address}</li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row two-col">
              <div className="form-group input-field">
                <label htmlFor="name"></label>
                <span className="icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group input-field">
                <label htmlFor="email"></label>
                <span className="icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group input-field">
              <label htmlFor="message"></label>
              <span className="icon top" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg>
              </span>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <div className="actions">
              <button type="submit" className="btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              <span className="note">I usually reply within 24–48 hours.</span>
            </div>

            {status === 'success' && <p className="status-banner success">Message sent successfully!</p>}
            {status === 'error' && <p className="status-banner error">Failed to send message. Please try again later.</p>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;