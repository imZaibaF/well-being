import React from "react";
import Footer from "../../components/Footer";
import "./contact.css";
import Hero from "../About/Hero";

const Contact = () => {
  return (
    <>
      <Hero />
      <section className="contact" id="contact">
      <div className="banner">
            <img
              src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnRhY3QlMjB1c3xlbnwwfHwwfHx8MA%3D%3D"
              alt=" Image"
              className="banner-image"
            />
          </div>
        <div className="container">
          
          <div className="contact-form">
            <div className="reservation_form_box">
              <h1>Share your Experience</h1>
              <p>We value your feedback! Please share your experience with us.</p>
              <div>
                <a href="feedback-link" className="feedback-link">Provide us your Feedback</a>
              </div>
            </div>
            <div className="social-media">
              <h2>Connect with us online:</h2>
              <div className="social-icons">
                <a className="social-icon social-icon--instagram" href="https://www.instagram.com/inner.worldcounselling?igsh=OHlpcXV4cHU1OWl2">
                  Instagram
                  <div className="tooltip">Instagram</div>
                </a>
                <a className="social-icon social-icon--facebook" href="https://www.facebook.com/share/TZq4frY24vL2aYps/?mibextid=qi2Omg">
                  Facebook
                  <div className="tooltip">Facebook</div>
                </a>
              </div>
            </div>
            <div className="contact-details">
              <h2>Contact Information:</h2>
              <p>Address: [Your Address]</p>
              <p>Phone: [Your Phone Number]</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
