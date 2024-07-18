import React from "react"
import huella from "../../images/Huella.svg";
import perrito from "../../images/perrito.png";

function AboutSection (){
    return(
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
    )
}

export default AboutSection;