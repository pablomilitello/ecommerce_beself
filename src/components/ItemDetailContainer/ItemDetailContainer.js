import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { GetProduct } from "../../services/mockServices";
import ItemDetail from "./ItemDetail/ItemDetail";
import "./itemDetailContainer.scss";
import { cartContext } from "../../storage/cartContext";
import Loader from "../Loader/Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  let params = useParams();

  const { addToCart, clearCart } = useContext(cartContext);

  const [isLoading, setIsLoading] = useState(true);

  function handleAddToCart(count) {
    addToCart({ ...product, count: count });
  }

  function handleClearCart(count) {
    clearCart({ ...product, count: count });
  }

  useEffect(() => {
    GetProduct(params.productID)
      .then((response) => {
        setProduct(response);
        setIsLoading(false);
      }, [])

      .catch((error) => {
        alert(error);
      })
      .finally(() => setIsLoading(false));
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ItemDetail
          onAddToCart={handleAddToCart}
          onClearCart={handleClearCart}
          className="itemDetailContainer"
          title={product.title}
          detail={product.detail}
          bigDetail={product.bigDetail}
          price={product.price}
          url={product.url}
          stock={product.stock}
        />
      )}
    </>
  );
}

export default ItemDetailContainer;
