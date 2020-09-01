import React, { Fragment } from 'react'
import Tarjeta from './Tarjeta'

const Lista = ( {datosbusqueda, busqueda} ) => {

    console.log(datosbusqueda);

    return ( 
        <Fragment>

            {
                (datosbusqueda === []) ? null
                :
                <h2 className='text-center'> Resultado:
                    <span className='text-primary'> { busqueda } </span> 
                </h2>
            }

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