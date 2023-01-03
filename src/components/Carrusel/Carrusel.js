import React from "react";

function Carrusel() {
  return (
    <div className="carruselContainer">
      <div className="carruselSlide">
        <div className="Carrusel">
          <a href="/">
            <img className="imgCarrusel" src="./images/imagen1.jpeg" alt="imageCarrusel" />
          </a>
          <div className="CarruselText">
            <p>15% de descuento en todos los tratamientos</p>
          </div>
        </div>
      </div>
      <div className="carruselSlide">
        <div className="Carrusel">
          <a href="/">
            <img className="imgCarrusel" src="./images/imagen11.jpeg" alt="imageCarrusel" />
          </a>
          <div className="CarruselText">
            <p>15% de descuento en todos los tratamientos</p>
          </div>
        </div>
      </div>
      <div className="carruselSlide">
        <div className="Carrusel">
          <a href="/">
            <img className="imgCarrusel" src="./images/imagen12.jpeg" alt="imageCarrusel" />
          </a>
          <div className="CarruselText">
            <p>15% de descuento en todos los tratamientos</p>
          </div>
        </div>
      </div>
      <div>
        <button>
          <img className="arrows" src="./images/arrows/arrow-left-svg.svg" alt="arrow left" />
        </button>
        <button>
          <img className="arrows" src="./images/arrows/arrow-right-svg.svg" alt="arrow right" />
        </button>
      </div>
    </div>
  );
}

export default Carrusel;
