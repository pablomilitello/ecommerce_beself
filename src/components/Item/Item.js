import { Link } from "react-router-dom";

function Item(props) {
  const { id, title, detail, price, url } = props.item;

  return (
    <div className="itemContainer">
      <div className="imgItemContainer">
        <img className="imgItemProducto" src={url} alt="imgCardProducto" />
      </div>
      <div className="divDataItem">
        <h3 className="titleCardContainer">{title}</h3>
        <div className="descriptionCardContainer">{detail}</div>
        <p>$ {price}</p>
        <Link to={`/detail/${id}`}>
          <button className="btnProduct">Ver detalle</button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
