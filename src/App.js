import React, { Fragment, useEffect, useState } from 'react';
import Buscador from './components/Buscador';
import Footer from './components/Footer';
import Header from './components/Header'
import Lista from './components/Lista'


function App() {

  // datos del formulario
  const [ datosform, datosFormulario ] = useState('Republica Dominicana')
  // guardamos los resultados de la api
  const [ datosbusqueda, setDatosBusqueda ] = useState([])

  // state pages
  const [ paginaactual, guardarPaginaActual ] = useState(1)
  const [ totalpaginas, guardarTotalPaginas ] = useState(5)

  // useeffect para api
  useEffect(() => {

    // funcion para buscar api
    const buscarFotoAPI = async () => {
      // evitar que haga una consulta a la api
      if(datosform === '') return

      const limiteFotos = 30 // limite de foros
      const key = '14627062-c54f3cc4d2d2be2769cccca0c' // mi api key
  
      // url de la api
      const api = 
      `https://pixabay.com/api/?key=${key}&q=${datosform}&per_page=${limiteFotos}
        &page=${paginaactual}`

      // respuesta con fetch
      const respuesta = await fetch(api)
      // guardamos los resultados en un json
      const resultado = await respuesta.json()

      // guardamos los datos en el state
      setDatosBusqueda(resultado.hits)

      // calcular paginas
      const calcularPaginas = Math.ceil(resultado.totalHits / limiteFotos)
      guardarTotalPaginas(calcularPaginas)

      // mover la pantalla hacia arriba
      const formulario = document.querySelector('.formulario')
      formulario.scrollIntoView({behavior: "smooth"})

    }

    buscarFotoAPI()

  }, [datosform, paginaactual])


  // func pagina anterior
  const paginaAtnerior = () => {
    // retroceder 1 pagina
    const nuevaPaginaActual = paginaactual - 1
    if(nuevaPaginaActual === 0) return;
    // guardamos la pagina atras en els tate
    guardarPaginaActual(nuevaPaginaActual)

  }

  // func pagina siguiente
  const paginaSiguiente = () => {
    // avanzar 1 pagina
    const nuevaPaginaActual = paginaactual + 1
    // parar hasta el limite de paginas
    if(nuevaPaginaActual > totalpaginas) return;
    // guardamos la pagina adelante en el state
    guardarPaginaActual(nuevaPaginaActual)

  }
  // tit
  const dtsTitulo = datosform

  return (
    <Fragment>
        <Header />

        {/* obtenemos los datos del formulario */}
        <Buscador 
          datosFormulario={datosFormulario}
        />

        {/* le pasamos los resultados de la api */}
        <Lista 
          datosbusqueda={datosbusqueda}
          busqueda={dtsTitulo}
        />

      <div className='text-center m-4'>

      {/* ternario para revisar si esta en la primera pagina y mostrar el boton */}
        {
            (paginaactual === 1) ? null 
            : (
                <button 
                  type='button'
                  className='btn btn-info mr-1'
                  onClick={paginaAtnerior}
                >
                  &laquo; Anterior
                </button>
            )
        }

        {
          (paginaactual === totalpaginas) ? null
          : 
          (
            <button 
              type='button'
              className='btn btn-info mr-1'
              onClick={paginaSiguiente}
            >
              Siguiente
            </button>
          )
        }
        </div>

        <Footer />

    </Fragment>
  );
}

export default App;
