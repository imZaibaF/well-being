import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Reservation = () => {
  

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img
            src="https://images.unsplash.com/photo-1499159058454-75067059248a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="res"
          />
        </div>
        <div className="banner">
         <div className="reservation_form_box">
      <h1>CHAT WITH US</h1>
      <p>
        <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '35px' }} />
        WhatsApp Us for free Mental Health Counselling
      </p>
      <div>
        <p>Call Us: +91 78675645</p>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
