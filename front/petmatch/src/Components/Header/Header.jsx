import Logo from "../../Assets/Logos/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SearchPopUp from "../Search Pop-up/SearchPopUp";
import PetsContext from "../../Context/GlobalContext";

function Header() {
    const navigate = useNavigate();

    const { allPets, userID } = useContext(PetsContext);

    // console.log(userID.id);

    const [isVisible, setIsVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    //esto para el condicional del btn de adoptar una mascota
    // const token = localStorage.getItem("token");
    const [token, setToken] = useState(localStorage.getItem("token"));

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        const results = simulateSearch(query);
        setSearchResults(results);
    };

    // console.log(petsForSearch, "PETS FOR SEARCH");
    const simulateSearch = (query) => {
        if (query === "") {
            return [];
        }

        const lowerCaseQuery = query.toLowerCase();

        return allPets.filter(
            (pet) =>
                pet.sex.toLowerCase().includes(lowerCaseQuery) ||
                pet.breed.toLowerCase().includes(lowerCaseQuery) ||
                pet.specie.toLowerCase().includes(lowerCaseQuery)
        );
    };

    // Carga el Token siempre que el componente se monte
    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);

    // Simular el log out
    const handleLogout = () => {
        localStorage.removeItem("token");
        setToken(null);
        navigate("/");
    };

    return (
        <header>
            <nav className='bg-transparent relative z-20'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                    {/* poner link de react router dom y q te redirija a match */}
                    {/* <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    </a> */}
                    <Link to={"/"} className='flex items-center'>
                        <img src={Logo} className='w-48' alt='logo' />
                    </Link>

                    <section className='flex justify-start gap-x-4'>
                        <div
                            className='items-center justify-between hidden w-full md:flex md:w-auto '
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
                                    {/* <a
                                    href='/#About-Us'
                                    className='block py-2 px-3 text-black rounded md:p-0 md:dark:hover:underline'>
                                    Nosotros
                                </a> */}
                                    <Link
                                        to='/About-Us'
                                        className='block py-2 px-3 text-black rounded md:p-0 md:dark:hover:underline'>
                                        Nosotros
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href='/#Testimonials'
                                        className='block py-2 px-3 text-black rounded md:p-0 md:dark:hover:underline'>
                                        Testimonios
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Search button */}
                        <div className='flex  md:space-x-3 relative'>
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
                                    className='block xl:w-[280px] lg:w-[160px] p-2 ps-10 text-sm border-gray-300 rounded-full bg-gray-50 dark:bg-white outline-none cursor-pointer  dark:placeholder-gray-400 dark:text-black  dark:focus:border-none'
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

                            {!token && (
                                <button
                                    onClick={() =>
                                        navigate(!token ? "/Log-In" : "/Match")
                                    }
                                    type='button'
                                    className='text-white bg-[#2C7B10] hidden md:block w-[240px] font-medium rounded-full text-sm px-4 py-2 text-center'>
                                    ¡Adopta un compañero!
                                </button>
                            )}

                            {/* MODAL START */}
                            {token && (
                                <div className='relative'>
                                    <button
                                        onClick={() =>
                                            setIsDropdownVisible(
                                                !isDropdownVisible
                                            )
                                        }
                                        type='button'
                                        className='text-white bg-[#2C7B10] hidden md:flex justify-between items-center w-[150px] font-medium rounded-full text-sm px-6 py-2 text-center'>
                                        Mi cuenta
                                        <span>
                                            <svg
                                                width='24'
                                                height='24'
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                xmlns='http://www.w3.org/2000/svg'>
                                                <path
                                                    d='M11.1808 15.8297L6.54199 9.20285C5.89247 8.27496 6.55629 7 7.68892 7L16.3111 7C17.4437 7 18.1075 8.27496 17.458 9.20285L12.8192 15.8297C12.4211 16.3984 11.5789 16.3984 11.1808 15.8297Z'
                                                    fill='#fff'
                                                />
                                            </svg>
                                        </span>
                                    </button>

                                    {isDropdownVisible && (
                                        <div className='absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg'>
                                            <ul className='py-1'>
                                                <li>
                                                    <Link
                                                        to={`/Account-Settings/${userID}`}
                                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                                                        Mi cuenta
                                                    </Link>
                                                </li>

                                                <li>
                                                    <Link
                                                        to='/Matches'
                                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                                                        Matches
                                                    </Link>
                                                </li>

                                                <li>
                                                    <button
                                                        onClick={handleLogout}
                                                        className='w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                                                        Cerrar sesión
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                            {/* MODAL END */}
                        </div>
                    </section>
                </div>
            </nav>
        </header>
    );
}

export default Header;
