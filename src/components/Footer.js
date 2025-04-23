// Footer.js
import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="footer">
      <p>&copy; {currentYear} | All Rights Reserved</p>
    </footer>
  );
}

export default Footer;