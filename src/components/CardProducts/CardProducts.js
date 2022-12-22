import ItemCount from "../ItemCount/ItemCount.js";

function CardProducts(props) {
  return (
    <div className="cardContainer">
      <div className="imgCardContainer">
        <img className="imgCardProducto" src={props.link} alt="imgCardProducto" />
      </div>
      <div className="divDataCard">
        <h3 className="titleCardContainer">{props.name}</h3>
        <div className="descriptionCardContainer">BlaBla</div>
        <p>$ {props.price}</p>
        <ItemCount />
        <button className="btnProduct">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default CardProducts;
