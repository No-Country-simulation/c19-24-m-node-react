import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/mainHeroSection/HeroSection";
import AboutSection from "../../Components/aboutSection/AboutSection";
import ContactSection from "../../Components/contactSection/ContactSection";


function Home() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer />
    </div>
  );
}

export default Home;
