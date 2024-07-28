import React, { useEffect, useRef } from 'react'

export const PruebaCors = () => {

    const form = useRef(null);

    const auxGet = async () => {
        const fetchPromise = await fetch("http://localhost:8080/pets/", {
            method: "GET",
            mode: "cors",
            credentials : "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })

        const res = await fetchPromise.json();

        console.log(res);
    }

    const auxPost = async (e) => {
        e.preventDefault();

        const obj = {}

        const formData = new FormData(form.current);

        formData.forEach((value, key) => (obj[key] = value));

        const fetchPromise = await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            mode: "cors",
            credentials: 'include', //si se lo pones da error
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })

        const res = await fetchPromise.json();

        console.log(res);
    }

    const auxPut = async () => {
        const fetchPromise = await fetch("http://localhost:8080/match/like/669fd7b84243ff9aaa66a3cc", {
            method: "PUT",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({aux : 123})
        })

        const res = await fetchPromise.json();

        console.log(res);
    }

    // useEffect(() => {
    //     aux();
    // }, [])


    return (
        <>
            <div onClick={auxGet}>PruebaCorsGet</div>
            <div onClick={auxPut}>PruebaCorsPut</div>
            <div>
            <form ref={form} className='flex flex-col gap-y-5 w-[25rem]' onSubmit={auxPost}>
                    <div>
                        <label
                            htmlFor='email'
                            className='block mb-2 text-sm font-medium text-black/40'>
                            Correo Electrónico
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='shadow-sm bg-transparent border border-[#9F9F9F] outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5'
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
                            name='password'
                            className='shadow-sm bg-transparent border border-[#9F9F9F] outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5'
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='text-white bg-[#416A32] outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto mt-5'>
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </>
    )
}
