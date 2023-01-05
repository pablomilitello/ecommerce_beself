import React, { useState, useEffect } from "react";
import { GetProduct } from "../../services/mockServices";
import ItemDetail from "./ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    GetProduct()
      .then((response) => {
        setProduct(response);
      }, [])
      .catch((error) => {
        alert(error);
      });
  });

  console.log(product);

  return (
    <ItemDetail
      title={product.title}
      detail={product.detail}
      price={product.price}
      url={product.url}
      stock={product.stock}
    />
  );
}

export default ItemDetailContainer;
