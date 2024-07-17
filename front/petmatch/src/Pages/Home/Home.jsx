import React from "react";
import personDog from '../../images/personDog.png'

function Home() {
    return (
        <div className="App">
          <header className="bg-gray-100 p-6 relative">
            <nav className="flex justify-between items-center">
              <ul className="flex space-x-8 text-lg font-bold">
                <li><a href="#inicio" className="text-gray-800">Inicio</a></li>
                <li><a href="#match" className="text-gray-800">Match</a></li>
                <li><a href="#nosotros" className="text-gray-800">Nosotros</a></li>
                <li><a href="#testimonios" className="text-gray-800">Testimonios</a></li>
              </ul>
              <div className="flex items-center space-x-4">
                <input type="text" placeholder="Adopción, apadrinar" className="p-2 rounded-full border border-gray-300" />
                <button className="bg-green-600 text-white rounded-full px-4 py-2">¡Adopta un compañero!</button>
              </div>
            </nav>
            <div className="mt-12 max-w-3xl mx-32 text-left">
              <h1 className="text-6xl font-bold text-green-700">¡Swipe, Match Y Adopta Con PetMatch!</h1>
              <p className="mt-4 text-lg text-black font-semibold">Adopta adorables mascotas que te acompañarán fielmente, te apoyarán y alegrarán cada día. ¡Empieza hoy y dale a una mascota la oportunidad de ser parte de tu familia!</p>
              <div className="mt-6 space-x-4">
                <button className="bg-white text-green-700 border border-green-700 rounded-full px-6 py-2">¡Haz Match!</button>
                <button className="bg-green-700 text-white rounded-full px-6 py-2">Ver Catálogo</button>
              </div>
              <img src={personDog} className="absolute bottom-0 right-0 h-80 mr-6" alt="Person with dog" />
            </div>
          </header>
        </div>
      );
    }

export default Home;
