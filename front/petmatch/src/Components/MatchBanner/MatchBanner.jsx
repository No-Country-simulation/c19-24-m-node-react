import HeroImage from "../../Assets/Banners/matchBannerImage.webp";
import PawIcon from "../../Assets/GeneralImages/paw.svg";

// import RectangleIcon from "../../Assets/rectangle.webp";
import RectangleIcon from "../../Assets/attachment.png";

function MatchBanner() {
    return (
        <section
            className='relative overflow-hidden bg-no-repeat bg-scroll bg-cover bg-right-bottom bg-clip-padding'
            style={{ backgroundImage: `url(${RectangleIcon})` }}>
            <section className='max-w-screen-xl mx-auto'>
                <section className='z-10 relative flex lg:items-center md:items-end items-center lg:justify-end justify-center w-full lg:pr-6 lg:pl-[4.5rem] px-4 md:flex-nowrap flex-wrap'>
                    <section className='md:w-1/2 w-full lg:py- md:py-16 py-8'>
                        <div className='flex items-center justify-start'>
                            <h1 className='lg:text-5xl md:text-3xl text-2xl font-extrabold capitalize text-[#416a32]'>
                                adopta
                            </h1>
                            <img
                                className='scale-75 mb-4'
                                src={PawIcon}
                                alt='Paw Icon'
                            />
                        </div>
                        <h2 className='lg:text-3xl md:text-xl text-lg font-bold capitalize text-[#416a32]'>
                            cambia una vida para siempre
                        </h2>
                        <p className='mt-4 text-[#242B33]'>
                            Adoptar es un acto de amor que cambia vidas. Al
                            adoptar, no solo le das un hogar a una mascota
                            necesitada, sino que también llenas tu vida de
                            alegría, lealtad y compañía.
                        </p>
                        <p className='font-bold mt-6 text-[#242B33]'>
                            ¡Adopta ahora y sé parte de esta hermosa
                            experiencia!
                        </p>
                    </section>
                    <figure className='lg:w-1/2 md:w-2/5 w-full'>
                        <img src={HeroImage} alt='Hand shake' />
                    </figure>
                </section>
            </section>
        </section>
    );
}

export default MatchBanner;
