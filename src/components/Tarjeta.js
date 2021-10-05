import React, { Fragment } from "react";

import like from "../images/like.svg";
import commensts from "../images/comments.svg";
import viewss from "../images/view.png";

const Tarjeta = ({ images }) => {
  // previewURL views
  const {
    tags,
    webformatWidth,
    webformatHeight,
    largeImageURL,
    views,
    likes,
    comments,
  } = images;

  return (
    <>
      <div
        width={webformatWidth}
        height={webformatHeight}
        className="padreTarjeta"
      >
        <img
          className="img"
          width={webformatWidth}
          height={webformatHeight}
          src={largeImageURL}
          alt={tags}
        />

        {/* ver imagen completa */}
        <div className="otrapage">
          <a href={largeImageURL} target="_blank" rel="noopener noreferrer">
            Full Width &uarr;
          </a>
        </div>
        {/* mostrar los likes, comentarios, etc */}
        <div className="muestra">
          <div>
            <img src={like} alt="" />
            <span> {Intl.NumberFormat("de-DE").format(likes)}</span>
          </div>
          <div>
            <img src={commensts} alt="" />
            <span> {Intl.NumberFormat("de-DE").format(comments)}</span>
          </div>
          <div>
            <img src={viewss} alt="" />
            <span> {Intl.NumberFormat("de-DE").format(views)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tarjeta;
