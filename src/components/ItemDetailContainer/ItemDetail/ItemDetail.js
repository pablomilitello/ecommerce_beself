import React from "react";
import ItemCount from "../../ItemCount/ItemCount";

function ItemDetail(props) {
  const { title, detail, price, url, stock } = props;
  console.log(props);
  return (
    <div className="itemDetailContainer">
      <div className="imgItemDetailContainer">
        <img className="imgItemDetailProduct" src={url} alt="imgCardProduct" />
      </div>
      <div className="divDataItemDetail">
        <h3 className="titleCardDetailContainer">{title}</h3>
        <div className="descriptionCardDetailContainer">{detail}</div>
        <p>$ {price}</p>
        <ItemCount stock={stock} />
      </div>
    </div>
  );
}

export default ItemDetail;
