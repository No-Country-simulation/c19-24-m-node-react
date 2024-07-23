function MatchCards({ name, age, breed, img }) {
    return (
        <figure className='w-[48%] h-[192px] rounded-2xl relative text-[#2b2b2e] shadow-md md:w-full md:max-w-[206px] md:h-[200px] lg:max-w-[195px] lg:h-[220px] xl:max-w-[21.5%]'>
            <img
                className='lg:max-h-[145px] md:max-h-[125px] h-full object-cover object-center w-full rounded-2xl max-h-[116px]'
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
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        />
                        <path
                            d='M4.5 4.5L13.5 13.5'
                            stroke='black'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
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
                <p className='text-sm capitalize text-gray-500'>{breed}</p>
            </figcaption>
        </figure>
    );
}

export default MatchCards;
