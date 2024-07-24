import React from "react";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";

function SearchPopUp({ searchQuery, searchResults }) {
    return (
        <section className='absolute top-12 max-h-[500px] p-4 right-0 rounded-md bg-white w-[50vw]'>
            <p>
                {searchQuery === undefined || searchQuery === "" ? (
                    `No hay resultados para: " "`
                ) : (
                    <>
                        Resultados para: "<strong>{searchQuery}"</strong>
                    </>
                )}
            </p>
            {searchQuery === undefined || searchQuery === "" ? (
                ""
            ) : (
                <section>
                    <section className='flex flex-col justify-between'>
                        <Link
                            className='text-sm flex justify-start items-center font-semibold py-2'
                            to='/Catalogue'>
                            Catálogo
                            <span className='ml-3 mt-0.5'>
                                <svg
                                    width='14'
                                    height='14'
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'>
                                    <path
                                        d='M9 6L15 12L9 18'
                                        stroke='black'
                                        strokeWidth='2'
                                    />
                                </svg>
                            </span>
                        </Link>
                        <section className='flex gap-3 items-center justify-start flex-wrap'>
                            {searchResults.length === 0 ? (
                                <p>
                                    Lo sentimos, no hay resultados para tu
                                    búsqueda
                                </p>
                            ) : (
                                searchResults
                                    .slice(0, 4)
                                    .map((res, index) => (
                                        <SearchCard key={index} data={res} />
                                    ))
                            )}
                        </section>
                    </section>
                </section>
            )}
        </section>
    );
}

export default SearchPopUp;
