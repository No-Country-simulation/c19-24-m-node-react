function CatalogueFilter() {
    return (
        <div className='bg-white p-6 w-full sticky top-0'>
            <h2 className='text-2xl font-bold mb-4'>Filtro</h2>

            <div className='mb-4'>
                <h3 className='font-semibold mb-2'>Género</h3>
                <div>
                    <label className='inline-flex items-center'>
                        <input type='checkbox' className='form-checkbox' />
                        <span className='ml-2'>Macho</span>
                    </label>
                </div>
                <div>
                    <label className='inline-flex items-center'>
                        <input type='checkbox' className='form-checkbox' />
                        <span className='ml-2'>Hembra</span>
                    </label>
                </div>
            </div>

            <div className='mb-4'>
                <h3 className='font-semibold mb-2'>Nivel de Actividad</h3>
                <div>
                    <label className='inline-flex items-center'>
                        <input type='checkbox' className='form-checkbox' />
                        <span className='ml-2'>Bajo</span>
                    </label>
                </div>
                <div>
                    <label className='inline-flex items-center'>
                        <input type='checkbox' className='form-checkbox' />
                        <span className='ml-2'>Medio</span>
                    </label>
                </div>
                <div>
                    <label className='inline-flex items-center'>
                        <input type='checkbox' className='form-checkbox' />
                        <span className='ml-2'>Alto</span>
                    </label>
                </div>
            </div>

            <div className='mb-4'>
                <h3 className='font-semibold mb-2'>Edad</h3>
                <div className='flex space-x-2'>
                    <input
                        type='number'
                        placeholder='Min'
                        className='w-full p-2 border rounded'
                    />
                    <input
                        type='number'
                        placeholder='Max'
                        className='w-full p-2 border rounded'
                    />
                </div>
            </div>

            <div className='mb-4'>
                <h3 className='font-semibold mb-2'>Tamaño</h3>
                <div>
                    <label className='inline-flex items-center'>
                        <input type='checkbox' className='form-checkbox' />
                        <span className='ml-2'>Pequeño</span>
                    </label>
                </div>
                <div>
                    <label className='inline-flex items-center'>
                        <input type='checkbox' className='form-checkbox' />
                        <span className='ml-2'>Mediano</span>
                    </label>
                </div>
                <div>
                    <label className='inline-flex items-center'>
                        <input type='checkbox' className='form-checkbox' />
                        <span className='ml-2'>Grande</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default CatalogueFilter;
