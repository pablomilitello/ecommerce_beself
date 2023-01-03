import { useState, useEffect } from "react";
import GetProducts from "../../../services/mockServices.js";
import Item from "../../Item/Item.js";

function ItemList() {
  const [arrayProducts, setArrayProducts] = useState([]);

  useEffect(() => {
    GetProducts()
      .then((response, reject) => {
        setArrayProducts(response);
      }, [])
      .catch((error) => {
        alert(error);
      });
  });

  return (
    <div className="divItemList">
      {arrayProducts.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
