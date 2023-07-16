import React from 'react';
import './Footer.css'; // Import the CSS file
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-info">
          <h3>Company Name</h3>
          <p>123 Main Street, City,<br/> Country</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@company.com</p>
        </div>
        <div className="company-info">
          <h3>Our services</h3>
          <p>Azure</p>
          <p>Big Data</p>
          <p>Data Science</p>
          <p>MS Teams</p>
        </div>
        <div className="company-info">
          <h3>POWER PLATFORM</h3>
          <p>Power BI</p>
          <p>PowerApps</p>
          <p>Power Automate</p>
          <p>Dynamic 365</p>
        </div>
        <div className="footer-links">
          <h3>Use Full Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/company" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/company" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/company" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/company" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom-main'>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Company. All rights reserved.</p>
          <p> ❤ with Love Dinesh Reddy</p>
        </div>
        <div className='footer-social-media'>
          <FaFacebook/>
          <FaTwitter/>
          <FaLinkedin/>
          <FaInstagram/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
