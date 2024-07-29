import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

function ContactSection() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        // <section>
        <section className='w-full bg-bgPrincipal'>
            <div className='flex mx-auto max-w-screen-xl lg:flex-nowrap flex-wrap items-start justify-evenly p-4 sm:p-6'>
                <div
                    className='lg:w-1/2 w-full p-4 sm:py-10 sm:px-4 mt-6 sm:mt-12 max-w-xl sm:max-w-2xl md:max-w-3xl text-left'
                    data-aos='fade-up'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bgGreen md:text-left text-center w-full'>
                        Contáctanos
                    </h1>
                    <p className='mt-4 text-base sm:text-lg md:text-xl lg:text-lg text-gray-700 flex flex-col gap-y-4'>
                        ¿Quieres adoptar una mascota o formar parte del equipo?
                        Llena el siguiente formulario y nos pondremos en
                        contacto para responderte a la brevedad.
                        <br />
                        <small>
                            Correo:
                            <strong> petmatchnocountry@gmail.com </strong>
                        </small>
                    </p>
                    <button
                        onClick={() => navigate("About-Us")}
                        className='mt-4 bg-bgGreen text-white py-4 px-6 rounded'
                        data-aos='fade-up'
                        data-aos-delay='200'>
                        ¡Conócenos!
                    </button>
                </div>
                <div className='lg:w-1/2 w-full p-4 sm:p-10' data-aos='fade-up'>
                    <form className='space-y-4'>
                        <input
                            type='text'
                            placeholder='Nombre y Apellido *'
                            className='w-full p-4 border rounded'
                            data-aos='fade-up'
                            data-aos-delay='100'
                        />
                        <input
                            type='tel'
                            placeholder='Teléfono *'
                            className='w-full p-4 border rounded'
                            data-aos='fade-up'
                            data-aos-delay='200'
                        />
                        <input
                            type='email'
                            placeholder='Correo electrónico *'
                            className='w-full p-4 border rounded'
                            data-aos='fade-up'
                            data-aos-delay='300'
                        />
                        <input
                            type='text'
                            placeholder='Asunto *'
                            className='w-full p-4 border rounded'
                            data-aos='fade-up'
                            data-aos-delay='400'
                        />
                        <textarea
                            placeholder='Escribe tu mensaje...'
                            className='w-full p-4 border rounded h-32'
                            data-aos='fade-up'
                            data-aos-delay='500'></textarea>
                        <button
                            type='submit'
                            className='w-full bg-bgGreen text-white py-4 px-4 rounded'
                            data-aos='fade-up'
                            data-aos-delay='600'>
                            ¡Enviar Mensaje!
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
