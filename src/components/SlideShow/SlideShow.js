import React, { useRef } from "react";

const siguiente = () => {
  console.log("Siguiente");
};

const anterior = () => {
  console.log("Anterior");
};

function SlideShow() {
  const slideshow = useRef(null);
  return (
    <div className="contenedorPrincipal">
      <div className="contenedorSlideShow" ref={slideshow}>
        <div className="slide">
          <a href="/">
            <img className="imgCarrusel" src="./images/imagen1.jpeg" alt="imageCarrusel" />
          </a>
          <div className="slideText">
            <p>15% de descuento en todos los tratamientos</p>
          </div>
        </div>

        <div className="slide">
          <a href="/">
            <img className="imgCarrusel" src="./images/imagen11.jpeg" alt="imageCarrusel" />
          </a>
          <div className="slideText">
            <p>15% de descuento en todos los tratamientos</p>
          </div>
        </div>

        <div className="slide">
          <a href="/">
            <img className="imgCarrusel" src="./images/imagen12.jpeg" alt="imageCarrusel" />
          </a>
          <div className="CslideText">
            <p>15% de descuento en todos los tratamientos</p>
          </div>
        </div>
      </div>

      <div className="controls">
        <button onClick={anterior} className="btn left">
          <img className="arrows" src="./images/arrows/arrow-left-svg.svg" alt="arrow left" />
        </button>
        <button onClick={siguiente} className="btn right">
          <img className="arrows" src="./images/arrows/arrow-right-svg.svg" alt="arrow right" />
        </button>
      </div>
    </div>
  );
}

export default SlideShow;
