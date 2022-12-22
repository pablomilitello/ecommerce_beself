import CardProducts from "../CardProducts/CardProducts.js";

function ItemListContainer(props) {
  return (
    <div className="div__listContainer">
      <CardProducts name="Tratamiento Facial" link="./images/imagen11.jpeg" price="1500" stock={5} />
      <CardProducts name="Masajes faciales" link="./images/prueba3.jpg" price="1200" stock={10} />
      <CardProducts name="Tratamiento acne" link="./images/prueba2.jpg" price="1700" stock={7} />
    </div>
  );
}

export default ItemListContainer;
