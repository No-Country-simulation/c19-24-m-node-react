import { useContext, useState } from "react";
import CatalogueFilter from "./CatalogueFilter";
import PetsContext from "../Context/GlobalContext";
import Details from "./detailsPopUp/Details";

function CatalogueGrid() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDog, setSelectedDog] = useState(null);
    const { allPets, setShowDetails, showDetails } = useContext(PetsContext);

    const handleShowDetails = (dog) => {
        setSelectedDog(dog);
        setShowDetails(true);
    };

    return (
        <section className='flex justify-between items-start bg-white w-[90%] rounded-lg shadow-md  m-auto  my-10 p-10 max-w-screen-xl mx-auto relative'>
            <div className='lg:w-1/3 sticky top-0'>
                <CatalogueFilter />
            </div>

            <div className='lg:w-2/3'>
                <div className='mx-auto max-w-2xl px-4  py-6 sm:px-6  lg:max-w-7xl lg:px-8'>
                    <div className='flex justify-between '>
                        <article className='flex items-center space-x-3 mb-5 '>
                            <h2 className='font-semibold text-xl'>Pequeños </h2>
                            <span className='font-light text-xs'>
                                12 Compañeros Encontrados
                            </span>
                        </article>
                        <div className='mb-5'>
                            <div className='relative inline-block text-left'>
                                <div>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        onClick={() => setIsOpen(!isOpen)}>
                                        Ordenar
                                        <svg
                                            className='-mr-1 ml-2 h-5 w-5'
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                            aria-hidden='true'>
                                            <path
                                                fillRule='evenodd'
                                                d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {isOpen && (
                                    <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                                        <div
                                            className='py-1'
                                            role='menu'
                                            aria-orientation='vertical'
                                            aria-labelledby='options-menu'>
                                            <a
                                                href='/'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                role='menuitem'>
                                                Edad
                                            </a>
                                            <a
                                                href='/'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                role='menuitem'>
                                                Genero
                                            </a>
                                            <a
                                                href='/'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                role='menuitem'>
                                                Nivel de Actividad
                                            </a>
                                            <a
                                                href='/'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                                                role='menuitem'>
                                                Tamaño
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 '>
                        {allPets.map((pet, index) => (
                            <div
                                key={index}
                                className='p-3 bg-gray-100 shadow-md rounded-md space-y-3'>
                                <a href={pet.href} className='group'>
                                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7'>
                                        <img
                                            alt={pet.name}
                                            src={pet.img}
                                            className='h-[180px] w-[220px] object-cover object-center group-hover:opacity-75'
                                        />
                                    </div>
                                    <div className='flex items-start justify-between p-2 mt-1'>
                                        <h3 className='text-sm text-gray-700'>
                                            {pet.name}
                                        </h3>
                                        <div className='flex items-center space-x-2'>
                                            <p className='text-xs font-light'>
                                                {pet.sex}
                                            </p>
                                            <p className='text-sm font-light'>
                                                {pet.age} años
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <button
                                    onClick={() => handleShowDetails(pet)}
                                    className='bg-[#5DA045] flex items-center justify-center py-2 rounded-3xl w-full text-white'>
                                    ¡Conócelo!
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {selectedDog && <Details show={showDetails} dog={selectedDog} />}
        </section>
    );
}

export default CatalogueGrid;
