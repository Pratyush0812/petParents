import React from "react";
import Navbar1 from "./Navbar1";
import Hero from "./Hero";
import PetCards from "./PetCards";
import PetListing from "./PetListing";
import Fade from "react-reveal/Fade"
import '../styles/App.css';
import Footer1 from "./Footer1";
function Home() {
  return (
      <div>
          <Fade top distance="10%" duration="1500"><Navbar1 /></Fade>
            <Hero />
            <Fade top distance="10%" duration="1500">
            <PetCards />
            <Footer1 /></Fade>
          

      </div>

  );
}

export default Home;
