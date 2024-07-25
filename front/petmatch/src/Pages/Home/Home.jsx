import React from "react";

import HeroSection from "../../Components/mainHeroSection/HeroSection";
import AboutSection from "../../Components/aboutSection/AboutSection";
import ContactSection from "../../Components/contactSection/ContactSection";


function Home() {
  return (
    <div className="absolute top-0">
      <HeroSection/>
      <AboutSection/>
      <ContactSection/>
    </div>
  );
}

export default Home;
