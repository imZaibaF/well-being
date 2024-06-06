import React from "react";
import { data } from "../../restApi.json";
import './Testimonials.css';

const Testimonials = () => {
  return (
    <>
      <section className="testimonials" id="testimonials">
      <div className="heading_section">
            <h1 className="heading">TESTIMONIALS</h1>
            <p>
              What does our clients say about us?
            </p>
          </div>
        <div className="container">
          
          <div className="testimonials_container">
            {data[0].testimonials.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.userName} className="testimonial-image" />
                <div className="testimonial-content">
                  <h3 className="testimonial-username">{element.userName}</h3>
                  <div className="testimonial-rating">Rating: {element.rating}</div>
                  <p className="testimonial-description">{element.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
