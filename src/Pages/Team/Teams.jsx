import React from "react";
import "./teams.css";
import Footer from "../../components/Footer";
import Hero from "../About/Hero";

const Teams = () => {
  return (
    <>
      <Hero />
      <div>
        <div className="panel">
          <div className="pricing-plan">
            <img src="../Mamatha.jpeg" alt="Mamatha" className="pricing-img" />
            <h2 className="pricing-header">Mamatha</h2>
            <ul className="pricing-features">
              <li className="pricing-features-item">
                MSc. Counselling & Psychotherapy and
                <p>MSc. Clinical Psychology</p>
              </li>
              <li className="pricing-features-item">
                Graceful, Compassion and guidance
              </li>
            </ul>
            <a href="Mamatha.jsx" className="pricing-button">
              Read More
            </a>
          </div>

          <div className="pricing-plan">
            <img src="../Varun.jpeg" alt="Vinod Raj V" className="pricing-img" />
            <h2 className="pricing-header">Vinod Raj V</h2>
            <ul className="pricing-features">
              <li className="pricing-features-item">Never sleeps</li>
              <li className="pricing-features-item">
                Multiple workers for more powerful apps
              </li>
            </ul>
            <a href="#/" className="pricing-button is-featured">
              Contact us
            </a>
          </div>

          <div className="pricing-plan">
            <img src="../Kshiti.jpeg" alt="KSHITI" className="pricing-img" />
            <h2 className="pricing-header">KSHITI</h2>
            <ul className="pricing-features">
              <li className="pricing-features-item">MS. CLINICAL PSYCHOLOGY</li>
              <li className="pricing-features-item">
                OBSERVANT, gregarious, <p>strong desire to help people</p>
              </li>
            </ul>
            <a href="#/" className="pricing-button">
              Contact us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Teams;
