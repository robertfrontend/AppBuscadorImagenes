import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import Tarjeta from "./Tarjeta";

const List = ({ datosbusqueda, busqueda }) => {
  const handleSelect = () => {};

  return (
    <>
      <ListDad>
        <ul>
          {datosbusqueda.map((image, index) => (
            <li key={index} onClick={() => handleSelect(image, index)}>
              <LazyLoadImage
                src={image.largeImageURL} // use normal <img> attributes as props
                className="li_image"
              />
              {/* <img src={image.largeImageURL} alt="" className="li_image" /> */}
              <div className="view">
                <div>
                  <span>
                    {" "}
                    <i className="fas fa-thumbs-up"></i>
                    {Intl.NumberFormat("de-DE").format(image.likes)}
                  </span>
                </div>
                <div>
                  <span>
                    {" "}
                    <i className="fas fa-comment"></i>
                    {Intl.NumberFormat("de-DE").format(image.comments)}
                  </span>
                </div>
                <div>
                  <span>
                    {" "}
                    <i className="fas fa-eye"></i>
                    {Intl.NumberFormat("de-DE").format(image.views)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </ListDad>
    </>
  );
};

const ListDad = styled.div`
  width: 100%;
  overflow-y: hidden;
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0 !important;
  }

  li {
    height: 250px;
    flex-grow: 1;
    position: relative;
    margin: 1em;
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
    position: absolute;
    bottom: -2em;
    left: auto;
    right: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
    div {
      padding: 0.5em;
      color: transparent;
      i {
        padding: 0.2em;
      }
      margin: 0 1em;
    }
  }

  li:hover {
    .view {
      bottom: 0em;
      background-color: #00000030;
      div {
        color: white;
      }
    }
  }
`;

export default List;
