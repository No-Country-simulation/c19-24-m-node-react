import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LogInImg from "../../Assets/AuthImg/LogInImg.png";

function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                // Asume que el token se encuentra en data.token
                localStorage.setItem('token', data.token);
                alert('Inicio de sesión exitoso');
                // Redirige al usuario o realiza alguna acción después de un inicio de sesión exitoso
            } else {
                alert(data.message || 'Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Error al iniciar sesión');
        }
    };

    return (
        <section className='min-h-screen grid grid-cols-2 items-center p-8'>
            <div className='row-start-1 row-end-2 flex justify-center self-center mt-[2rem] pt-[2rem]'>
                <span className='text-7xl font-semibold text-[#416A32]'>
                    La Felicidad <br /> Empieza Aquí
                </span>
            </div>
            <div className='row-span-2 justify-self-center  self-start flex flex-col items-center gap-y-10 bg-white rounded-lg'>
                <img
                    src={LogInImg}
                    alt='Imagen Crear Cuenta'
                    className='object-cover'
                />

                <form className='flex flex-col gap-y-5 w-[25rem]' onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor='email'
                            className='block mb-2 text-sm font-medium text-black/40'>
                            Correo Electrónico
                        </label>
                        <input
                            type='email'
                            id='email'
                            className='shadow-sm bg-transparent border border-[#9F9F9F] outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='password'
                            className='block mb-2 text-sm font-medium text-black/40'>
                            Contraseña
                        </label>
                        <input
                            type='password'
                            id='password'
                            className='shadow-sm bg-transparent border border-[#9F9F9F] outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='text-white bg-[#416A32] outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto mt-5'>
                        Iniciar Sesión
                    </button>
                </form>
                <button>
                    ¿Ya tienes una cuenta?{" "}
                    <Link
                        to='/'
                        className='text-[#2C7B10] hover:underline font-semibold'>
                        Inicia Sesión
                    </Link>
                </button>
            </div>
        </section>
    );
}

export default Login;
