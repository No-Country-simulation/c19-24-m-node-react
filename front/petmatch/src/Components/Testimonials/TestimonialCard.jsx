function TestimonialCard({ data }) {
    const { last_name, first_name, comment, img } = data;

    return (
        <figure className='w-[320px] bg-white md:rounded-2xl rounded-lg'>
            <img
                className='w-full md:h-[200px] h-[280px] object-cover object-top md:rounded-t-2xl rounded-t-lg'
                src={img}
                alt={`${first_name} - ${last_name}`}
                width={"100%"}
                height={"100%"}
            />
            <figcaption className='justify-between p-5 items-start md:h-[200px] h-[220px] flex flex-col text-[#141414]'>
                <p className='md:line-clamp-4 line-clamp-5'>{comment}</p>
                <span className='pt-2 font-bold'>
                    {first_name} {last_name}
                </span>
            </figcaption>
        </figure>
    );
}

export default TestimonialCard;
