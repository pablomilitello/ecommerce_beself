import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { GetProduct } from "../../services/mockServices";
import ItemDetail from "./ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let params = useParams();
  console.log(params);
  useEffect(() => {
    GetProduct(params.productID)
      .then((response) => {
        setProduct(response);
      }, [])
      .catch((error) => {
        alert(error);
      });
  });

  return (
    <ItemDetail
      className="itemDetailContainer"
      title={product.title}
      detail={product.detail}
      price={product.price}
      url={product.url}
      stock={product.stock}
    />
  );
}

export default ItemDetailContainer;
