import React, { useRef } from "react";
import { Link } from "react-router-dom";

const siguiente = () => {
  console.log("Siguiente");
};

const anterior = () => {
  console.log("Anterior");
};

function SlideShow() {
  const slideshow = useRef(null);
  return (
    <main className="App">
      <p className="slideShowText">Productos Destacados</p>
      <div className="contenedorPrincipal">
        <div className="contenedorSlideShow" ref={slideshow}>
          <div className="slide">
            <Link to="/">
              <img className="imgCarrusel" src="../images/imagen1.jpeg" alt="imageCarrusel" />
            </Link>
            <div className="slideText">
              <p>15% de descuento en todos los tratamientos</p>
            </div>
          </div>

          <div className="slide">
            <Link to="/">
              <img className="imgCarrusel" src="../images/imagen11.jpeg" alt="imageCarrusel" />
            </Link>
            <div className="slideText">
              <p>15% de descuento en todos los tratamientos</p>
            </div>
          </div>

          <div className="slide">
            <Link to="/">
              <img className="imgCarrusel" src="../images/imagen12.jpeg" alt="imageCarrusel" />
            </Link>
            <div className="CslideText">
              <p>15% de descuento en todos los tratamientos</p>
            </div>
          </div>
        </div>

        <div className="controls">
          <button onClick={anterior} className="btn left">
            <img className="arrows" src="../images/arrows/arrow-left-svg.svg" alt="arrow left" />
          </button>
          <button onClick={siguiente} className="btn right">
            <img className="arrows" src="../images/arrows/arrow-right-svg.svg" alt="arrow right" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default SlideShow;
