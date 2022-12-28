import { useState, useEffect } from "react";
import GetProducts from "../../services/mockServices.js";
import Item from "../Item/Item.js";

function ItemListContainer() {
  const [arrayProducts, setArrayProducts] = useState([]);

  useEffect(() => {
    GetProducts().then((response, reject) => {
      setArrayProducts(response);
    }, []);
  });

  return (
    <div className="div__listContainer">
      {arrayProducts.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemListContainer;
