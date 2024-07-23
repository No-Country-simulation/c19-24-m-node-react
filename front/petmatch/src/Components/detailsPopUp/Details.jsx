import React from 'react';

const Details = ({ show, onClose}) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 relative">
                <button className="absolute top-0 right-0 m-4 text-2xl" onClick={onClose}>
                    &times;
                </button>
                <h2 className="text-xl font-bold mb-4 text-green-600">Detalles del animal</h2>
                <div className="flex justify-between border-b mb-4">
                    <button className="py-2 px-4 border-b-2 border-transparent hover:border-green-600 focus:outline-none">Datos</button>
                    <button className="py-2 px-4 border-b-2 border-transparent hover:border-green-600 focus:outline-none">Salud</button>
                    <button className="py-2 px-4 border-b-2 border-transparent hover:border-green-600 focus:outline-none">Personalidad</button>
                </div>
            </div>
        </div>
    );
};

export default Details;