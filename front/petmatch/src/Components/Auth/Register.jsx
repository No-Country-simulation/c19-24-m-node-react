import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CrearCuentaImg from "../../Assets/AuthImg/CrearCuentaImg.png";
import Swal from "sweetalert2";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        repeatPassword: "",
        dateOfBirth: "",
        addressCity: "",
        terms: false,
    });

    const handleChange = (e) => {
        const { id, value, checked, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.repeatPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        try {
            // const response = await fetch("http://localhost:8080/users/", {
            const response = await fetch("https://c19-24-m-node.onrender.com/users/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    first_name: formData.fullName.split(" ")[0],
                    last_name: formData.fullName.split(" ")[1] || "",
                    email: formData.email,
                    password: formData.password,
                    date_of_birth: formData.dateOfBirth,
                    address: {
                        city: formData.addressCity,
                    },
                }),
            });

            const contentType = response.headers.get("content-type");

            if (contentType && contentType.indexOf("application/json") !== -1) {
                const data = await response.json();
                if (data.status === "success") {
                    alert("Usuario creado exitosamente");
                    //hacer algo después del registro exitoso
                    Swal.fire({
                        title: "Quieres empezar a adoptar?",
                        showDenyButton: true,
                        icon: "success",
                        // showCancelButton: true,
                        confirmButtonText: "Si",
                        denyButtonText: `Quizas luego`,
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            navigate("/Match");
                        } else if (result.isDenied) {
                            navigate("/");
                        }
                    });
                } else {
                    console.log(data);
                    // alert(data.payload);
                    Swal.fire({
                        title: "Ups",
                        text: `${data.payload}`,
                        icon: "error",
                    });
                }
            } else {
                const text = await response.text();
                console.error("Respuesta no JSON:", text);
                // alert("Ocurrió un error al crear el usuario");
                Swal.fire({
                    title: "Ups",
                    text: `Ocurrió un error al crear el usuario`,
                    icon: "error",
                });
            }
        } catch (error) {
            console.error("Error al crear el usuario:", error);
            // alert("Error al crear el usuario");
            Swal.fire({
                title: "Ups",
                text: `Ocurrió un error al crear el usuario`,
                icon: "error",
            });
        }
    };

    return (
        <section className='min-h-screen grid grid-cols-2 items-center p-8'>
            <div className='row-start-1 row-end-2 flex justify-self-center self-end pt-[3rem] mt-[3rem] '>
                <span className='text-7xl font-semibold text-[#416A32]'>
                    La Felicidad <br /> Empieza Aquí
                </span>
            </div>
            <div className='row-span-2 justify-self-center self-start flex flex-col items-center gap-y-10 bg-white rounded-lg '>
                <img
                    src={CrearCuentaImg}
                    alt='Imagen Crear Cuenta'
                    className='object-cover'
                />

                <form className='flex flex-col gap-y-5 w-[25rem]'>
                    <div>
                        <label
                            htmlFor='full-name'
                            className='block mb-2 text-sm font-medium text-black/40'>
                            Nombre Completo
                        </label>
                        <input
                            type='text'
                            id='fullName'
                            className='shadow-sm bg-transparent border border-[#9F9F9F] outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5'
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
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
                    <div>
                        <label
                            htmlFor='repeat-password'
                            className='block mb-2 text-sm font-medium text-black/40'>
                            Confirma Contraseña
                        </label>
                        <input
                            type='password'
                            id='repeatPassword'
                            className='shadow-sm bg-transparent border border-[#9F9F9F] outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5'
                            value={formData.repeatPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='dateOfBirth'
                            className='block mb-2 text-sm font-medium text-black/40'>
                            Fecha de Nacimiento
                        </label>
                        <input
                            type='date'
                            id='dateOfBirth'
                            className='shadow-sm bg-transparent border border-[#9F9F9F] outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5'
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='addressCity'
                            className='block mb-2 text-sm font-medium text-black/40'>
                            Ciudad
                        </label>
                        <input
                            type='text'
                            id='addressCity'
                            className='shadow-sm bg-transparent border border-[#9F9F9F] outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5'
                            value={formData.addressCity}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='flex items-start'>
                        <div className='flex items-center h-5'>
                            <input
                                id='terms'
                                type='checkbox'
                                value=''
                                className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300'
                                checked={formData.terms}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <label
                            htmlFor='terms'
                            className='ms-2 text-sm font-medium'>
                            Estoy de acuerdo con los{" "}
                            <a
                                href='/'
                                className='text-[#2C7B10] hover:underline font-semibold'>
                                términos y condiciones
                            </a>
                        </label>
                    </div>
                    <button
                        type='submit'
                        className='text-white bg-[#416A32] outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto mt-5'
                        onClick={handleSubmit}>
                        Registrarse
                    </button>
                </form>
                <button>
                    ¿Ya tienes una cuenta?{" "}
                    <Link
                        to='/Log-In'
                        className='text-[#2C7B10] hover:underline font-semibold'>
                        Inicia Sesión
                    </Link>
                </button>
            </div>
        </section>
    );
}

export default Register;
