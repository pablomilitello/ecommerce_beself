import React from "react";
import ItemCount from "../../ItemCount/ItemCount";

function ItemDetail(props) {
  const { title, detail, price, url, stock } = props;
  console.log(props);
  return (
    <div className="itemContainer">
      <div className="imgItemContainer">
        <img className="imgItemProducto" src={url} alt="imgCardProduct" />
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
