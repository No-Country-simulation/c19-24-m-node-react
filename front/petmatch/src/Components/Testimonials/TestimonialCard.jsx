function TestimonialCard({ owner, testimonial, pet, img }) {
    return (
        <figure className='w-[320px] bg-white rounded-2xl'>
            <img
                className='w-full h-[200px] object-cover object-top rounded-t-2xl'
                src={img}
                alt={`${owner} - ${pet}`}
                width={"100%"}
                height={"100%"}
            />
            <figcaption className='justify-between p-4 items-start h-[200px]  flex flex-col text-[#141414]'>
                {testimonial}
                <span className='pt-2 font-bold flex flex-col'>
                    {owner}
                    <small className='text-gray-500'>{pet}</small>
                </span>
            </figcaption>
        </figure>
    );
}

export default TestimonialCard;
