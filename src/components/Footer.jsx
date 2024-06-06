import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
              Established in 2012, Inner World Counselling is dedicated to fostering inner transformation and consciousness expansion through self-development and cultural intelligence. We offer comprehensive emotional and mental health support, including Career, Couple, Mental Well-Being, Geriatric, and Adolescent Counselling. Your mental well-being is our priority.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>SERVICES</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">Counselling</a>
                </li>
                <li>
                  <a href="#">
                    Therapies
                  </a>
                </li>
                <li>
                  <a href="#">
                  Psychometric Assessments
                  </a>
                </li>
                <li>
                  <a href="#">
                    Internship 
                  </a>
                </li>
                <li>
                  <a href="#">Family Counselling</a>
                </li>
                <li>
                  <a href="#">
                    Marital Counselling
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2012 All Rights Reserved by
                <a href="#"> The Inner World Counselling</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="https://www.facebook.com/share/TZq4frY24vL2aYps/?mibextid=qi2Omg">
                    fb
                  </a>
                </li>
                <li>
                  <a className="instagram" href="https://www.instagram.com/inner.worldcounselling?igsh=OHlpcXV4cHU1OWl2">
                    insta
                  </a>
                </li>
                
                
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
