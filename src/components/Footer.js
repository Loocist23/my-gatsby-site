import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container text-center">
        <span>© 2024 Eat Good</span>
        <br />
        <span>Contact: <a href="mailto:contact@eatgood.com" className="text-white">contact@eatgood.com</a></span>
      </div>
    </footer>
  );
};

export default Footer;
