import { createContext, useState } from "react";

export const cartContext = createContext();

function CartProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    let isInCart = cart.findIndex((itemInCart) => itemInCart.id === item.id);

    if (isInCart !== -1) {
      let newCart = [...cart];
      newCart[isInCart].count += item.count;
      setCart(newCart);
    } else {
      let newCart = [...cart];
      newCart.push(item);
      setCart(newCart);
    }
  }

  function removeItem(itemToRemove) {
    let newCart = [...cart];
    let isInCart = newCart.findIndex((itemInCart) => itemInCart.id === itemToRemove.id);
    console.log("-->", isInCart);
    setCart(newCart.splice(isInCart, 1));
  }

  function clearCart() {
    setCart([]);
  }

  function getTotalItemsInCart() {
    let total = 0;
    cart.forEach((product) => (total += product.count));
    return total;
  }

  function getTotalPriceInCart() {
    let totalPrice = 1700;

    return totalPrice;
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, removeItem, clearCart, getTotalItemsInCart, getTotalPriceInCart }}>
      {props.children}
    </cartContext.Provider>
  );
}

export { CartProvider };
