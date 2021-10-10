import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

import Buscador from "./components/Buscador";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  // datos del formulario
  const [datosform, datosFormulario] = useState("Republica Dominicana");
  // guardamos los resultss de la api
  const [datosbusqueda, setDataSearch] = useState([]);

  // state pages
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, saveTotalPages] = useState(5);
  const [limit, setLimit] = useState(50);
  const [isloading, setLoading] = useState(false);

  // useeffect para api
  useEffect(() => {
    searchPhotoApi();
  }, [datosform, paginaactual]);

  // funcion para buscar api
  const searchPhotoApi = async () => {
    setLoading(true);
    // evitar que haga una consulta a la api
    if (datosform === "") return;

    const key = "14627062-c54f3cc4d2d2be2769cccca0c"; // mi api key

    // url de la api
    const api = `https://pixabay.com/api/?key=${key}&q=${datosform}&per_page=${limit}
        &page=${paginaactual}`;

    // respuesta con fetch
    const respuesta = await fetch(api);
    // guardamos los resultss en un json
    const results = await respuesta.json();

    // guardamos los datos en el state
    setDataSearch(results.hits);

    // calcular paginas
    const calculatePages = Math.ceil(results.totalHits / limit);
    saveTotalPages(calculatePages);

    // mover la pantalla hacia arriba
    // const form = document.querySelector(".formulario");
    // form.scrollIntoView({ behavior: "smooth" });
    setLoading(false);
  };

  // func pagina anterior
  const paginaAtnerior = () => {
    // retroceder 1 pagina
    const newPageCurrent = paginaactual - 1;
    if (newPageCurrent === 0) return;
    // guardamos la pagina atras en els tate
    guardarPaginaActual(newPageCurrent);
  };

  // func pagina siguiente
  const paginaSiguiente = () => {
    // avanzar 1 pagina
    const newPageCurrent = paginaactual + 1;
    // parar hasta el limite de paginas
    if (newPageCurrent > totalpaginas) return;
    // guardamos la pagina adelante en el state
    guardarPaginaActual(newPageCurrent);
  };

  const changeCount = (e) => {
    setLimit(e);
    console.log(e);
  };

  // tit
  const dtsTitulo = datosform;

  return (
    <>
      <Header />

      {/* obtenemos los datos del formulario */}
      <Buscador datosFormulario={datosFormulario} changeCount={changeCount} />

      {isloading && (
        <div className="text-center">
          <div
            className="spinner-border text-info "
            style={{ width: "3em", height: "3em" }}
            role="status"
          ></div>
        </div>
      )}

      {!isloading && (
        <>
          {/* le pasamos los resultss de la api */}
          <List datosbusqueda={datosbusqueda} busqueda={dtsTitulo} />
        </>
      )}

      <div className="text-center m-4">
        {/* ternario para revisar si esta en la primera pagina y mostrar el boton */}
        {paginaactual === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={paginaAtnerior}
          >
            &laquo; Anterior
          </button>
        )}

        {paginaactual === totalpaginas ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={paginaSiguiente}
          >
            Siguiente
          </button>
        )}
      </div>

      <Footer />
    </>
  );
}

const ContentSearch = styled.div`
  width: 100%;
  height: 60vh;
  background: url("https://picsum.photos/2000");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .ses {
    width: inherit;
    height: inherit;
    background-color: #00000063;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content {
      width: 40%;
      text-align: center;
      input {
        width: 80%;
        height: 6vh;
        font-size: 1.2em;
        margin: 0 auto;
      }
    }
  }
`;

export default App;
