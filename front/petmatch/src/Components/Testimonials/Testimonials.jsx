import TestimonialCard from "./TestimonialCard";

// Import Swiper React components
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testomios = [
    {
        dueño: "John Smith",
        mascota: "Buddy",
        testimonio:
            "Adoptar a Buddy fue la mejor decisión que hemos tomado. Ha traído tanta alegría a nuestro hogar y no podemos imaginar la vida sin él.",
    },
    {
        dueño: "Emily Johnson",
        mascota: "Whiskers",
        testimonio:
            "Whiskers es un gato increíble. Es tan cariñosa y juguetona. Nuestra experiencia con la plataforma fue perfecta y no podríamos estar más felices.",
    },
    {
        dueño: "Michael Brown",
        mascota: "Max",
        testimonio:
            "Max se ha convertido rápidamente en parte de nuestra familia. El proceso de adopción fue sencillo y el apoyo de la plataforma fue increíble.",
    },
    {
        dueño: "Jessica Williams",
        mascota: "Bella",
        testimonio:
            "Bella es una perra tan dulce. Estamos muy agradecidos con esta plataforma por traerla a nuestras vidas. El proceso de adopción fue fluido y fácil.",
    },
    {
        dueño: "David Jones",
        mascota: "Mittens",
        testimonio:
            "Mittens ha sido una maravillosa adición a nuestro hogar. La plataforma hizo que fuera muy fácil encontrar la mascota perfecta para nuestra familia.",
    },
    {
        dueño: "Sarah Miller",
        mascota: "Rocky",
        testimonio:
            "Rocky está lleno de energía y nos mantiene activos. El proceso de adopción fue eficiente y agradecemos los perfiles detallados en la plataforma.",
    },
    {
        dueño: "Daniel Davis",
        mascota: "Luna",
        testimonio:
            "Luna ha traído tanta alegría y risas a nuestras vidas. La plataforma hizo que fuera sencillo encontrar y adoptarla. ¡Muy recomendable!",
    },
    {
        dueño: "Laura Wilson",
        mascota: "Charlie",
        testimonio:
            "Charlie es un perro tan gentil y cariñoso. Estamos encantados de tenerlo como parte de nuestra familia. El proceso de la plataforma fue claro y fácil de seguir.",
    },
    {
        dueño: "James Martinez",
        mascota: "Ginger",
        testimonio:
            "Ginger es un gato maravilloso con una personalidad juguetona. El proceso de adopción fue fluido y la plataforma brindó un excelente apoyo durante todo el proceso.",
    },
    {
        dueño: "Karen Garcia",
        mascota: "Oscar",
        testimonio:
            "Oscar ha sido una alegría tenerlo cerca. La plataforma hizo que fuera fácil encontrarlo y el proceso de adopción fue sin complicaciones. Estamos muy contentos con nuestra decisión.",
    },
];

function Testimonials() {
    return (
        <section className='bg-[#D1E0CB] py-28'>
            <h3 className='text-[#416A32] text-5xl text-center font-bold md:pb-16 pb-10'>
                Testimonios
            </h3>
            <section className='mx-auto max-w-screen-xl rounded-2xl px-8'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
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
                                <SwiperSlide>
                                    <TestimonialCard
                                        key={index}
                                        owner={test.dueño}
                                        pet={test.mascota}
                                        testimonial={test.testimonio}
                                        img={
                                            "https://images.dog.ceo/breeds/mastiff-bull/n02108422_1923.jpg"
                                        }
                                    />
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </section>
        </section>
    );
}

export default Testimonials;
