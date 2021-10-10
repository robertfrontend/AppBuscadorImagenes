import React, { Fragment, useState } from "react";
import styled from "styled-components";

const Buscador = (props) => {
  const [camp, campoBuscar] = useState("");

  const [error, setError] = useState(false);

  const setFormulario = (e) => {
    e.preventDefault();

    // validar formulario
    if (camp.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // enviar datos
    props.datosFormulario(camp);
  };

  return (
    // <BuscadorHeader>
    //   <form className="formulario" onSubmit={setFormulario}>
    //     <div>
    //       <h2 className="text-dark" style={{ fontWeight: "700" }}>
    //         Buscar imagenes
    //       </h2>
    //     </div>
    //     <div>
    //       <input
    //         type="text"
    //         className="form-control"
    //         placeholder="Example: cafe"
    //         onChange={(e) => campoBuscar(e.target.value)}
    //       />
    //       <button className="btn btn-primary">Buscar</button>
    //     </div>
    //     <div className="row">
    //       <div className="col-12 p-0">
    //         <h6 className="p-0">Cantidad de imagenes a mostrar:</h6>
    //       </div>
    //       <div className="col-12">
    //         <select
    //           class="form-select form-select-sm"
    //           onChange={(e) => props.changeCount(e.target.value)}
    //         >
    //           <option selected value="10">
    //             10
    //           </option>
    //           <option value="20">20</option>
    //           <option value="30">30</option>
    //         </select>
    //       </div>
    //     </div>
    //     <div>
    //       {error ? (
    //         <div className="alert alert-danger">
    //           Antes de buscar escribe algo
    //         </div>
    //       ) : null}
    //     </div>
    //   </form>
    // </BuscadorHeader>
    <ContentSearch>
      <div className="ses">
        <div className="content">
          <h1>App Pixabay React</h1>
          <p>
            Proyecto personal de <a href="#">@Robertfronted</a> inspirado en
            Pixabay
          </p>
          <form className="formulario" onSubmit={setFormulario}>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Busca imagenes, vetores"
              onChange={(e) => campoBuscar(e.target.value)}
            />
            <select
              class="form-select form-select-sm"
              onChange={(e) => props.changeCount(e.target.value)}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50" selected>
                50
              </option>
            </select>
          </form>
        </div>
      </div>
    </ContentSearch>
  );
};
const ContentSearch = styled.div`
  width: 100%;
  min-height: 60vh;
  background: url("https://picsum.photos/2000");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 1em;
  .ses {
    width: inherit;
    min-height: inherit;
    background-color: #00000096;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content {
      width: 40%;
      text-align: center;
      color: white;
      input {
        height: 5vh;
        font-size: 1.1em;
        margin: 0 auto;
        padding: 0 1em;
      }
      select {
        width: 100%;
        height: 5vh;
        font-size: 1.1em;
        margin: 1em auto;
        padding: 0 1em;
        color: #2c3e50;
        outline: none;
        border-radius: 4px;
      }

      @media (max-width: 698px) {
        width: 100%;
        padding: 0 1em;
      }
    }
  }
`;

export default Buscador;
