import { useContext, useState } from "react";
import MatchCards from "./MatchCards";
import PetsContext from "../../Context/GlobalContext";

// const randomPets = [
//     {
//         name: "Whiskers",
//         age: 5,
//         raze: "Cat",
//         breed: "Siamese",
//     },
//     {
//         name: "Fluffy",
//         raze: "Dog",
//         breed: "Poodle",
//     },
//     {
//         name: "Spike",
//         age: 2,
//         raze: "Porcupine",
//         breed: "Hedgehog",
//     },
//     {
//         name: "Mittens",

//         raze: "Cat",
//         breed: "Calico",
//     },
//     {
//         name: "Fido",

//         raze: "Dog",
//         breed: "Labrador",
//     },
//     {
//         name: "Mr. Tiddles",
//         age: 8,
//         raze: "Cat",
//         breed: "Persian",
//     },
//     {
//         name: "Rex",
//         age: 4,
//         raze: "Dog",
//         breed: "Bulldog",
//     },
//     {
//         name: "Lucky",
//         raze: "Goldfish",
//         breed: "Goldfish",
//     },
//     {
//         name: "Smokey",
//         age: 5,
//         raze: "Cat",
//         breed: "Maine Coon",
//     },
//     {
//         name: "Oreo",
//         age: 3,
//         raze: "Cat",
//         breed: "Tabby",
//     },
//     {
//         name: "Buddy",
//         raze: "Dog",
//         breed: "Golden Retriever",
//     },
//     {
//         name: "Ginger",
//         raze: "Cat",
//         breed: "Ginger Cat",
//     },
// ];

// const approvedPets = [
//     {
//         name: "Whiskers",
//         age: 5,
//         raze: "Cat",
//         breed: "Siamese",
//     },
//     {
//         name: "Fluffy",
//         raze: "Dog",
//         breed: "Poodle",
//     },
//     {
//         name: "Mr. Tiddles",
//         age: 8,
//         raze: "Cat",
//         breed: "Persian",
//     },
//     {
//         name: "Rex",
//         age: 4,
//         raze: "Dog",
//         breed: "Bulldog",
//     },
//     {
//         name: "Buddy",
//         raze: "Dog",
//         breed: "Golden Retriever",
//     },
//     {
//         name: "Ginger",
//         raze: "Cat",
//         breed: "Ginger Cat",
//     },
// ];

// const deniedPets = [
//     {
//         name: "Spike",
//         age: 2,
//         raze: "Porcupine",
//         breed: "Hedgehog",
//     },
//     {
//         name: "Mittens",
//         raze: "Cat",
//         breed: "Calico",
//     },
//     {
//         name: "Fido",
//         raze: "Dog",
//         breed: "Labrador",
//     },
//     {
//         name: "Lucky",
//         raze: "Goldfish",
//         breed: "Goldfish",
//     },
//     {
//         name: "Smokey",
//         age: 5,
//         raze: "Cat",
//         breed: "Maine Coon",
//     },
//     {
//         name: "Oreo",
//         age: 3,
//         raze: "Cat",
//         breed: "Tabby",
//     },
// ];

function Catalogue() {
    const { likepets, dislikepets } = useContext(PetsContext);

    let allPets = [];

    const removeDuplicates = (array) => {
        const seen = new Set();
        return array.filter((item) => {
            const petId = item.like._id;
            const duplicate = seen.has(petId);
            seen.add(petId);
            return !duplicate && typeof item.like === "object";
        });
    };

    //   const uniquePets = removeDuplicates(likepets.payload);
    if (likepets && likepets.payload && Array.isArray(likepets.payload)) {
        allPets = removeDuplicates(likepets.payload);
        // allPets = likepets.payload;
    }

    // console.log(allPets);

    const [pets, setPets] = useState("all");

    const handleClick = (name) => {
        setPets(name);
    };

    return (
        <section className={`bg-[#f4f4f4] lg:px-8 py-16 p-0 w-full`}>
            <section
                className={`bg-white border lg:py-12 lg:px-10 md:px-6 px-4 py-12 rounded-none md:rounded-[20px] flex justify-between items-center flex-col max-w-screen-xl mx-auto`}>
                <section className='flex items-center justify-between w-full lg:flex-nowrap flex-wrap'>
                    <section className='xl:w-3/4 lg:w-1/2 w-full'>
                        <h3 className={`text-[#416A32] font-bold text-2xl`}>
                            Tus mascotas
                        </h3>
                        <p className={`text-[#464647] mt-[13px] max-w-[580px]`}>
                            ¡Bienvenido a tu sección de Matches! Aquí
                            encontrarás a las mascotas con las que has hecho{" "}
                            <strong>'match'</strong> y que podrían ser el
                            compañero perfecto para ti. También podrás ver si
                            tus peticiones de match fueron aceptadas o
                            rechazadas.
                        </p>
                    </section>
                    <section className='flex items-center justify-center lg:flex-wrap md:flex-nowrap flex-wrap xl:w-1/3 lg:w-2/5 w-full gap-2 lg:pt-0 pt-4'>
                        <section className='lg:w-full md:w-2/4 w-full'>
                            <button
                                className={`${
                                    pets === "all"
                                        ? "bg-[#416A32] border-[#416A32] text-[#fcfcfc] font-bold"
                                        : ""
                                } rounded-full flex justify-start items-center pr-6 pl-3 py-2 border-solid border-[#735858] border text-[#808080] font-semibold w-full lg:text-base text-sm`}
                                onClick={() => handleClick("all")}>
                                <img
                                    className={`w-8 h-8 mr-3 object-cover rounded-full`}
                                    src={`https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_7495.jpg`}
                                    alt='Perritos'
                                />
                                Todos los corazones enviados
                            </button>
                        </section>
                        <section className='w-full md:w-2/3 lg:w-full flex md:flex-nowrap flex-wrap items-center justify-between gap-x-2 lg:gap-y-0 gap-y-2'>
                            <button
                                className={`${
                                    pets === "approved"
                                        ? "bg-[#416A32] border-[#416A32] text-[#fcfcfc] font-bold"
                                        : ""
                                } ${"rounded-full flex justify-start items-center pr-6 pl-3 py-2 border-solid border border-[#735858] text-[#808080] font-semibold w-full lg:text-base text-sm"} lg:w-1/2 w-full lg:text-base text-sm`}
                                onClick={() => handleClick("approved")}>
                                <img
                                    className={`w-8 h-8 mr-3 object-cover rounded-full`}
                                    src={`https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_7495.jpg`}
                                    alt='Perritos'
                                />
                                <span>Aprobados</span>
                            </button>
                            <button
                                className={`${
                                    pets === "denied"
                                        ? "bg-[#416A32] border-[#416A32] text-[#fcfcfc] font-bold"
                                        : ""
                                } ${"rounded-full flex justify-start items-center pr-6 pl-3 py-2 border-solid border border-[#735858] text-[#808080] font-semibold w-full lg:text-base text-sm"} lg:w-1/2 w-full lg:text-base text-sm`}
                                onClick={() => handleClick("denied")}>
                                <img
                                    className={`w-8 h-8 mr-3 object-cover rounded-full`}
                                    src={`https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_7495.jpg`}
                                    alt='Perritos'
                                />
                                <span>Rechazados</span>
                            </button>
                        </section>
                    </section>
                </section>
                <section
                    className={`lg:pt-12 pt-6 flex items-center justify-start flex-wrap w-full xl:gap-x-12 md:gap-x-8 gap-x-2 gap-y-8`}>
                    {pets === "all" &&
                        allPets.length > 0 &&
                        allPets.map((pet, index) => {
                            return (
                                <MatchCards
                                    key={index}
                                    name={pet.like.name}
                                    age={pet.like.age}
                                    breed={pet.like.breed}
                                    img={pet.like.img}
                                />
                            );
                        })}
                    {/* {pets === "approved" &&
                        approvedPets.map((pet, index) => {
                            return (
                                <MatchCards
                                    key={index}
                                    name={pet.name}
                                    age={pet.age}
                                    breed={pet.breed}
                                    img={
                                        
                                    }
                                />
                            );
                        })
                        } */}
                    {/* {pets === "denied" &&
                        deniedPets.map((pet, index) => {
                            return (
                                <MatchCards
                                    key={index}
                                    name={pet.name}
                                    age={pet.age}
                                    breed={pet.breed}
                                    img={
                                        "https://images.dog.ceo/breeds/pitbull/dog-3981540_1280.jpg"
                                    }
                                />
                            );
                        })} */}
                </section>
            </section>
        </section>
    );
}

export default Catalogue;
