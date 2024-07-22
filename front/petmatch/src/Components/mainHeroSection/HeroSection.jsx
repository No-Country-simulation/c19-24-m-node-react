import React from "react";
import dogPerson from "../../images/personDog.png";
import { useNavigate } from "react-router-dom";

function HeroSection() {
    const navigate = useNavigate();
    return (
        <main className='bg-bgPrincipal'>
            <section
                // className='bg-contain bg-no-repeat bg-center min-h-screen flex flex-col justify-between'
                // Te dejo arriba las clases originales del componente, asi sabes que cambie
                className='bg-contain bg-no-repeat bg-bottom flex md:flex-nowrap flex-wrap justify-center items-center pt-16 max-w-screen-xl mx-auto'
                // style={{ backgroundImage: `url(${fondo})` }}
            >
                {/* <section className='mt-20 sm:mt-32 md:mt-40 lg:mt-52 max-w-xl sm:max-w-2xl md:max-w-3xl mx-4 sm:mx-12 md:mx-24 lg:mx-32 text-left'> */}
                {/* Lo mismo, aqui te dejo tus clases originales */}
                <section className='max-w-xl text-left lg:w-1/2 md:w-3/5 w-full px-4'>
                    <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-bgGreen'>
                        ¡Swipe, Match Y Adopta Con PetMatch!
                    </h1>
                    <p className='mt-4 text-base sm:text-lg md:text-xl lg:text-lg text-black font-semibold'>
                        Adopta adorables mascotas que te acompañarán fielmente,
                        te apoyarán y alegrarán cada día. ¡Empieza hoy y dale a
                        una mascota la oportunidad de ser parte de tu familia!
                    </p>
                    <div className='mt-6 space-x-2 sm:space-x-4'>
                        <button
                            onClick={() => navigate("/Match")}
                            className='bg-white text-bgGreen border border-bgGreen rounded-full px-4 sm:px-6 py-2'>
                            ¡Haz Match!
                        </button>
                        <button
                            onClick={() => navigate("/Catalogue")}
                            className='bg-bgGreen text-white rounded-full px-4 sm:px-6 py-2'>
                            Ver Catálogo
                        </button>
                    </div>
                </section>
                <figure className='md:w-1/2 w-full md:pt-0 pt-10'>
                    <img src={dogPerson} alt='A person holding a dog' />
                </figure>
            </section>
            <hr className='w-full border-b-[104px] border-[#ABC2A3]' />
        </main>
    );
}

export default HeroSection;
