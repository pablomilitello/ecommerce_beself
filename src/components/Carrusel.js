import CardProducts from "./CardProducts.js";

function Carrusel() {
  return (
    <div className="carruselContainer">
      <CardProducts name="CaraPalida" link="./images/imagen11.jpeg" price="1500" />
      <CardProducts name="Masajeamela" link="./images/prueba3.jpg" price="1200" />
      <CardProducts name="PumEnlaCara" link="./images/prueba2.jpg" price="1700" />
    </div>
  );
}

export default Carrusel;
