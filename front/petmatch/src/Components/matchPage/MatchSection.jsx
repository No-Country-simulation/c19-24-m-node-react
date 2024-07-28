import React, { useState, useEffect } from "react";
import Details from "../detailsPopUp/Details";

import { useNavigate } from "react-router-dom";

const MatchSection = () => {
    const navigate = useNavigate();
    const [showDetails, setShowDetails] = useState(false);
    const [dog, setDog] = useState(null);

    const handleShowDetails = () => setShowDetails(true);
    const handleCloseDetails = () => setShowDetails(false);

    useEffect(() => {
        fetch('http://localhost:8080/pets/randomPet')
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    setDog(data.payload);
                } else {
                    console.error('Error:', data.payload);
                }
            })
            .catch((error) => console.error('Error fetching dog:', error));
    }, []);

    const handleLike = async () => {
        const token = localStorage.getItem('token');
    
        if (!token) {
            alert("Debes iniciar sesión para añadir a favoritos.");
            return;
        }
    
        try {
            const response = await fetch(`http://localhost:8080/match/like/${dog._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log('Pet added to likes:', data);
                alert("Perro añadido a favoritos!");
            } else {
                console.error('Error adding pet to likes:', data);
                alert("Error al añadir el perro a favoritos.");
            }
        } catch (error) {
            console.error('Error adding pet to likes:', error);
            alert("Error al añadir el perro a favoritos.");
        }
    };

    if (!dog) {
        return <div>Loading...</div>; // O algún otro mensaje de carga
    }

    return (
        <div className='flex flex-col items-center py-16 bg-gray-100 relative'>
            <h2 className='text-xl font-bold mb-4 text-bgGreen'>
                ¡Encuentra a tu Match perfecto!
            </h2>
            <div className='relative'>
                <button className='absolute right-96 top-1/2 transform -translate-y-1/2 text-red-500 text-3xl focus:outline-none'>
                    ❌
                </button>
                <div className='bg-white shadow-lg rounded-lg overflow-hidden w-64 mx-8'>
                    <img
                        src={dog.img}
                        alt={dog.name}
                        className='w-full h-48 object-cover'
                    />
                    <div className=' bg-white text-center py-2'>
                        <h3 className='text-sm font-semibold'>{dog.name}</h3>
                    </div>
                </div>
                <button className='absolute left-96 top-1/2 transform -translate-y-1/2 text-pink-500 text-3xl' onClick={handleLike}>
                    ❤️
                </button>
            </div>
            <div className='mt-4 space-y-2 w-64'>
                <button
                    className='bg-[#2C7B10] text-white px-4 py-2 rounded-lg w-full'
                    onClick={handleShowDetails}>
                    ¡Conóceme Más!
                </button>
                <button
                    onClick={() => navigate('/Catalogue')}
                    className='bg-white text-black px-4 py-2 rounded-lg border border-gray-300 w-full'>
                    Ver Más Compañeros
                </button>
            </div>
            <Details show={showDetails} onClose={handleCloseDetails} />
        </div>
    );
};

export default MatchSection;