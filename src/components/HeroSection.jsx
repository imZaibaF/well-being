import React from "react";
import Navbar from "./Navbar/Navbar";

const HeroSection = () => {
  return (
    <>
    
    <section className="heroSection" id="heroSection">
    <Navbar />

      <div className="container">
        <div className="banner">
            <div className="imageBox">
              <img
                src="https://plus.unsplash.com/premium_photo-1665990295265-cbc73657edcb?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="hero"
              />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="pledge">PLEDGE</h1>
                <h1>
                  I commit to act  In Support of mental health and well-being. 
                  <br />I would empower byacquiringknowledge about different realms of mental health and seek support to maintain my mental health and well-being.
                  <br />
                  I constantly strive to better the mental well-being of my clients and wuld always keep their personal information confidential
                </h1>
              </div>
              <br />
              <h1 className="blink" style={{ color: "purple" }}>
                Don't Suffer Alone we are here for your Emotional Support 24/7
              </h1>
            </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;
