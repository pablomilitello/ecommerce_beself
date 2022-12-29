import { useState, useEffect } from "react";
import GetProducts from "../../services/mockServices.js";
import Item from "../Item/Item.js";
//import ItemCount from "../ItemCount/ItemCount.js";

function ItemListContainer() {
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
    <div className="div__listContainer">
      {arrayProducts.map((item) => (
        <>
          <Item key={item.id} item={item} />
          {/* <ItemCount stock={item.stock} /> */}
        </>
      ))}
    </div>
  );
}

export default ItemListContainer;
