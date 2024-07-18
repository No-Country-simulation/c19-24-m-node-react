import TestimonialCard from "./TestimonialCard";

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
        <section className='bg-[#D1E0CB] py-16'>
            <h3 className='text-[#416A32] text-5xl text-center font-bold lg:pb-16'>
                Testimonios
            </h3>
            <section>
                {testomios &&
                    testomios.map((test, index) => {
                        return (
                            <TestimonialCard
                                key={index}
                                owner={test.dueño}
                                pet={test.mascota}
                                testimonial={test.testimonio}
                                img={
                                    "https://images.dog.ceo/breeds/mastiff-bull/n02108422_1923.jpg"
                                }
                            />
                        );
                    })}
                {/* <TestimonialCard
                    owner={"Sam Smith"}
                    pet={"Ron"}
                    testimonial={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, molestias omnis autem sunt consequuntur ab rerum praesentium? Blanditiis, nobis pariatur."
                    }
                    img={
                        "https://images.dog.ceo/breeds/mastiff-bull/n02108422_1923.jpg"
                    }
                /> */}
            </section>
        </section>
    );
}

export default Testimonials;
