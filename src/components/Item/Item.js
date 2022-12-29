import ItemCount from "../ItemCount/ItemCount.js";

function Item(props) {
  const { title, detail, price, url, stock } = props.item;

  return (
    <div className="itemContainer">
      <div className="imgItemContainer">
        <img className="imgItemProducto" src={url} alt="imgCardProducto" />
      </div>
      <div className="divDataItem">
        <h3 className="titleCardContainer">{title}</h3>
        <div className="descriptionCardContainer">{detail}</div>
        <p>$ {price}</p>
        <ItemCount stock={stock} />
        <button className="btnProduct">Agregar al carrito</button>
      </div>
    </div>
  );
}

export default Item;
