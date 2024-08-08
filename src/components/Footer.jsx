import React from 'react';
import "../styles/Footer.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
      <p>
  Handcrafted with{' '}
  <span role="img" aria-label="hammer">🔨</span>{' '}
  
  by{' '}
  <a
    href="https://github.com/mukuls1107"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-link"
  >
    Mukul
  </a>
</p>

      </div>
    </footer>
  );
}

export default Footer;