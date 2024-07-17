import React from "react";
import personDog from "../../images/personDog.png";
import divide from "../../images/rectangle.svg";
import huella from "../../images/Huella.svg";
import perrito from "../../images/perrito.png";
import background from '../../images/background.png'

function Home() {
  return (
    <div className="App">
      <header className="bg-bgPrincipal p-10 ">
        <nav className="flex justify-between items-center">
          <ul className="flex space-x-8 text-lg font-bold">
            <li>
              <a href="#inicio" className="text-gray-800">
                Inicio
              </a>
            </li>
            <li>
              <a href="#match" className="text-gray-800">
                Match
              </a>
            </li>
            <li>
              <a href="#nosotros" className="text-gray-800">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#testimonios" className="text-gray-800">
                Testimonios
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Adopción, apadrinar"
              className="p-2 rounded-full border border-gray-300"
            />
            <button className="bg-green-600 text-white rounded-full px-4 py-2">
              ¡Adopta un compañero!
            </button>
          </div>
        </nav>
        <section className="mt-12 max-w-3xl mx-32 text-left">
          <h1 className="text-6xl font-bold text-green-700">
            ¡Swipe, Match Y Adopta Con PetMatch!
          </h1>
          <p className="mt-4 text-lg text-black font-semibold">
            Adopta adorables mascotas que te acompañarán fielmente, te apoyarán
            y alegrarán cada día. ¡Empieza hoy y dale a una mascota la
            oportunidad de ser parte de tu familia!
          </p>
          <div className="mt-6 space-x-4">
            <button className="bg-white text-green-700 border border-green-700 rounded-full px-6 py-2">
              ¡Haz Match!
            </button>
            <button className="bg-green-700 text-white rounded-full px-6 py-2">
              Ver Catálogo
            </button>
          </div>
        </section>
        <img
            src={background}
            className="h-96 pl-80"
            alt="Person with dog"
          />
      </header>
      <section className="bg-white">
        <img src={divide} className="w-full" alt="Section divided" />
        <img src={huella} alt="huella de perro" />
        <div className="flex items-center justify-between">
          <div className="flex-auto p-10 mt-12 max-w-3xl mx-32 text-left">
            <h1 className="text-6xl font-bold text-green-700">
              Acerca De Nosotros
            </h1>
            <p className="mt-4 text-lg text-black font-semibold">
              Somos un grupo de personas que nos enfocamos en salvar a nuestros
              amigos peludos, cuidarlos y alimentarlos. Estamos comprometidos en
              encontrarles un hogar para que puedan ser felices y tengan una
              mejor vida.
            </p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded">
              ¡Conócenos!
            </button>
          </div>
          <div className="flex-shrink-0 mr-32">
            <img src={perrito} className="h-80 mr-6" alt="perro front" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-start justify-between p-6 bg-bgPrincipal">
          <div className="flex-auto p-10 mt-12 max-w-3xl mx-32 text-left">
            <h1 className="text-6xl font-bold text-green-700">Contáctanos</h1>
            <p className="mt-4 text-gray-700">
              ¿Quieres adoptar una mascota o formar parte del equipo? Llena el
              siguiente formulario y nos pondremos en contacto para responderte
              a la brevedad.
              <br />
              Correo:{" "}
              <span className="font-bold">petmatchnocountry@gmail.com</span>
            </p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded">
              ¡Conócenos!
            </button>
          </div>
          <div className="flex-1 ml-6 mr-32">
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
                className="w-full bg-green-600 text-white py-4 px-4 rounded"
              >
                ¡Enviar Mensaje!
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
