import { Link } from "react-router-dom";

function ComingSoon() {
    return (
        <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-[#ABC2A3] to-[#8FA88F]'>
            <div className='text-center p-10 bg-white rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105'>
                <h1 className='text-5xl font-extrabold text-[#5F7A61] mb-6'>
                    Próximamente
                </h1>
                <p className='text-lg text-gray-700 mb-8'>
                    Estamos trabajando duro para traerte esta sección. ¡Vuelve
                    pronto!
                </p>
                <div className='flex justify-center mb-8'>
                    <img
                        src='https://images.dog.ceo/breeds/pitbull/dog-3981540_1280.jpg'
                        alt='Mascotas'
                        className='rounded-full w-28 h-28 object-cover border-4 border-[#5F7A61]'
                        loading='lazy'
                    />
                </div>
                <Link to='/'>
                    <button className='bg-[#5F7A61] text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-[#4e6651] transition-colors duration-300'>
                        Volver al Inicio
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ComingSoon;
