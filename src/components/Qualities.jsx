import React from "react";
import { data } from "../restApi.json";
const Qualities = () => {
  return (
    <>
      <section className="qualities" id="qualities">
        <div className="container">
          <h1> How We Can Help-</h1>
          <h3>
            We provide free mental health support and psychological counselling
            to all those who need it. You can call or WhatsApp from anywhere in
            India at any hour of the day or night.
          </h3>
          {data[0].ourQualities.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <p className="title">{element.title}</p>
                <p className="description">{element.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Qualities;
