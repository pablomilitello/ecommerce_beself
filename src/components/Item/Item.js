import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./item.scss";

function Item(props) {
  const { id, title, detail, price, url, discount } = props.item;

  return (
    <div className="itemContainer">
      <div className="imgItemContainer">
        <img className="imgItemProducto" src={url} alt="imgCardProducto" />
      </div>
      <div className="divDataItem">
        <h3 className="titleCardContainer">{title}</h3>
        <div className="descriptionCardContainer">{detail}</div>
        <p>$ {price}</p>
        {discount !== 0 && discount !== undefined && <h6>Descuento: {discount + "%"}</h6>}
        <Link to={`/detail/${id}`}>
          <Button text="Ver detalle" color="#2C5784" padding="6px" />
        </Link>
      </div>
    </div>
  );
}

export default Item;
