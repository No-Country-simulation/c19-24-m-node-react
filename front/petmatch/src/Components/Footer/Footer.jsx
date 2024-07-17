import Logo from "../../Assets/logo.svg";
import styles from "./Footer.module.css";

import Facebook from "../../Assets/facebook.svg";
import Twitter from "../../Assets/twitter.svg";
import Instagram from "../../Assets/instagram.svg";
import Youtube from "../../Assets/youtube.svg";

function Footer() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <footer className={`${styles.footer} md:px-8 px-4 md:pt-16 pt-16 pb-4`}>
            <section className='md:pb-0 pb-4'>
                <form
                    className={`${styles.footer__form} lg:flex-nowrap flex-wrap md:px-8 px-4 py-8 lg:pt-8 md:pt-5 md:rounded-2xl rounded-lg w-full flex items-center lg:justify-between justify-center`}
                    onSubmit={handleSubmit}>
                    <div className='xl:w-1/3 lg:w-2/5 w-full lg:pb-0 pb-5 lg:text-left text-center'>
                        <label
                            htmlFor='Subscribete'
                            className='xl:text-3xl lg:text-2xl md:text-2xl text-lg capitalize font-bold text-white'>
                            Regístrate ahora para no perderte Novedades
                        </label>
                    </div>
                    <div className='lg:w-2/3 w-full bg-white md:rounded-xl rounded-lg md:gap-x-5 gap-x-2 lg:p-3.5 pt-3.5 pb-3 px-2 flex items-center md:justify-between justify-center md:flex-nowrap flex-wrap'>
                        <input
                            id='Subscribete'
                            type='text'
                            placeholder='Ingresa tu correo electrónico'
                            className='outline-gray-400 outline-1 md:w-4/5 w-full lg:py-3 py-2 md:rounded-xl rounded-lg px-5'
                        />
                        <button
                            className='rounded-xl lg:py-3 py-2 md:px-10 px-5 text-white md:mt-0 mt-4'
                            style={{ backgroundColor: "#416A32" }}>
                            ¡Suscríbete!
                        </button>
                    </div>
                </form>
                <section className='w-full flex justify-center items-center pb-7 pt-8 px-3'>
                    <nav className='w-full flex justify-between items-center md:flex-nowrap flex-wrap'>
                        <ul className='md:w-1/2 w-full flex md:justify-start justify-center lg:gap-x-12 gap-x-6 items-center md:flex-nowrap flex-wrap gap-y-2'>
                            <li
                                className='font-bold lg:text-base text-sm cursor-pointer'
                                style={{ color: "var(--main-color)" }}>
                                Inicio
                            </li>
                            <li
                                className='font-bold lg:text-base text-sm cursor-pointer'
                                style={{ color: "var(--main-color)" }}>
                                Match
                            </li>
                            <li
                                className='font-bold lg:text-base text-sm cursor-pointer'
                                style={{ color: "var(--main-color)" }}>
                                Nosotros
                            </li>
                            <li
                                className='font-bold lg:text-base text-sm cursor-pointer'
                                style={{ color: "var(--main-color)" }}>
                                Testimonios
                            </li>
                            <li
                                className='font-bold lg:text-base text-sm cursor-pointer'
                                style={{ color: "var(--main-color)" }}>
                                Blog
                            </li>
                        </ul>
                        <ul className='md:w-1/3 w-full flex items-center md:justify-end justify-center lg:gap-x-12 gap-x-6 md:pt-0 pt-5'>
                            <li className='cursor-pointer' title='Facebook'>
                                <img src={Facebook} alt='Facebook Icon' />
                            </li>
                            <li className='cursor-pointer' title='Twitter (X)'>
                                <img src={Twitter} alt='Twitter (X) Icon' />
                            </li>
                            <li className='cursor-pointer' title='Instagram'>
                                <img src={Instagram} alt='Instagram Icon' />
                            </li>
                            <li className='cursor-pointer' title='Youtube'>
                                <img src={Youtube} alt='Youtube icon' />
                            </li>
                        </ul>
                    </nav>
                </section>
            </section>
            <hr className='w-full mx-auto mt-2' />
            <section className='flex md:justify-between justify-center items-center lg:py-8 py-4 md:flex-nowrap flex-wrap'>
                <p
                    className='pt-2 xl:text-base lg:text-sm text-xs'
                    style={{ color: "#667479" }}>
                    © 2024 PetMatch. Todos Los Derechos Reservados
                </p>
                <figure className='lg:block hidden'>
                    <img src={Logo} alt='PetMatch Logo' />
                </figure>
                <div className='flex justify-between items-center lg:gap-x-8 md:gap-x-2 gap-x-8 md:mt-0 mt-4'>
                    <p
                        className='pt-1 xl:text-base lg:text-sm text-xs'
                        style={{ color: "#667479" }}>
                        Términos y Condiciones
                    </p>
                    <p
                        className='pt-1 xl:text-base lg:text-sm text-xs'
                        style={{ color: "#667479" }}>
                        Políticas y Privacidad
                    </p>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
