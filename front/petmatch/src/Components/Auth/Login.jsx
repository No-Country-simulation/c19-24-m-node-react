import LogInImg from '../../Assets/AuthImg/LogInImg.png';

function Login() {
    return (
        <section className="min-h-screen grid grid-cols-2 items-center p-8">
            <div className="row-start-1 row-end-2 flex justify-center self-center mt-[2rem] pt-[2rem]">
                <span className="text-7xl font-semibold text-[#416A32]">
                    La Felicidad <br /> Empieza Aquí
                </span>
            </div>
            <div className="row-span-2 justify-self-center  self-start flex flex-col items-center gap-y-10 bg-white rounded-lg">
                <img src={LogInImg} alt="Imagen Crear Cuenta" className="object-cover" />

                <form className="flex flex-col gap-y-5 w-[25rem]">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-black/40">Correo Electrónico</label>
                        <input type="email" id="email" className="shadow-sm bg-transparent border border-[#9F9F9F] outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-black/40">Contraseña</label>
                        <input type="password" id="password" className="shadow-sm bg-transparent border border-[#9F9F9F] outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
                    </div>
                    <button type="submit" className="text-white bg-[#416A32] outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto mt-5">
                        Iniciar Sesión
                    </button>
                </form>
                <span>¿Ya tienes una cuenta? <a href="/" className="text-[#2C7B10] hover:underline font-semibold">Inicia Sesión</a></span>
            </div>
        </section>
    );
}

export default Login;
