import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import Footer from "../../components/Footer";
import Hero from "./Hero";

const Aboutus = () => {
  return (
    <>
    
     <Hero />
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
            </div>
            <p className="mid">
              A learning portal that emphasizes inner change through
              conciousness expansion via self-development and improving cultural
              intelligence is Inner World Counselling for mental well-being. A
              Counselling service is a professional support service that
              provides emotional and mental health support to individuals who
              are facing personal challenges or difficulties. So our tagline
              says "YOUR MENTAL WELL-BEING IS OUR PRIORITY". We are established
              in the year 2012 and providing all types of counselling services
              like, Career Counselling, Couple Counselling, Counselling for
              mental well-being, Geriatric Counselling and Adolescents
              Counselling.
            </p>
            <br />
            <div className="top">
              <h1 className="heading">MISSION</h1>
            </div>
            <p className="mid">
              Our Mission provide Mental Health services accross the globe,
              develop strong footpronts by providing mental health education,
              spread mental health awareness accross the age group also to train
              mental health resources with the necessary skills and make them
              industry prepared. neede for mental health is exponentially
              increasing ans we want to be available to support the emotional
              needs.
            </p>
          </div>
          <div className="banner">
            <img
              src="https://images.unsplash.com/photo-1517346665566-17b938c7f3ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHN5Y2hvbG9naXN0fGVufDB8fDB8fHww"
              alt="about"
            />
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="container">
        <div className="banner">
            <img
              src="../Mamatha.jpeg"
              alt="about"
            />
          </div>
          <div className="banner">
            
            <div className="top">
              <h1 className="heading">VISION</h1>
            </div>
            
            <p className="mid">
              A learning portal that emphasizes inner change through
              conciousness expansion via self-development and improving cultural
              intelligence is Inner World Counselling for mental well-being. A
              Counselling service is a professional support service that
              provides emotional and mental health support to individuals who
              are facing personal challenges or difficulties. So our tagline
              says "YOUR MENTAL WELL-BEING IS OUR PRIORITY". We are established
              in the year 2012 and providing all types of counselling services
              like, Career Counselling, Couple Counselling, Counselling for
              mental well-being, Geriatric Counselling and Adolescents
              Counselling.
            </p>
            <br />
            
            <div className="top">
              <h1 className="heading">ABOUT MAMATHA</h1>
            </div>
            <p className="mid">
              Mamath's Journey into Psychology stemmed from a profound realization during her corporate tenure. Observing the impersonal medical care during her father-inlaw's hospital visits sparked a desire to bridge emotional support with conventional treatment. This prompted her to pursue counselling and psychology studies.
              Basically Dr. Mamatha Satish is a electical engineer, leveraging her engineering background and diverse experiences, Mamatha developed an integrated approach. She had done her M.Sc in Clinical psychology from Jain Deemed to be University.
              Beyond her private practise, Mamatha actively engages in community initiatives promoting mental health awareness and suicide preventions. She envisions expanding her outreach through workshops, seminars and online resources, aiming to create a supporting ecosystem for individuals seeking guidance and support.
              Mamatha's journey underscores the transformative impact of compassion, intuition and interdisciplinary knowledge. Through her genuine care and steadfast commitment, she continues to inspire and uplift countless individuals, guiding them towards self-discovery and fulfillment
            </p>
          </div>
          
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Aboutus;
