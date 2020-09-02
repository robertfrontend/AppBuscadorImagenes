import React, { Fragment } from 'react'
import Tarjeta from './Tarjeta'

const Lista = ( {datosbusqueda, busqueda} ) => {


    return ( 
        <Fragment>


            <h2 className='text-center pb-5'> Resultado:
                <span className='text-primary'> { busqueda } </span> 
            </h2>

            {/* iteramos el resultado */}
            <div className="lista">
                {
                    datosbusqueda.map(images => (
                        <Tarjeta 
                            key={images.id}
                            images={images}
                        />
                    ))
                }
            </div>

        </Fragment>
     );
}
 
export default Lista;