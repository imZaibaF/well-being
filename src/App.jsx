import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Success from "./Pages/Success/Success";
import Aboutus from "./Pages/About/Aboutus";
import Teams from "./Pages/Team/Teams";
import "./App.css";
import Gallery from "./Pages/Gallery/Gallery";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
