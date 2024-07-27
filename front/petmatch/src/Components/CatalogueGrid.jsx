import { useState } from "react";
import CatalogueFilter from "./CatalogueFilter"

const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        age: '7',
        gender: 'macho',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        age: '7',
        gender: 'macho',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        age: '7',
        gender: 'macho',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined ',
        href: '#',
        age: '7',
        gender: 'macho',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel  with brass tip and top.',
    },
    {
        id: 5,
        name: 'Earthen Bottle',
        href: '#',
        age: '7',
        gender: 'macho',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 6,
        name: 'Nomad Tumbler',
        href: '#',
        age: '7',
        gender: 'macho',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 7,
        name: 'Focus Paper Refill',
        href: '#',
        age: '7',
        gender: 'macho',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 8,
        name: 'Machined ',
        href: '#',
        age: '7',
        gender: 'macho',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel  with brass tip and top.',
    },
    {
        id: 9,
        name: 'Earthen Bottle',
        href: '#',
        age: '7',
        gender: 'macho',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 10,
        name: 'Nomad Tumbler',
        href: '#',
        age: '7',
        gender: 'macho',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 11,
        name: 'Focus Paper Refill',
        href: '#',
        age: '7',
        gender: 'macho',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 12,
        name: 'Machined ',
        href: '#',
        age: '7',
        gender: 'macho',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel  with brass tip and top.',
    },
    // More products...
]

function CatalogueGrid() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="flex bg-white w-[90%] rounded-lg shadow-md  m-auto  my-10 p-10">
            <div>
                <CatalogueFilter />
            </div>

            <div className="">

                <div className="mx-auto max-w-2xl px-4  py-6 sm:px-6  lg:max-w-7xl lg:px-8">
                    <div className="flex justify-between ">
                        <article className="flex items-center space-x-3 mb-5 ">
                            <h2 className="font-semibold text-xl">Pequeños </h2>
                            <span className="font-light text-xs">12 Compañeros Encontrados</span>
                        </article>
                        <div className="mb-5">
                            <div className="relative inline-block text-left">
                                <div>
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        Ordenar
                                        <svg
                                            className="-mr-1 ml-2 h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {isOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Edad
                                            </a>
                                            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Genero
                                            </a>
                                            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Nivel de Actividad
                                            </a>
                                            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                                Tamaño
                                            </a>

                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 ">
                        {products.map((product) => (
                            <div className=" p-3 bg-gray-100 shadow-md rounded-md space-y-3">
                                <a key={product.id} href={product.href} className="group">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
                                        <img
                                            alt={product.imageAlt}
                                            src={product.imageSrc}
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <div className=" flex items-center justify-between p-2 mt-1" >
                                        <h3 className="text-sm text-gray-700">{product.name}</h3>
                                        <div className="flex items-center space-x-1">
                                            <p className="text-sm font-light">{product.gender}</p>
                                            <p className="text-sm font-light ">{product.age} años</p>
                                        </div>
                                    </div>
                                </a>
                                <button className="bg-[#5DA045]  flex items-center  justify-center py-2 rounded-3xl w-full text-white">¡Conócelo!</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CatalogueGrid



/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
