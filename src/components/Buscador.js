import React, { Fragment, useState } from 'react';

const Buscador = ( {datosFormulario} ) => {

    const [ camp, campoBuscar ] = useState('')

    const [ error, setError ] = useState(false)

    const setFormulario = (e) => {
        e.preventDefault()

        // validar formulario
        if(camp.trim() === '') {
            setError(true)
            return
        }
        setError(false)

        // enviar datos
        datosFormulario(camp)

    }

    return ( 
        <Fragment>
            <form className='formulario'
                onSubmit={setFormulario}
            >
                <div>
                    <h2>Buscar imagenes</h2>
                </div>
                <div>
                    <input type="text"
                        className='form-control'
                        placeholder='Example: cafe'
                        onChange={e => campoBuscar(e.target.value)}
                    />
                    <button className='btn btn-primary'>
                        Buscar
                    </button>
                </div>
                <div>
                    {
                        error ? 
                        <div className='alert alert-danger'>
                            Antes de buscar escribe algo
                        </div>
                        : null
                    }
                </div>
            </form>
        </Fragment>
     );
}
 
export default Buscador;