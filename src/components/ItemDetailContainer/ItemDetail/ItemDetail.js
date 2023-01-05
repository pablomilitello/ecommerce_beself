import React from "react";
import ItemCount from "../../ItemCount/ItemCount";

function ItemDetail({ title, detail, price, url, stock }) {
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
      </div>
    </div>
  );
}

export default ItemDetail;
