import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Little Lemon</p>
        <div className="footer-links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="mailto:info@littlelemon.com">Email</a>
        </div>
        <form className="newsletter">
          <input type="email" placeholder="Subscribe to newsletter" aria-label="Email for newsletter" />
          <button type="submit">Join</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
