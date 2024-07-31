import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PetsContext from "../../Context/GlobalContext";

function MatchCards({ name, age, breed, img }) {
    const navigate = useNavigate();

    const { userID } = useContext(PetsContext);

    return (
        <figure className='w-[48%] h-[192px] rounded-2xl relative text-[#2b2b2e] shadow-md md:w-full md:max-w-[206px] md:h-[200px] lg:max-w-[195px] lg:h-[220px] xl:max-w-[21.5%]'>
            <img
                className='lg:max-h-[145px] md:max-h-[125px] h-full object-cover object-top w-full rounded-2xl max-h-[116px]'
                src={img}
                alt={name}
                loading='lazy'
            />
            <button className='absolute top-2 right-2 bg-[#ffffff40] rounded-full p-[2px]'>
                <svg
                    width='24'
                    height='24'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <g opacity='0.25'>
                        <path
                            d='M13.5 4.5L4.5 13.5'
                            stroke='black'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            d='M4.5 4.5L13.5 13.5'
                            stroke='black'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </g>
                </svg>
            </button>
            <figcaption className='py-3 px-4'>
                <p className='font-thin capitalize flex justify-between items-center text-base'>
                    {name}
                    {age && (
                        <span className='text-sm font-semibold'>
                            {age} years
                        </span>
                    )}
                </p>
                <div className='flex justify-between items-center text-base'>
                    <p className='text-sm capitalize text-gray-500 mt-0.5'>
                        {breed}
                    </p>
                    {/* aca modificar el btn para q se vea mas bonito y obtener el userid de alguna manera para q cuando se le da al btn de adoptar q te redireccione al formulario */}
                    <button
                        onClick={() => navigate(`/Account-Settings/${userID}`)}
                        className='bg-[#2C7B10] hover:bg-[#2e7415] mt-0.5 text-xs text-white font-semibold py-1 px-2 rounded-md'>
                        Adoptar
                    </button>
                </div>
            </figcaption>
        </figure>
    );
}

export default MatchCards;
