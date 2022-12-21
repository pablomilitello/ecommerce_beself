import ItemCount from "./ItemCount.js";

function CardProducts(props) {
  return (
    <div className="cardContainer">
      <div className="imgCardContainer">
        <img className="imgCardProducto" src={props.link} alt="imgCardProducto" />
      </div>
      <h3 className="titleCardContainer">{props.name}</h3>
      <div className="descriptionCardContainer">BlaBla</div>
      <p>$ {props.price}</p>
      <ItemCount />
    </div>
  );
}

export default CardProducts;
