import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import './WhatsAppButton.css'; // Import the CSS file for the component

const WhatsAppButton = () => {
  return (
    <a className="whats-app" href="https://api.whatsapp.com/send?phone=91%207022502446" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faWhatsapp} className="my-float" />
    </a>
  );
};

export default WhatsAppButton;
