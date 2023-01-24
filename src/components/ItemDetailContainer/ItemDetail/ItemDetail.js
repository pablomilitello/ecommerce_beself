import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import ItemCount from "../../ItemCount/ItemCount";
import "./itemdetail.scss";

function ItemDetail(props) {
  const { title, detail, bigDetail, price, url, stock, onAddToCart, onClearCart, isInCart } = props;

  return (
    <div className="itemDetailContainer">
      <div className="imgItemDetailContainer">
        <img className="imgItemDetailProduct" src={url} alt="imgCardProduct" />
      </div>
      <div className="divDataItemDetail">
        <h3 className="titleCardDetailContainer">{title}</h3>
        <div className="descriptionCardDetailContainer">{detail + ": " + bigDetail}</div>
        <p>Precio Unitario: $ {price}</p>
        {isInCart !== true ? (
          <ItemCount stock={stock} onAddToCart={onAddToCart} onClearCart={onClearCart} />
        ) : (
          <Link to="/">
            <Button text="Segui comprando" padding="10px 10px" color="green" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
