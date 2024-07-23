import React from "react";

function ContactSection() {
    return (
        // <section>
        <section className='w-full bg-bgPrincipal'>
            <div className='flex mx-auto max-w-screen-xl lg:flex-nowrap flex-wrap items-start justify-evenly p-4 sm:p-6'>
                <div className='lg:w-1/2 w-full p-4 sm:py-10 sm:px-4 mt-6 sm:mt-12 max-w-xl sm:max-w-2xl md:max-w-3xl text-left'>
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
                    <button className='mt-4 bg-bgGreen text-white py-4 px-6 rounded'>
                        ¡Conócenos!
                    </button>
                </div>
                <div className='lg:w-1/2 w-full p-4 sm:p-10'>
                    <form className='space-y-4'>
                        <input
                            type='text'
                            placeholder='Nombre y Apellido *'
                            className='w-full p-4 border rounded'
                        />
                        <input
                            type='tel'
                            placeholder='Teléfono *'
                            className='w-full p-4 border rounded'
                        />
                        <input
                            type='email'
                            placeholder='Correo electrónico *'
                            className='w-full p-4 border rounded'
                        />
                        <input
                            type='text'
                            placeholder='Asunto *'
                            className='w-full p-4 border rounded'
                        />
                        <textarea
                            placeholder='Escribe tu mensaje...'
                            className='w-full p-4 border rounded h-32'></textarea>
                        <button
                            type='submit'
                            className='w-full bg-bgGreen text-white py-4 px-4 rounded'>
                            ¡Enviar Mensaje!
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
