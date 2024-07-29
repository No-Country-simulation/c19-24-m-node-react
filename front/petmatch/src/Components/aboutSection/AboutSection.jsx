import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import huella from "../../images/Huella.svg";
import perrito from "../../images/perrito.png";
// import { useNavigate } from "react-router-dom";

function AboutSection() {
    // const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        // <section className='bg-white bg-contain bg-no-repeat'>
        <section
            id='About-Us'
            className='bg-white relative py-24 mx-auto max-w-screen-xl flex justify-center items-center'>
            {/* <img src={huella} alt='huella de perro' /> */}
            <img
                className='absolute left-0 top-0 z-0'
                src={huella}
                alt='huella de perro'
            />
            {/* <div className="flex flex-col md:flex-row items-center justify-between mb-20"> */}
            {/* Te voy dejando arriba las clases que tu agregaste */}
            <div className='flex md:flex-nowrap flex-wrap w-full items-center justify-center z-10 relative px-6'>
                {/* <div className="flex-auto p-4 sm:p-10 mt-6 sm:mt-12 max-w-xl sm:max-w-2xl md:max-w-3xl mx-4 sm:mx-12 md:mx-24 lg:mx-32 text-left"> */}
                <div
                    className='md:w-1/2 w-full p-4 lg:pl-20 md:pl-10 pl-0 max-w-xl sm:max-w-2xl md:max-w-3xl text-left'
                    data-aos='fade-up'>
                    {/* <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bgGreen'> */}
                    <h1
                        className='text-3xl sm:text-4xl md:text-5xl font-bold text-bgGreen'
                        data-aos='fade-up'
                        data-aos-delay='100'>
                        Acerca De Nosotros
                    </h1>
                    {/* <p className='mt-4 text-base sm:text-lg md:text-xl lg:text-lg text-black font-semibold'> */}
                    <p
                        className='my-4 md:text-lg text-[#444444]'
                        data-aos='fade-up'
                        data-aos-delay='200'>
                        Somos un grupo de personas que nos enfocamos en salvar a
                        nuestros amigos peludos, cuidarlos y alimentarlos.
                        Estamos comprometidos en encontrarles un hogar para que
                        puedan ser felices y tengan una mejor vida.
                    </p>
                    {/* <button className='mt-4 bg-bgGreen text-white py-2 px-4 rounded'> */}
                    {/* <button className='bg-bgGreen text-white py-2 px-4 rounded'> */}
                    <button
                        // onClick={() => navigate("/About-us")}
                        className='bg-bgGreen text-white py-2 px-4 rounded'
                        data-aos='fade-up'
                        data-aos-delay='300'>
                        ¡Conócenos!
                    </button>
                </div>
                {/* <div className='flex-shrink-0 mx-4 sm:mx-12 md:mx-24 lg:mx-32 mt-6 md:mt-0'> */}
                <div
                    className='md:w-1/2 md:pr-8 lg:pr-0 w-4/5 md:pt-0 pt-10'
                    data-aos='fade-up'
                    data-aos-delay='100'>
                    <img
                        src={perrito}
                        className='max-w-full'
                        alt='perro front'
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
