function SearchCard({ data }) {
    const { img, name, personality } = data;
    // console.log(img, name, personality);

    return (
        <figure className='flex flex-col justify-center items-center w-[150px] shadow-md border rounded-md relative group'>
            <img
                className='object-cover object-top w-full h-[110px] rounded-md'
                src={img}
                alt={name}
                loading='lazy'
            />
            <span className='absolute text-sm top-0 px-3 h-[110px] w-full opacity-0 transition-opacity duration-300 justify-center items-center capitalize text-center z-10 bg-gray-100 group-hover:opacity-100 flex'>
                {personality}
            </span>
            <figcaption className='py-2 bg-[#BAD6AF] w-full text-center font-semibold font-mono'>
                <p>{name}</p>
            </figcaption>
        </figure>
    );
}

export default SearchCard;
