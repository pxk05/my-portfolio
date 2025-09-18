import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import {
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'pratikshyakafle25@gmail.com' },
    { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/pratikshyakafle' },
    { icon: <FaPhone />, label: 'Contact', value: '+977-9761787098' },
    { icon: <FaMapMarkerAlt />, label: 'Address', value: 'Kathmandu, Nepal' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    console.log('Form Data:', formData); // Log form data to console
    // try {
    //   await axios.post('https://your-api-endpoint.com/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    // } catch (error) {
    //   setStatus('error');
    //   console.error('Error submitting form:', error);
    // }
  };

  return (
    <div className="page-container">
      <section className="contact-section container">
        <h1>Contact Me</h1>
        <p className="contact-subtitle">Have a question or a project in mind? I’d love to hear from you.</p>
        <div className="contact-content">
          <div className="contact-info-card">
            {contactInfo.map((item, index) => (
              <div key={index} className="info-item">
                <span className="info-icon">{item.icon}</span>
                <div className="info-details">
                  <span className="info-label">{item.label}:</span>
                  <span className="info-value">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="contact-form" aria-live="polite">
            <div className="form-row two-col">
              <div className="form-group input-field">
                <label htmlFor="name">Name</label>
                <span className="icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.761 0 5-2.686 5-6s-2.239-6-5-6-5 2.686-5 6 2.239 6 5 6zm0 2c-4.418 0-8 2.91-8 6.5V22h16v-1.5C20 16.91 16.418 14 12 14z"/></svg>
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-group input-field">
                <label htmlFor="email">Email</label>
                <span className="icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 13L2 6.76V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.76L12 13zm10-8H2l10 6 10-6z"/></svg>
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