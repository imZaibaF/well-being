import React from "react";
import HeroSection from "../../components/HeroSection";
import About from "../../components/About";
import WhoAreWe from "../../components/WhoAreWe";
import Team from "../../components/Team";
import Reservation from "../../components/Reservation";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      
      <WhoAreWe />
      <Team />
      <Testimonials />
      <Reservation />
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Home;
