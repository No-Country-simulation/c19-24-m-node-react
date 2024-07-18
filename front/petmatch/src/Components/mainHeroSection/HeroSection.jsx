import React from "react";
import fondo from "../../images/fondo.png"
import divide from "../../images/rectangle.svg";

function HeroSection (){
    return(
        <header
          className="bg-contain bg-no-repeat bg-center min-h-screen flex flex-col justify-between"
          style={{ backgroundImage: `url(${fondo})` }}>
          <section className="mt-20 sm:mt-32 md:mt-40 lg:mt-52 max-w-xl sm:max-w-2xl md:max-w-3xl mx-4 sm:mx-12 md:mx-24 lg:mx-32 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bgGreen">
              ¡Swipe, Match Y Adopta Con PetMatch!
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-lg text-black font-semibold">
              Adopta adorables mascotas que te acompañarán fielmente, te
              apoyarán y alegrarán cada día. ¡Empieza hoy y dale a una mascota
              la oportunidad de ser parte de tu familia!
            </p>
            <div className="mt-6 space-x-2 sm:space-x-4">
              <button className="bg-white text-bgGreen border border-bgGreen rounded-full px-4 sm:px-6 py-2">
                ¡Haz Match!
              </button>
              <button className="bg-bgGreen text-white rounded-full px-4 sm:px-6 py-2">
                Ver Catálogo
              </button>
            </div>
          </section>
          <div className="w-full">
            <img src={divide} className="w-full" alt="Section divided" />
          </div>
        </header>
    )
}

export default HeroSection;