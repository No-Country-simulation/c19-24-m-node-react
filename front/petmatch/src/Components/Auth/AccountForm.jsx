import { useState } from "react";
import Dropdown from "./Dropdown";
import FormBanner from "../FormBanner";

function AccountForm() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [dropdownValues, setDropdownValues] = useState({});

    const handleDropdownToggle = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const handleDropdownSelect = (index, value) => {
        setDropdownValues((prevValues) => ({
            ...prevValues,
            [index]: value,
        }));
        setOpenDropdown(null); // Close the dropdown after selection
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <main className='mx-auto max-w-screen-xl my-16'>
            <section className='bg-white p-16 shadow-md rounded-md'>
                <section className='mb-10'>
                    <h1 className='text-[#416A32] text-3xl font-bold'>
                        Mi Información
                    </h1>
                    <p className='text-[#242B33]'>
                        Completa tu información lo más preciso posible, así
                        podremos recomendarte una mascota que encaje contigo
                        perfectamente. Puedes actualizar la mayoría de tus datos
                        cuando lo desees, en caso de que tu situación cambie.
                        Sin embargo, no podrás modificar tu nombre, apellidos y
                        número de identificación. Si necesitas hacer algún
                        cambio en esta información, por favor{" "}
                        <strong>contáctanos</strong>.
                    </p>
                </section>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-y-4 items-start justify-center'>
                    <div className='flex items-center justify-between w-full gap-x-4'>
                        <input
                            className='py-2 px-3 outline-none border border-gray-300 rounded-md bg-white w-1/2'
                            type='text'
                            placeholder='Nombres'
                            pattern='[A-Za-z\s]+' // Solo letras y espacios
                            required
                            autoComplete='off'
                        />
                        <input
                            className='py-2 px-3 outline-none border border-gray-300 rounded-md bg-white w-1/2'
                            type='text'
                            placeholder='Apellidos'
                            pattern='[A-Za-z\s]+' // Solo letras y espacios
                            required
                            autoComplete='off'
                        />
                    </div>
                    <div className='flex items-center justify-between w-full gap-x-4'>
                        <Dropdown
                            title='Tipo de verificación'
                            options={["D.N.I", "Pasaporte"]}
                            isOpen={openDropdown === 0}
                            onToggle={() => handleDropdownToggle(0)}
                            onSelected={(value) =>
                                handleDropdownSelect("verification", value)
                            }
                        />
                        <input
                            className='py-2 px-3 outline-none border border-gray-300 rounded-md bg-white'
                            type='text'
                            placeholder='Número de Identificación'
                            pattern='\d+' // Solo números
                            required
                            autoComplete='off'
                        />
                        <input
                            className='py-2 px-3 outline-none border border-gray-300 rounded-md bg-white'
                            type='email'
                            placeholder='Correo Electrónico'
                            pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
                            required
                            autoComplete='off'
                        />
                    </div>
                    <div className='flex items-center justify-between w-full gap-x-4'>
                        <input
                            className='py-2 px-3 outline-none border border-gray-300 rounded-md bg-white w-1/3'
                            type='text'
                            placeholder='Teléfono'
                            pattern='\d{10}' // 10 dígitos para el teléfono
                            autoComplete='off'
                        />
                        <input
                            className='py-2 px-3 outline-none border border-gray-300 rounded-md bg-white w-1/6'
                            type='text'
                            placeholder='Edad'
                            pattern='\d{1,2}' // 1 o 2 dígitos para la edad
                            required
                            autoComplete='off'
                        />
                        <input
                            className='py-2 px-3 outline-none border border-gray-300 rounded-md bg-white w-2/3'
                            type='text'
                            placeholder='Dirección '
                            pattern='.{5,}' // Al menos 5 caracteres
                            required
                            autoComplete='off'
                        />
                    </div>
                    <div className='flex items-center justify-between w-full gap-x-4'>
                        <Dropdown
                            title={"Tipo de Vivienda"}
                            options={["Casa", "Apartamento"]}
                            isOpen={openDropdown === 1}
                            onToggle={() => handleDropdownToggle(1)}
                            onSelected={(value) =>
                                handleDropdownSelect("housing", value)
                            }
                        />
                        <Dropdown
                            title={"¿Tiene otra mascota?"}
                            options={["Si", "No"]}
                            isOpen={openDropdown === 2}
                            onToggle={() => handleDropdownToggle(2)}
                            onSelected={(value) =>
                                handleDropdownSelect("pet", value)
                            }
                        />
                        <Dropdown
                            title={"¿Tiene niños pequeños en casa?"}
                            options={["Si", "No"]}
                            isOpen={openDropdown === 3}
                            onToggle={() => handleDropdownToggle(3)}
                            onSelected={(value) =>
                                handleDropdownSelect("kids", value)
                            }
                        />
                    </div>
                    <div className='flex items-center justify-between w-full gap-x-4'>
                        <Dropdown
                            title={"¿Cuántas horas suele estar fuera de casa?"}
                            options={[
                                "4 horas",
                                "8 horas",
                                "+10 horas",
                                "No sabe con certeza",
                            ]}
                            isOpen={openDropdown === 4}
                            onToggle={() => handleDropdownToggle(4)}
                            onSelected={(value) =>
                                handleDropdownSelect("hours", value)
                            }
                        />
                        <Dropdown
                            title={"¿Viaja con frecuencia?"}
                            options={["Si", "No"]}
                            isOpen={openDropdown === 5}
                            onToggle={() => handleDropdownToggle(5)}
                            onSelected={(value) =>
                                handleDropdownSelect("travel", value)
                            }
                        />
                        <Dropdown
                            title={
                                "Si viaja con frecuencia, ¿cuánto tiempo suele ser?"
                            }
                            options={[
                                "Una vez a la semana",
                                "Una vez al mes",
                                "Una vez al año",
                            ]}
                            isOpen={openDropdown === 6}
                            onToggle={() => handleDropdownToggle(6)}
                            onSelected={(value) =>
                                handleDropdownSelect("time", value)
                            }
                        />
                    </div>
                    <div className='flex items-center justify-between w-full gap-x-4'>
                        <Dropdown
                            title={"¿Tiene experiencia previa con mascotas?"}
                            options={["Si", "No"]}
                            isOpen={openDropdown === 7}
                            onToggle={() => handleDropdownToggle(7)}
                            onSelected={(value) =>
                                handleDropdownSelect("experience", value)
                            }
                        />
                        <Dropdown
                            title={
                                "¿Posee conocimiento sobre el cuidado que se debe tener con los animales?"
                            }
                            options={["Si", "No"]}
                            isOpen={openDropdown === 8}
                            onToggle={() => handleDropdownToggle(8)}
                            onSelected={(value) =>
                                handleDropdownSelect("knowledge", value)
                            }
                        />
                    </div>
                    <button
                        className='bg-[#416A32] text-white w-full py-2 rounded-md'
                        type='submit'>
                        Enviar Formulario
                    </button>
                </form>
            </section>
            <FormBanner />
        </main>
    );
}

export default AccountForm;
