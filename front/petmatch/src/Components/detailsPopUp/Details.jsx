import React, { useState } from 'react';

const Details = ({ show, onClose}) => {
    const [selectedTab, setSelectedTab] = useState('Datos');

    if (!show) {
        return null;
    }

    const renderContent = () => {
        switch (selectedTab) {
            case 'Datos':
                return <div>Datos generales</div>; //en este apartado iria lo traido en la base de datos que es distinto segun la seccion.
            case 'Salud':
                return <div>Ficha de salud</div>;
            case 'Personalidad':
                return <div>Personalidad</div>;
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 relative">
                <button className="absolute top-0 right-0 m-4 text-2xl" onClick={onClose}>
                    &times;
                </button>
                <h2 className="text-xl font-bold mb-4 text-green-600">¡Conóceme mas</h2>
                <div className="flex justify-between border-b mb-4">
                    <button
                        className={`py-2 px-4 border-b-2 ${selectedTab === 'Datos' ? 'border-green-600' : 'border-transparent'} focus:outline-none`}
                        onClick={() => setSelectedTab('Datos')}
                    >
                        Datos
                    </button>
                    <button
                        className={`py-2 px-4 border-b-2 ${selectedTab === 'Salud' ? 'border-green-600' : 'border-transparent'} focus:outline-none`}
                        onClick={() => setSelectedTab('Salud')}
                    >
                        Salud
                    </button>
                    <button
                        className={`py-2 px-4 border-b-2 ${selectedTab === 'Personalidad' ? 'border-green-600' : 'border-transparent'} focus:outline-none`}
                        onClick={() => setSelectedTab('Personalidad')}
                    >
                        Personalidad
                    </button>
                </div>
                <div>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Details;