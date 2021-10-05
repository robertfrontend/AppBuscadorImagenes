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
    <BuscadorHeader>
      <form className="formulario" onSubmit={setFormulario}>
        <div>
          <h2 className="text-dark" style={{ fontWeight: "700" }}>
            Buscar imagenes
          </h2>
        </div>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Example: cafe"
            onChange={(e) => campoBuscar(e.target.value)}
          />
          <button className="btn btn-primary">Buscar</button>
        </div>
        <div className="row">
          <div className="col-12 p-0">
            <h6 className="p-0">Cantidad de imagenes a mostrar:</h6>
          </div>
          <div className="col-12">
            <select
              class="form-select form-select-sm"
              onChange={(e) => props.changeCount(e.target.value)}
            >
              <option selected value="10">
                10
              </option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>
        <div>
          {error ? (
            <div className="alert alert-danger">
              Antes de buscar escribe algo
            </div>
          ) : null}
        </div>
      </form>
    </BuscadorHeader>
  );
};

const BuscadorHeader = styled.div`
  input {
    font-weight: bold;
    border: none;
    background-color: #80808034;
    @media screen and (max-width: 500px) {
      margin: 0 1em;
    }
  }
  button {
    @media screen and (max-width: 500px) {
      margin: 0 1em;
    }
  }
  h6 {
    width: 100%;
  }
  select {
    width: 100%;
    font-weight: bold;
    border: none;
    color: #2c3e50;
    padding: 0.5em 1em;
    background-color: #80808034;
    display: block;
    outline: none;
    border-radius: 5px;
  }
`;
export default Buscador;
