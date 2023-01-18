import React from "react";
import ItemCount from "../../ItemCount/ItemCount";
import "./itemdetail.scss";

function ItemDetail(props) {
  const { title, detail, bigDetail, price, url, stock } = props;
  return (
    <div className="itemDetailContainer">
      <div className="imgItemDetailContainer">
        <img className="imgItemDetailProduct" src={url} alt="imgCardProduct" />
      </div>
      <div className="divDataItemDetail">
        <h3 className="titleCardDetailContainer">{title}</h3>
        <div className="descriptionCardDetailContainer">{detail + ": " + bigDetail}</div>
        <p>Precio Unitario: $ {price}</p>
        <ItemCount stock={stock} />
      </div>
    </div>
  );
}

export default ItemDetail;
