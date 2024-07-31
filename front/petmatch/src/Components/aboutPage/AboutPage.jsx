import React from "react";
import deskImage from "../../images/deskImage.png";
import dogs from "../../images/dogs.png";
import imagen2 from "../../images/imagen2aAP.png";
import imagen3 from "../../images/imagen3AP.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function AboutPage() {
    return (
        <div className='font-sans'>
            <Header />
            <section className='bg-white py-24 mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center'>
                <div className='text-left md:w-1/2 w-full p-4 lg:pl-0 md:pl-5  max-w-xl sm:max-w-2xl pl-5 md:max-w-full'>
                    <h1 className='text-5xl md:text-6xl font-bold leading-tight md:leading-tight mb-6'>
                        Tu guía completa para la adopción y cuidado de mascotas
                    </h1>
                    <p className='my-4 md:text-lg text-[#444444]'>
                        Somos una página que te ayuda a encontrar a tu compañero
                        de vida. Desde cómo preparar tu hogar para su llegada
                        hasta cómo cuidarlo y entrenarlo adecuadamente, estamos
                        aquí para ayudarte en cada paso del camino.
                    </p>
                </div>
                <div className='md:w-1/2 w-full flex justify-center'>
                    <img src={dogs} alt='Dogs' className='max-w-full h-auto' />
                </div>
            </section>

            <section className='bg-white py-10 mx-auto max-w-screen-xl flex flex-col lg:flex-row-reverse items-center'>
                <div className='text-left md:w-1/2 w-full px-20 lg:pr-20 md:pr-10 pr-0 max-w-xl sm:max-w-2xl md:max-w-3xl'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-bgGreen'>
                        ¿Cómo nació?
                    </h1>
                    <p className='my-4 md:text-lg text-[#444444]'>
                        PetMatch nació gracias a la alianza de personas con gran
                        voluntad y conocimiento técnico, y colaboraciones con
                        organizaciones comprometidas, para poder mostrar al
                        mundo a los peluditos que no tienen un hogar.
                    </p>
                </div>
                <div className='md:w-1/2 w-full flex justify-center sm: px-10'>
                    <img
                        src={deskImage}
                        alt='People working together'
                        className='max-w-full h-auto'
                    />
                </div>
            </section>

            <section className='bg-white py-10 mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center'>
                <div className='max-w-4xl mx-auto text-center lg:text-left md:w-1/2 w-full p-4 lg:pr-10'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-bgGreen'>
                        Nuestra Meta
                    </h1>
                    <p className='mt-4 text-[#444444]'>
                        Que cada perrito tenga un hogar. Sabemos que es una
                        tarea ardua, pero creemos firmemente que hay un
                        animalito especial para cada persona. Juntos, podemos
                        hacer la diferencia y ofrecerles una vida llena de amor
                        y cuidado.
                    </p>
                </div>
                <div className='md:w-1/2 w-full flex justify-center lg:justify-end pr-2'>
                    <img
                        src={imagen2}
                        alt='Dogs together'
                        className='max-w-full h-auto sm: px-10'
                    />
                </div>
            </section>

            <section>
                <div className=' flex justify-center py-10 md:px-12'>
                    <img src={imagen3} alt='Bottom' />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default AboutPage;
