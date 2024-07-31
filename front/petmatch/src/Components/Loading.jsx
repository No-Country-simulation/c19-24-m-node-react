import Logo from "../Assets/Logos/logo.svg";

function Loader() {
    return (
        <section className='fixed top-0 h-screen w-screen bg-white flex flex-col items-center justify-center z-30'>
            <figure>
                <img src={Logo} alt='PetMatch Logo' loading='lazy' />
                <figcaption className='text-[#2C7B10] mt-3 font-semibold'>
                    ¡Swipe, Match y Adopta con PetMatch!
                </figcaption>
            </figure>
            <span className='absolute bottom-4 text-[#2C7B10] text-xs'>
                Versión 0.1.101.1
            </span>
        </section>
    );
}

export default Loader;
