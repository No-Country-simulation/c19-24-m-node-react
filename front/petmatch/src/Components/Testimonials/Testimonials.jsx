import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";

/* // Import Swiper React components
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination"; */

const testomios = [
    {
        first_name: "John",
        last_name: "Smith",
        pet: "Buddy",
        img: "",
        comment:
            "Adoptar a Buddy fue la mejor decisión que hemos tomado. Ha traído tanta alegría a nuestro hogar y no podemos imaginar la vida sin él.",
    },
    {
        first_name: "Emily",
        last_name: "Johnson",
        pet: "Whiskers",
        img: "",
        comment:
            "Whiskers es un gato increíble. Es tan cariñosa y juguetona. Nuestra experiencia con la plataforma fue perfecta y no podríamos estar más felices.",
    },
    {
        first_name: "Michael",
        last_name: "Brown",
        pet: "Max",
        img: "",
        comment:
            "Max se ha convertido rápidamente en parte de nuestra familia. El proceso de adopción fue sencillo y el apoyo de la plataforma fue increíble.",
    },
    {
        first_name: "Jessica",
        last_name: "Williams",
        pet: "Bella",
        img: "",
        comment:
            "Bella es una perra tan dulce. Estamos muy agradecidos con esta plataforma por traerla a nuestras vidas. El proceso de adopción fue fluido y fácil.",
    },
    {
        first_name: "David",
        last_name: "Jones",
        pet: "Mittens",
        img: "",
        comment:
            "Mittens ha sido una maravillosa adición a nuestro hogar. La plataforma hizo que fuera muy fácil encontrar la mascota perfecta para nuestra familia.",
    },
    {
        first_name: "Sarah",
        last_name: "Miller",
        pet: "Rocky",
        img: "",
        comment:
            "Rocky está lleno de energía y nos mantiene activos. El proceso de adopción fue eficiente y agradecemos los perfiles detallados en la plataforma.",
    },
    {
        first_name: "Daniel",
        last_name: "Davis",
        pet: "Luna",
        img: "",
        comment:
            "Luna ha traído tanta alegría y risas a nuestras vidas. La plataforma hizo que fuera sencillo encontrar y adoptarla. ¡Muy recomendable!",
    },
    {
        first_name: "Laura",
        last_name: "Wilson",
        pet: "Charlie",
        img: "",
        comment:
            "Charlie es un perro tan gentil y cariñoso. Estamos encantados de tenerlo como parte de nuestra familia. El proceso de la plataforma fue claro y fácil de seguir.",
    },
    {
        first_name: "James",
        last_name: "Martinez",
        pet: "Ginger",
        img: "",
        comment:
            "Ginger es un gato maravilloso con una personalidad juguetona. El proceso de adopción fue fluido y la plataforma brindó un excelente apoyo durante todo el proceso.",
    },
    {
        first_name: "Karen",
        last_name: "Garcia",
        pet: "Oscar",
        img: "",
        comment:
            "Oscar ha sido una alegría tenerlo cerca. La plataforma hizo que fuera fácil encontrarlo y el proceso de adopción fue sin complicaciones. Estamos muy contentos con nuestra decisión.",
    },
];

function Testimonials() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 10000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
    };

    return (
        <section
            id='Testimonials'
            className='bg-[#D1E0CB] lg:py-28 md:py-20 py-16 overflow-hidden'>
            <h3 className='text-[#416A32] lg:text-5xl text-3xl text-center font-bold md:pb-16 pb-10'>
                Testimonios
            </h3>
            <section
                className='mx-auto max-w-screen-xl rounded-2xl px-8 relative'
                data-aos='zoom-out-up'>
                <Slider {...settings}>
                    {/* {testomios &&
                        testomios.map((test, index) => (
                            <div
                                key={index}
                                data-aos='fade-up'
                                data-aos-delay={index * 100}>
                                <TestimonialCard
                                    key={index}
                                    owner={test.dueño}
                                    pet={test.mascota}
                                    testimonial={test.testimonio}
                                    img={
                                        "https://images.dog.ceo/breeds/mastiff-bull/n02108422_1923.jpg"
                                    }
                                />
                            </div>
                        ))} */}
                </Slider>
            </section>
        </section>
    );
}

export default Testimonials;

//Te dejo el codigo que vos hiciste asi ves que es lo que cambie

/* return (
        <section className='bg-[#D1E0CB] lg:py-28 md:py-20 py-16' >
            <h3 className='text-[#416A32] lg:text-5xl text-3xl text-center font-bold md:pb-16 pb-10'>
                Testimonios
            </h3>
            <section className='mx-auto max-w-screen-xl rounded-2xl px-8 relative'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    // navigation
                    // pagination={{ clickable: true }}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    // onSlideChange={() => console.log("slide change")}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {testomios &&
                        testomios.map((test, index) => {
                            return (
                                <SwiperSlide key={index}>
                                        <TestimonialCard
                                            key={index}
                                            owner={test.dueño}
                                            pet={test.mascota}
                                            testimonial={test.testimonio}
                                            img={"https://images.dog.ceo/breeds/mastiff-bull/n02108422_1923.jpg"}
                                        />
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
                <div className='swiper-button-next bg-[#416a32] hover:bg-[#5b9248] w-[45px] h-[45px] text-white font-bold py-2 px-4 rounded-full'></div>
                <div className='swiper-button-prev bg-[#416a32] hover:bg-[#5b9248] w-[45px] h-[45px] text-white font-bold py-2 px-4 rounded-full'></div>
            </section>
        </section>
    );
}

export default Testimonials; */
