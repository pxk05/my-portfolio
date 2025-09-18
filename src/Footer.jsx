import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* <p className="connect-text">Let's Connect</p> */}
        <div className="social-links">
          <a href="mailto:pratikshyakafle25@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope /> pratikshyakafle25@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/pratikshyakafle/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> linkedin.com/in/pratikshyakafle/
          </a>
        </div>
      </div>
      <hr className="footer-divider" />
      <p className="copyright-text">&copy; 2025 Pratikshya Kafle. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;