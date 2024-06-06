import React from "react";
import { data } from "../../restApi.json";
import Footer from "../../components/Footer";
import "./gallery.css";
import Hero from "../About/Hero";
const Gallery = () => {
  return (
    <>
      <Hero />
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">OUR GALLERY</h1>
            <p>
             Sharing a glimps of our Organisation.
            </p>
          </div>
          <div className="dishes_container">
            {data[0].gallery.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
