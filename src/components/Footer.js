import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = ({ className = '' }) => {
  return (
    <div className={`footer-line ${className}`}>
      <p className="footer-label">© {new Date().getFullYear()} Mercuri Magic™ All Rights Reserved </p>

      <div className="footer-right">
        

        <a 
          href="https://asteroidbelt.space" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="brand-name"
        >
          Asterøid Belt™
        </a>
      </div>
    </div>
  );
};

export default Footer;
