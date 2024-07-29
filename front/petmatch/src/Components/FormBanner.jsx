import misAdopciones from "../Assets/GeneralImages/misAdopciones.png";
import bigNose from "../Assets/GeneralImages/bigNose.png";

function FormBanner() {
    return (
        <section className='py-16 flex justify-between items-center w-full gap-x-8'>
            <section className='bg-[#4c7a3c] text-white w-1/2 p-6 rounded-md  h-[345px] shadow-md'>
                <h2 className='text-3xl font-bold'>Mis Adopciones</h2>
                <figure className='flex items-center justify-between gap-x-1 mt-4'>
                    <figcaption className='text-5xl font-bold'>
                        ¡Aún no has adoptado ninguna mascota!
                    </figcaption>
                    <img src={misAdopciones} alt='Puppies' />
                </figure>
            </section>
            <section className='w-1/2 h-[345px] shadow-md bg-[#BAD6AF] p-6 rounded-md'>
                <h3 className='text-3xl font-bold text-[#2C7B10]'>
                    ¿SABÍAS QUE...?
                </h3>
                <figure className='flex items-center justify-between gap-x-1 mt-3'>
                    <figcaption className='text-[#2C7B10] line-clamp-6 font-semibold w-1/2'>
                        Los perros tienen 220 millones de receptores olfativos
                        en sus narices, en comparación con los 5 millones que
                        tienen los humanos. Esto les permite detectar olores a
                        distancias y niveles de concentración que son imposibles
                        para nosotros, ¡hasta 100,000 veces más sensibles!
                    </figcaption>
                    <img src={bigNose} alt='Puppies' />
                </figure>
            </section>
        </section>
    );
}

export default FormBanner;
