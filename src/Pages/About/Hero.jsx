
import "./hero.css"
import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from "../../components/Navbar/Navbar";




const Hero = () => {
  return (
    <div id="home" className="hero-container" >
         <Navbar />

     

      {/* <img className="hero-image bounce-in-top" src="https://images.unsplash.com/photo-1609601997352-a8f588e2e4e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero" /> */}

      <section id="clients" className={` mt-20   flex-col  `}>
        <div className=" flex justify-center  md:flex-col flex-col relative z-[1]">
          
        </div>
        
      </section>
    </div>
  );
};

export default Hero;
