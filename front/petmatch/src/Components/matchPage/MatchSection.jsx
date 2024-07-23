import React, { useState } from 'react';
import image from '../../images/perrito2.png'
import Details from '../detailsPopUp/Details';

const MatchSection = () => {

    const [showDetails, setShowDetails] = useState(false);

    const handleShowDetails = () => {
        setShowDetails(true);
    };

    const handleCloseDetails = () => {
        setShowDetails(false);
    };

    return (
        <div className="flex flex-col items-center py-8 bg-gray-100 relative">
            <h2 className="text-xl font-bold mb-4 text-bgGreen">¡Encuentra a tu Match perfecto!</h2>
            <div className="relative">
                <button className="absolute right-96 top-1/2 transform -translate-y-1/2 text-red-500 text-3xl focus:outline-none">❌</button>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 mx-8">
                    <img src={image} alt='Dog' className="w-full h-48 object-cover" />
                    <div className=" bg-white text-center py-1">
                        <h3 className="text-sm font-semibold">Nombre</h3>
                    </div>
                </div>
                <button className="absolute left-96 top-1/2 transform -translate-y-1/2 text-pink-500 text-3xl">❤️</button>
            </div>
            <div className="mt-4 space-y-2 w-64">
                <button className="bg-[#2C7B10] text-white px-4 py-2 rounded-lg w-full" onClick={handleShowDetails} >¡Conóceme Más!</button>
                <button className="bg-white text-black px-4 py-2 rounded-lg border border-gray-300 w-full">Ver Más Compañeros</button>
            </div>
            <Details show={showDetails} onClose={handleCloseDetails}/>
        </div>
    );
};

export default MatchSection;