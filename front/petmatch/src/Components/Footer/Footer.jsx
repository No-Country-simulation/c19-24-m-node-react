import Logo from "../../Assets/logo.svg";
import styles from "./Footer.module.css";

function Footer() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <footer className={`${styles.footer} px-8 pt-16 pb-4`}>
            <section>
                <form
                    className={`${styles.footer__form} lg:flex-nowrap flex-wrap px-8 py-8 lg:pt-8 md:pt-5 rounded-2xl w-full flex items-center lg:justify-between justify-center`}
                    onSubmit={handleSubmit}>
                    <div className='xl:w-1/3 lg:w-2/5 w-full lg:pb-0 pb-5 lg:text-left text-center'>
                        <label
                            htmlFor='Subscribete'
                            className='xl:text-3xl lg:text-2xl md:text-2xl text-lg capitalize font-bold text-white'>
                            Regístrate ahora para no perderte Novedades
                        </label>
                    </div>
                    <div className='lg:w-2/3 w-full bg-white rounded-xl gap-x-5 lg:p-3.5 p-2 flex items-center justify-between'>
                        <input
                            id='Subscribete'
                            type='text'
                            placeholder='Ingresa tu correo electrónico'
                            className='outline-gray-400 outline-1 w-4/5 lg:py-3 py-2 rounded-xl px-5'
                        />
                        <button
                            className='rounded-xl lg:py-3 py-2 px-10 text-white'
                            style={{ backgroundColor: "#416A32" }}>
                            ¡Suscríbete!
                        </button>
                    </div>
                </form>
                <section className='w-full flex justify-center items-center pb-7 pt-8 px-3'>
                    <nav className='w-full flex justify-between items-center'>
                        <ul className='w-1/2 flex justify-start lg:gap-x-12 md:gap-x-6 items-center'>
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
                        <ul className='w-1/3 flex items-center justify-end lg:gap-x-12 md:gap-x-6'>
                            <li className='cursor-pointer' title='Facebook'>
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <g clip-path='url(#clip0_250_160)'>
                                        <path
                                            d='M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z'
                                            fill='#416A32'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_250_160'>
                                            <rect
                                                width='24'
                                                height='24'
                                                fill='white'
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                            <li className='cursor-pointer' title='Twitter (X)'>
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <g clip-path='url(#clip0_250_162)'>
                                        <path
                                            d='M7.55016 21.75C16.6045 21.75 21.5583 14.2468 21.5583 7.74192C21.5583 7.53098 21.5536 7.31536 21.5442 7.10442C22.5079 6.40752 23.3395 5.54432 24 4.55536C23.1025 4.95466 22.1496 5.21544 21.1739 5.3288C22.2013 4.71297 22.9705 3.74553 23.3391 2.60583C22.3726 3.17862 21.3156 3.58267 20.2134 3.80067C19.4708 3.01162 18.489 2.48918 17.4197 2.31411C16.3504 2.13905 15.2532 2.32111 14.2977 2.83216C13.3423 3.3432 12.5818 4.15477 12.1338 5.14137C11.6859 6.12798 11.5754 7.23468 11.8195 8.29036C9.86249 8.19215 7.94794 7.68377 6.19998 6.79816C4.45203 5.91255 2.90969 4.6695 1.67297 3.14958C1.0444 4.2333 0.852057 5.51571 1.13503 6.73615C1.418 7.9566 2.15506 9.02351 3.19641 9.72005C2.41463 9.69523 1.64998 9.48474 0.965625 9.10598V9.16692C0.964925 10.3042 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1932 3.43198 14.2221 2.69484 14.0794C3.00945 15.0575 3.62157 15.913 4.44577 16.5264C5.26997 17.1398 6.26512 17.4807 7.29234 17.5013C5.54842 18.8712 3.39417 19.6142 1.17656 19.6107C0.783287 19.6101 0.390399 19.586 0 19.5385C2.25286 20.9838 4.87353 21.7514 7.55016 21.75Z'
                                            fill='#416A32'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_250_162'>
                                            <rect
                                                width='24'
                                                height='24'
                                                fill='white'
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                            <li className='cursor-pointer' title='Instagram'>
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <g clip-path='url(#clip0_250_164)'>
                                        <path
                                            d='M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z'
                                            fill='#416A32'
                                        />
                                        <path
                                            d='M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z'
                                            fill='#416A32'
                                        />
                                        <path
                                            d='M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z'
                                            fill='#416A32'
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id='clip0_250_164'>
                                            <rect
                                                width='24'
                                                height='24'
                                                fill='white'
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </li>
                            <li className='cursor-pointer' title='Youtube'>
                                <svg
                                    width='24'
                                    height='24'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M23.7609 7.20005C23.7609 7.20005 23.5266 5.54536 22.8047 4.8188C21.8906 3.86255 20.8688 3.85786 20.4 3.80161C17.0438 3.55786 12.0047 3.55786 12.0047 3.55786H11.9953C11.9953 3.55786 6.95625 3.55786 3.6 3.80161C3.13125 3.85786 2.10938 3.86255 1.19531 4.8188C0.473438 5.54536 0.24375 7.20005 0.24375 7.20005C0.24375 7.20005 0 9.14536 0 11.086V12.9047C0 14.8454 0.239062 16.7907 0.239062 16.7907C0.239062 16.7907 0.473437 18.4454 1.19062 19.1719C2.10469 20.1282 3.30469 20.0954 3.83906 20.1985C5.76094 20.3813 12 20.4375 12 20.4375C12 20.4375 17.0438 20.4282 20.4 20.1891C20.8688 20.1329 21.8906 20.1282 22.8047 19.1719C23.5266 18.4454 23.7609 16.7907 23.7609 16.7907C23.7609 16.7907 24 14.85 24 12.9047V11.086C24 9.14536 23.7609 7.20005 23.7609 7.20005ZM9.52031 15.1125V8.36724L16.0031 11.7516L9.52031 15.1125Z'
                                        fill='#416A32'
                                    />
                                </svg>
                            </li>
                        </ul>
                    </nav>
                </section>
            </section>
            <hr className='w-full mx-auto mt-2' />
            <section className='flex justify-between items-center lg:py-8 py-4'>
                <p
                    className='pt-2 xl:text-base lg:text-sm text-xs'
                    style={{ color: "#667479" }}>
                    © 2024 PetMatch. Todos Los Derechos Reservados
                </p>
                <figure className='lg:block hidden'>
                    <img src={Logo} alt='PetMatch Logo' />
                </figure>
                <div className='flex justify-between items-center lg:gap-x-8 gap-x-2'>
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
