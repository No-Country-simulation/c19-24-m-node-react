import React, { useContext, useState } from "react";
import PetsContext from "../../Context/GlobalContext";

const Details = ({ show, dog }) => {
    const { setShowDetails } = useContext(PetsContext);
    const [selectedTab, setSelectedTab] = useState("Datos");

    if (!show || !dog) {
        return null;
    }

    // console.log(dog, "DOG DETAILS");

    const renderContent = () => {
        switch (selectedTab) {
            case "Datos":
                return (
                    <div className='flex flex-col gap-y-1.5 capitalize'>
                        <p>
                            <strong>Nombre:</strong> {dog.name}
                        </p>
                        <p>
                            <strong>Raza:</strong> {dog.breed}
                        </p>
                        <p>
                            <strong>Edad:</strong> {dog.age} años
                        </p>
                        <p>
                            <strong>Sexo:</strong> {dog.sex}
                        </p>
                        <p>
                            <strong>Peso:</strong> {dog.weight} kg
                        </p>
                        <p>
                            <strong>Tamaño Actual:</strong> {dog.size.current}
                        </p>
                        <p>
                            <strong>Tamaño Estimado:</strong>{" "}
                            {dog.size.estimated}
                        </p>
                        <p>
                            <strong>Tiempo en el refugio:</strong>{" "}
                            {dog.time_at_the_shelter}
                        </p>
                        <p>
                            <strong>Especie:</strong> {dog.specie}
                        </p>
                    </div>
                );
            case "Salud":
                return (
                    <div className='flex flex-col gap-y-1.5 capitalize'>
                        <p>
                            <strong>Tratamientos previos:</strong>{" "}
                            {dog.health.previous_treatments}
                        </p>
                        <p>
                            <strong>Desparacitado:</strong>{" "}
                            {dog.health.dewormed}
                        </p>
                        <p>
                            <strong>Necesidad médica:</strong>{" "}
                            {dog.health.medical_necessity}
                        </p>
                        <p>
                            <strong>Esterilizado:</strong>{" "}
                            {dog.health.sterilization}
                        </p>
                        <p>
                            <strong>Vacunas:</strong> {dog.health.vaccines}
                        </p>
                        <p>
                            <strong>Historial de salud:</strong>{" "}
                            {dog.health_history}
                        </p>
                    </div>
                );
            case "Personalidad":
                return (
                    <div className='flex flex-col gap-y-1.5 capitalize'>
                        <p>
                            <strong>Personalidad:</strong> {dog.personality}
                        </p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 p-6 relative'>
                <button
                    className='absolute top-0 right-0 m-4 text-2xl'
                    onClick={() => setShowDetails(false)}>
                    &times;
                </button>
                <h2 className='text-xl font-bold mb-4 text-green-600'>
                    ¡Conóceme más!
                </h2>
                <div className='flex justify-between border-b mb-4'>
                    <button
                        className={`py-2 px-4 border-b-2 ${
                            selectedTab === "Datos"
                                ? "border-green-600"
                                : "border-transparent"
                        } focus:outline-none`}
                        onClick={() => setSelectedTab("Datos")}>
                        Datos
                    </button>
                    <button
                        className={`py-2 px-4 border-b-2 ${
                            selectedTab === "Salud"
                                ? "border-green-600"
                                : "border-transparent"
                        } focus:outline-none`}
                        onClick={() => setSelectedTab("Salud")}>
                        Salud
                    </button>
                    <button
                        className={`py-2 px-4 border-b-2 ${
                            selectedTab === "Personalidad"
                                ? "border-green-600"
                                : "border-transparent"
                        } focus:outline-none`}
                        onClick={() => setSelectedTab("Personalidad")}>
                        Personalidad
                    </button>
                </div>
                <div>{renderContent()}</div>
            </div>
        </div>
    );
};

export default Details;
