import HeroImage from "../../Assets/matchBannerImage.webp";
import PawIcon from "../../Assets/paw.svg";

import styles from "./MatchBanner.module.css";

function MatchBanner() {
    return (
        <section className='relative overflow-hidden py-16'>
            <figure className={`${styles.matchBanner__rectangle_icon}`}>
                <svg
                    width='704'
                    height='544'
                    viewBox='0 0 904 544'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <rect
                        width='782.292'
                        height='635'
                        rx='99'
                        transform='matrix(-0.904604 0.426252 0.426252 0.904604 665.665 -222)'
                        fill='#BAD6AF'
                    />
                </svg>
            </figure>
            <figure className={`${styles.matchBanner__rectangle_icon}`}>
                <svg
                    width='701'
                    height='425'
                    viewBox='0 0 701 325'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <rect
                        opacity='0.3'
                        width='787.54'
                        height='787.54'
                        rx='99'
                        transform='matrix(-0.880881 0.473338 0.473338 0.880881 659.507 -34.2795)'
                        fill='url(#paint0_linear_146_1715)'
                    />
                    <defs>
                        <linearGradient
                            id='paint0_linear_146_1715'
                            x1='0'
                            y1='0'
                            x2='958.452'
                            y2='218.934'
                            gradientUnits='userSpaceOnUse'>
                            <stop offset='0.0616933' stop-color='#FCEED5' />
                            <stop offset='0.751415' stop-color='#FCEED5' />
                            <stop offset='1' stop-color='#FFE7BA' />
                        </linearGradient>
                    </defs>
                </svg>
            </figure>
            <section
                className={`z-10 relative flex items-center lg:justify-end justify-center  w-full px-6 md:flex-nowrap flex-wrap ${styles.matchBanner__text}`}>
                <section className='lg:w-1/2 md:w-2/3 w-full'>
                    <div className='flex items-center justify-start'>
                        <h1
                            className='lg:text-5xl md:text-3xl font-extrabold capitalize'
                            style={{ color: "var(--main-color)" }}>
                            adopta
                        </h1>
                        <img
                            className='scale-75 mb-4'
                            src={PawIcon}
                            alt='Paw Icon'
                        />
                    </div>
                    <h2
                        className='lg:text-3xl md:text-xl font-bold capitalize'
                        style={{ color: "var(--main-color)" }}>
                        cambia una vida para siempre
                    </h2>
                    <p className='mt-4' style={{ color: "#242B33" }}>
                        Adoptar es un acto de amor que cambia vidas. Al adoptar,
                        no solo le das un hogar a una mascota necesitada, sino
                        que también llenas tu vida de alegría, lealtad y
                        compañía.
                    </p>
                    <p className='font-bold mt-6' style={{ color: "#242B33" }}>
                        ¡Adopta ahora y sé parte de esta hermosa experiencia!
                    </p>
                </section>
                <figure className='lg:w-1/2 md:w-2/5 w-full'>
                    <img src={HeroImage} alt='' />
                </figure>
            </section>
        </section>
    );
}

export default MatchBanner;
