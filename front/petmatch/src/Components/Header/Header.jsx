import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logos/Logo.png";
import LogoName from "../../Assets/Logos/LogoName.png";
import { useEffect, useState } from "react";
import SearchPopUp from "../Search Pop-up/SearchPopUp";

function Header() {
    const navigate = useNavigate();

    const [petsForSearch, setPetsforsearch] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        const results = simulateSearch(query);
        setSearchResults(results);
    };

    useEffect(() => {
        try {
            const getPets = async () => {
                const res = await fetch(
                    "https://c19-24-m-node.onrender.com/pets"
                );
                const data = await res.json();
                // console.log(data);
                if (data.status === "success") setPetsforsearch(data.payload);
            };

            getPets();
        } catch (err) {
            console.log(err);
        }
    }, []);

    // console.log(petsForSearch, "PETS FOR SEARCH");
    const simulateSearch = (query) => {
        if (query === "") {
            return [];
        }

        const lowerCaseQuery = query.toLowerCase();

        return petsForSearch.filter(
            (pet) =>
                pet.sex.toLowerCase().includes(lowerCaseQuery) ||
                pet.breed.toLowerCase().includes(lowerCaseQuery) ||
                pet.specie.toLowerCase().includes(lowerCaseQuery)
        );
    };

    return (
        <header>
            <nav className='bg-[#E0E7DE]'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    <a
                        href='/#'
                        className='flex items-center space-x-3 rtl:space-x-reverse'>
                        <img src={Logo} className='App-logo' alt='logo' />
                        <img
                            src={LogoName}
                            className='App-logo w-28'
                            alt='logo'
                        />
                    </a>

                    {/* Search button */}
                    <div className='flex md:order-2 md:space-x-3 relative'>
                        <button
                            onClick={handleClick}
                            type='button'
                            data-collapse-toggle='navbar-search'
                            aria-controls='navbar-search'
                            aria-expanded='false'
                            className='md:hidden text-[#2C7B10] bg-transparent  focus:outline-none rounded-lg text-sm p-2.5 me-1'>
                            <svg
                                className='w-5 h-5'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 20 20'>
                                <path
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                                />
                            </svg>
                        </button>

                        <div className='relative hidden md:block'>
                            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                                <svg
                                    className='w-4 h-4 text-[#2C7B10]'
                                    aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 20 20'>
                                    <path
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                                    />
                                </svg>
                                <span className='sr-only'>Search icon</span>
                            </div>

                            <input
                                type='search'
                                id='search-navbar'
                                className='block w-[280px] p-2 ps-10 text-sm border-gray-300 rounded-full bg-gray-50 dark:bg-white outline-none cursor-pointer  dark:placeholder-gray-400 dark:text-black  dark:focus:border-none'
                                placeholder=' Adopción, apadrinar...'
                                autoComplete='off'
                                onClick={handleClick}
                                onChange={handleInputChange}
                            />
                        </div>

                        {/* Search Pop-up START */}
                        {isVisible && (
                            <SearchPopUp
                                searchResults={searchResults}
                                searchQuery={searchQuery}
                            />
                        )}
                        {/* Search Pop-up END */}

                        <button
                            data-collapse-toggle='navbar-search'
                            type='button'
                            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm hover:text-white rounded-lg md:hidden  focus:outline-none bg-[#2C7B10]'
                            aria-controls='navbar-search'
                            aria-expanded='false'>
                            <span className='sr-only'>Open main menu</span>
                            <svg
                                className='w-5 h-5'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 17 14'>
                                <path
                                    stroke='currentColor'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M1 1h15M1 7h15M1 13h15'
                                />
                            </svg>
                        </button>
                        <button
                            onClick={() => navigate("/Sign-Up")}
                            type='button'
                            className='text-white bg-[#2C7B10] hidden md:block w-[240px] font-medium rounded-full text-sm px-4 py-2 text-center'>
                            ¡Adopta un compañero!
                        </button>
                    </div>

                    <div
                        className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
                        id='navbar-search'>
                        <ul className=' font-bold flex text-base flex-col p-4 md:p-0 mt-4 m border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0'>
                            <li>
                                {/* <a href="/" className="hover:underline block py-2 px-3 text-black rounded  md:p-0 md:dark:underline" aria-current="page">Incio</a> */}
                                <Link
                                    to='/'
                                    className='hover:underline block py-2 px-3 text-black rounded  md:p-0 md:dark:underline'
                                    aria-current='page'>
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                {/* <a href="/" className="block py-2 px-3 text-black rounded md:p-0 md:dark:hover:underline">Match</a> */}
                                <Link
                                    to='/Match'
                                    className='block py-2 px-3 text-black rounded md:p-0 md:dark:hover:underline'>
                                    Match
                                </Link>
                            </li>
                            <li>
                                {/* <a href="/" className="block py-2 px-3 text-black rounded md:p-0 md:dark:hover:underline">Nosotros</a> */}
                                <Link
                                    to='/About-Us'
                                    className='block py-2 px-3 text-black rounded md:p-0 md:dark:hover:underline'>
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                {/* <a href="/" className="block py-2 px-3 text-black rounded md:p-0 md:dark:hover:underline">Testimonios</a> */}
                                <Link
                                    to='/Testimonials'
                                    className='block py-2 px-3 text-black rounded md:p-0 md:dark:hover:underline'>
                                    Testimonios
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
