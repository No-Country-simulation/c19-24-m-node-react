import React from "react";
import divide from "../../images/rectangle.svg";
import huella from "../../images/Huella.svg";
import perrito from "../../images/perrito.png";
import fondo from "../../images/fondo.png";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div className="App">
      <main className="bg-bgPrincipal">
        <header
          className="bg-contain bg-no-repeat bg-center min-h-screen flex flex-col justify-between"
          style={{ backgroundImage: `url(${fondo})` }}
        >
          <section className="mt-52 max-w-3xl mx-32 text-left">
            <h1 className="text-6xl font-bold text-bgGreen">
              ¡Swipe, Match Y Adopta Con PetMatch!
            </h1>
            <p className="mt-4 text-lg text-black font-semibold">
              Adopta adorables mascotas que te acompañarán fielmente, te
              apoyarán y alegrarán cada día. ¡Empieza hoy y dale a una mascota
              la oportunidad de ser parte de tu familia!
            </p>
            <div className="mt-6 space-x-4">
              <button className="bg-white text-bgGreen border border-bgGreen rounded-full px-6 py-2">
                ¡Haz Match!
              </button>
              <button className="bg-bgGreen text-white rounded-full px-6 py-2">
                Ver Catálogo
              </button>
            </div>
          </section>
          <div className="w-full">
            <img src={divide} className="w-full" alt="Section divided" />
          </div>
        </header>
      </main>
      <section className="bg-white bg-contain bg-no-repeat">
        <img src={huella} alt="huella de perro" />
        <div className="flex items-center justify-between mb-20">
          <div className="flex-auto p-10 mt-12 max-w-3xl mx-32 text-left">
            <h1 className="text-6xl font-bold text-bgGreen">
              Acerca De Nosotros
            </h1>
            <p className="mt-4 text-lg text-black font-semibold">
              Somos un grupo de personas que nos enfocamos en salvar a nuestros
              amigos peludos, cuidarlos y alimentarlos. Estamos comprometidos en
              encontrarles un hogar para que puedan ser felices y tengan una
              mejor vida.
            </p>
            <button className="mt-4 bg-bgGreen text-white py-2 px-4 rounded">
              ¡Conócenos!
            </button>
          </div>
          <div className="flex-shrink-0 mr-32">
            <img src={perrito} className=" mr-6" alt="perro front" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-start justify-between p-6 bg-bgPrincipal">
          <div className="flex-auto p-10 mt-12 max-w-3xl mx-32 text-left">
            <h1 className="text-6xl font-bold text-bgGreen">Contáctanos</h1>
            <p className="mt-4 text-gray-700">
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
