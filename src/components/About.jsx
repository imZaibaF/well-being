import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Mental Health is our main priority.</p>
            </div>
            <p className="mid">
            Inner World Counselling, established in 2012, is a learning portal focused on inner transformation through consciousness expansion, self-development, and enhancing cultural intelligence. As a professional support service, we provide emotional and mental health assistance to individuals confronting personal challenges or difficulties. Our comprehensive counselling services include Career Counselling, Couple Counselling, Counselling for Mental Well-Being, Geriatric Counselling, and Adolescent Counselling. Our tagline, "YOUR MENTAL WELL-BEING IS OUR PRIORITY," underscores our commitment to your mental health.
            </p>
            <Link to={"/"}>
              Read More{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img
              src="https://media.istockphoto.com/id/1134255783/photo/handsome-hispanic-man-drinking-a-fresh-glass-of-water-with-surprise-face-pointing-finger-to.webp?b=1&s=170667a&w=0&k=20&c=vddSIk_Kw8zh9Nw31XlKlUbvByD9DkQFfMm8cfcdywQ="
              alt="about"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
