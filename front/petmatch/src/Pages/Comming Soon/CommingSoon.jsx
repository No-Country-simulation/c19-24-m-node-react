import { Link } from "react-router-dom";

function ComingSoon() {
    return (
        <div className='flex items-center justify-center min-h-screen bg-[#ABC2A3]'>
            <div className='text-center p-8 bg-white rounded-lg shadow-lg'>
                <h1 className='text-4xl font-bold text-[#7ba36c] mb-4'>
                    Próximamente
                </h1>
                <p className='text-lg text-gray-700 mb-6'>
                    Estamos trabajando duro para traerte esta sección. ¡Vuelve
                    pronto!
                </p>
                <div className='flex justify-center mb-6'>
                    <img
                        src='https://images.dog.ceo/breeds/pitbull/dog-3981540_1280.jpg'
                        alt='Mascotas'
                        className='rounded-full w-24 h-24 object-cover'
                        loading='lazy'
                    />
                </div>
                <Link to='/'>
                    <button className='bg-[#7ba36c] text-white font-bold py-2 px-4 rounded hover:bg-[#6b9459]'>
                        Volver al Inicio
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ComingSoon;
