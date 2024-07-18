function TestimonialCard({ owner, testimonial, pet, img }) {
    return (
        <figure className='w-[370px] bg-white rounded-2xl'>
            <img
                className='w-full object-cover rounded-t-2xl'
                src={img}
                alt={`${owner} - ${pet}`}
            />
            <figcaption className='p-4 flex flex-col text-[#141414]'>
                {testimonial}
                <span className='pt-2 font-bold'>{owner}</span>
                <small className='text-gray-500'>{pet}</small>
            </figcaption>
        </figure>
    );
}

export default TestimonialCard;
