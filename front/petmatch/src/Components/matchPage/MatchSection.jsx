import React, { useState, useEffect, useContext } from "react";
import Details from "../detailsPopUp/Details";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import PetsContext from "../../Context/GlobalContext";
import Loader from "../Loading";

const MatchSection = () => {
    const {
        setDislikepets,
        setLikepets,
        setLoading,
        showDetails,
        setShowDetails,
    } = useContext(PetsContext);

    const navigate = useNavigate();
    // const [showDetails, setShowDetails] = useState(false);
    const [dog, setDog] = useState(null);
    const [pets, setPets] = useState([]);
    const [count, setCount] = useState(0);
    // const dogImg = useRef(null);

    const [showImage, setShowImage] = useState(true);
    const [animation, setAnimation] = useState(""); // Estado para la animación

    // const handleShowDetails = () => setShowDetails(true);
    // const handleCloseDetails = () => setShowDetails(false);

    //trae una cantidad fija de animalitos de la DB
    useEffect(() => {
        // fetch("http://localhost:8080/pets/petsQuantity/16")
        fetch("https://c19-24-m-node.onrender.com/pets/petsQuantity/16")
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") {
                    setPets(data.payload);
                    // console.log(data.payload);
                    setLoading(false);
                } else {
                    setLoading(false);
                    console.error("Error:", data.payload);
                }
            })
            .catch((error) => console.error("Error fetching dog:", error));
    }, []);

    useEffect(() => {
        // fetch("http://localhost:8080/pets/randomPet")
        fetch("https://c19-24-m-node.onrender.com/pets/randomPet")
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") {
                    setDog(data.payload);
                    setLoading(false);
                } else {
                    setLoading(false);
                    console.error("Error:", data.payload);
                }
            })
            .catch((error) => console.error("Error fetching dog:", error));
    }, []);

    const handleLike = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            // alert("Debes iniciar sesión para añadir a favoritos.");
            Swal.fire({
                title: "Ups",
                text: "Debes iniciar sesión para añadir a favoritos.",
                icon: "error",
            });
            return;
        }

        try {
            const response = await fetch(
                // `http://localhost:8080/match/like/${dog._id}`,
                `https://c19-24-m-node.onrender.com/match/like/${dog._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();
            if (response.ok) {
                console.log("Pet added to likes:", data);
                // alert("Perro añadido a favoritos!");

                setCount((prevState) => prevState + 1);
                setDog(pets[count]);
                // setLikepets(data);
                console.log(data, "AFTER Liked");
                console.log(pets[count], "AFTER Liked Liked");
                setLikepets(pets[count]);
                setAnimation("animate-slide-right"); // Agrega la clase de animación

                setTimeout(() => {
                    setShowImage(showImage);
                    setAnimation(""); // Limpia la clase de animación
                }, 500); // Tiempo que coincide con la duración de la animación
                setCount((prevState) => prevState + 1);
                setDog(pets[count]);

                // Swal.fire({
                //     title: "Muy bien!",
                //     text: "Perro añadido a favoritos!",
                //     icon: "success",
                // });
            } else {
                console.error("Error adding pet to likes:", data);
                // alert("Error al añadir el perro a favoritos.");
                Swal.fire({
                    title: "Ups, algo salio mal",
                    text: "Error al añadir el perro a favoritos.",
                    icon: "error",
                });
            }
        } catch (error) {
            console.error("Error adding pet to likes:", error);
            // alert("Error al añadir el perro a favoritos.");
            Swal.fire({
                title: "Ups, algo salio mal",
                text: "Error al añadir el perro a favoritos.",
                icon: "error",
            });
        }
    };

    const handleDislike = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            // alert("Debes iniciar sesión para añadir a no favoritos.");
            Swal.fire({
                title: "Ups",
                text: "Debes iniciar sesión para añadir a no favoritos.",
                icon: "error",
            });
            return;
        }

        try {
            const response = await fetch(
                // `http://localhost:8080/match/notlike/${dog._id}`,
                `https://c19-24-m-node.onrender.com/match/notlike/${dog._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();
            if (response.ok) {
                console.log("Pet added to dislikes:", data);
                // alert("Perro añadido a no favoritos!");
                setCount((prevState) => prevState + 1);
                setDog(pets[count]);
                // setDislikepets(data);
                setAnimation("animate-slide-left"); // Agrega la clase de animación

                setTimeout(() => {
                    setCount((prevState) => prevState + 1);
                    setDog(pets[count]);
                    setDislikepets(data);
                    setAnimation(""); // Limpia la clase de animación
                    // Swal.fire({
                    //     title: "Lo entendemos",
                    //     text: "Perro añadido a no favoritos!",
                    //     icon: "success",
                    // });
                }, 500); // Tiempo que coincide con la duración de la animación
            } else {
                console.error("Error adding pet to dislikes:", data);
                // alert("Error al añadir el perro a no favoritos.");
                Swal.fire({
                    title: "Ups, algo salio mal",
                    text: "Error al añadir el perro a no favoritos.",
                    icon: "error",
                });
            }
        } catch (error) {
            console.error("Error adding pet to dislikes:", error);
            // alert("Error al añadir el perro a no favoritos.");
            Swal.fire({
                title: "Ups, algo salio mal",
                text: "Error al añadir el perro a no favoritos.",
                icon: "error",
            });
        }
    };

    if (!dog) {
        // return <div>Loading...</div>; // O algún otro mensaje de carga
        return <Loader />;
    }

    return (
        <div className='flex flex-col items-center py-16 bg-gray-100 relative'>
            <h2 className='text-xl font-bold mb-4 text-bgGreen'>
                ¡Encuentra a tu Match perfecto!
            </h2>
            <div className='relative'>
                <button
                    className='absolute right-96 top-1/2 transform -translate-y-1/2 text-red-500 text-3xl focus:outline-none'
                    onClick={handleDislike}>
                    ❌
                </button>
                <div
                    className={`bg-white shadow-lg rounded-lg overflow-hidden w-64 mx-8 ${animation}`}>
                    <img
                        src={dog.img}
                        alt={dog.name}
                        loading='lazy'
                        className='w-full h-[245px] object-cover'
                    />
                    <div className=' bg-white text-center py-3'>
                        <h3 className='text-sm font-semibold'>{dog.name}</h3>
                    </div>
                </div>
                <button
                    className='absolute left-96 top-1/2 transform -translate-y-1/2 text-pink-500 text-3xl'
                    onClick={handleLike}>
                    ❤️
                </button>
            </div>
            <div className='mt-4 space-y-2 w-64'>
                <button
                    className='bg-[#2C7B10] text-white px-4 py-2 rounded-lg w-full'
                    onClick={() => setShowDetails(true)}>
                    ¡Conóceme Más!
                </button>
                <button
                    onClick={() => navigate("/Catalogue")}
                    className='bg-white text-black px-4 py-2 rounded-lg border border-gray-300 w-full'>
                    Ver Más Compañeros
                </button>
            </div>
            <Details
                show={showDetails}
                // onClose={handleCloseDetails}
                dog={dog}
            />
        </div>
    );
};

export default MatchSection;
