import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
    const [testimonials, setTestimonials] = useState(undefined);

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

    const getTestimonials = async () => {
        try {
            let url = `https://c19-24-m-node.onrender.com/testimonials/`;
            const res = await fetch(url);
            const data = await res.json();
            if (data.status === "success") setTestimonials(data.payload);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTestimonials();
    }, []);

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
                    {testimonials !== undefined &&
                        testimonials.map((test, index) => (
                            <div
                                key={index}
                                data-aos='fade-up'
                                data-aos-delay={index * 100}>
                                <TestimonialCard
                                    key={index}
                                    data={test}
                                    // first_name={test.first_name}
                                    // last_name={test.last_name}
                                    // testimonial={test.comment}
                                    // img={test.img}
                                />
                            </div>
                        ))}
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
