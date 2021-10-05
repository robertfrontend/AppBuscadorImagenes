import React from "react";
import styled from "styled-components";
import Tarjeta from "./Tarjeta";

const List = ({ datosbusqueda, busqueda }) => {
  const handleSelect = () => {};

  return (
    <>
      <h4 className="text-center pb-5">
        {" "}
        Resultado:
        <span className="text-primary"> {busqueda} </span>
      </h4>

      {/* iteramos el resultado */}
      <div>
        <ListDad>
          <ul>
            {datosbusqueda.map((images, index) => (
              <li key={index} onClick={() => handleSelect(images, index)}>
                <img src={images.largeImageURL} alt="" className="li_image" />
                <div className="view">
                  <div>
                    <span>
                      {" "}
                      <i className="fas fa-thumbs-up"></i>
                      {Intl.NumberFormat("de-DE").format(images.likes)}
                    </span>
                  </div>
                  <div>
                    <span>
                      {" "}
                      <i className="fas fa-comment"></i>
                      {Intl.NumberFormat("de-DE").format(images.comments)}
                    </span>
                  </div>
                  <div>
                    <span>
                      {" "}
                      <i className="fas fa-eye"></i>
                      {Intl.NumberFormat("de-DE").format(images.views)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </ListDad>
      </div>
    </>
  );
};

const ListDad = styled.div`
  width: 100%;
  overflow-x: hidden;
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0 !important;
  }

  li {
    height: 250px;
    flex-grow: 1;
    padding: 0 !important;
    position: relative;
  }

  li:hover {
    cursor: pointer;
  }

  li:last-child {
    flex-grow: 5;
  }

  .li_image {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: top;
  }

  @media (max-width: 700px) {
    .li_image {
      margin: 0;
    }
  }
  .view {
    visibility: hidden;
    position: absolute;
    bottom: 0;
    left: auto;
    right: auto;
    width: 100%;
    background-color: #ffffff55;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);

    div {
      padding: 0.5em;
      color: white;
      i {
        color: #ffffffa6;
        padding: 0.2em;
      }
      margin: 0 1em;
    }
  }

  li:hover {
    .view {
      visibility: visible;
    }
  }
`;

export default List;
