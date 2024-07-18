import React from "react";
import huella from "../../images/Huella.svg";
import perrito from "../../images/perrito.png";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/mainHeroSection/HeroSection";

function Home() {
  return (
    <div className="App">
      <main className="bg-bgPrincipal">
        <Header/>
        <HeroSection/>
      </main>
      <section className="bg-white bg-contain bg-no-repeat">
        <img src={huella} alt="huella de perro" />
        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          <div className="flex-auto p-4 sm:p-10 mt-6 sm:mt-12 max-w-xl sm:max-w-2xl md:max-w-3xl mx-4 sm:mx-12 md:mx-24 lg:mx-32 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bgGreen">
              Acerca De Nosotros
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-lg text-black font-semibold">
              Somos un grupo de personas que nos enfocamos en salvar a nuestros
              amigos peludos, cuidarlos y alimentarlos. Estamos comprometidos en
              encontrarles un hogar para que puedan ser felices y tengan una
              mejor vida.
            </p>
            <button className="mt-4 bg-bgGreen text-white py-2 px-4 rounded">
              ¡Conócenos!
            </button>
          </div>
          <div className="flex-shrink-0 mx-4 sm:mx-12 md:mx-24 lg:mx-32 mt-6 md:mt-0">
            <img src={perrito} className="max-w-full" alt="perro front" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-start justify-between p-4 sm:p-6 bg-bgPrincipal">
          <div className="flex-auto p-4 sm:p-10 mt-6 sm:mt-12 max-w-xl sm:max-w-2xl md:max-w-3xl mx-4 sm:mx-12 md:mx-24 lg:mx-32 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bgGreen">
              Contáctanos
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-lg text-gray-700">
              ¿Quieres adoptar una mascota o formar parte del equipo? Llena el
              siguiente formulario y nos pondremos en contacto para responderte
              a la brevedad.
              <br />
              Correo:{" "}
              <span className="font-bold">petmatchnocountry@gmail.com</span>
            </p>
            <button className="mt-4 bg-bgGreen text-white py-2 px-4 rounded">
              ¡Conócenos!
            </button>
          </div>
          <div className="flex-1 p-4 sm:p-10 mx-4 md:mx-10 lg:mx-16">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre y Apellido *"
                className="w-full p-4 border rounded"
              />
              <input
                type="tel"
                placeholder="Teléfono *"
                className="w-full p-4 border rounded"
              />
              <input
                type="email"
                placeholder="Correo electrónico *"
                className="w-full p-4 border rounded"
              />
              <input
                type="text"
                placeholder="Asunto *"
                className="w-full p-4 border rounded"
              />
              <textarea
                placeholder="Escribe tu mensaje..."
                className="w-full p-4 border rounded h-32"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-bgGreen text-white py-4 px-4 rounded"
              >
                ¡Enviar Mensaje!
              </button>
            </form>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
