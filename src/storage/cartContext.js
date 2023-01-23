import { createContext, useState } from "react";

export const cartContext = createContext();

function CartProvider(props) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    let isInCart = cart.findIndex((itemInCart) => itemInCart.id === item.id);

    if (isInCart !== -1) {
      let newCart = [...cart];
      newCart[isInCart].count += 1;
      setCart(newCart);
    } else {
      let newCart = [...cart];
      newCart.push(item);
      setCart(newCart);
    }
  }

  function removeItem(itemId) {
    //let isInCart = cart.findIndex((itemInCart) => itemInCart.id === itemId.id);
    console.log("El item está removido");
  }

  function clearCart() {
    setCart([]);
  }

  function getTotalItemsInCart() {
    let total = 0;
    console.log(`El total de items del carrito es ${total}`);
    cart.forEach((product) => (total += product.count));
    return total;
  }

  function getTotalPriceInCart() {
    let totalPrice = 100;
    console.log(`El precio total del carrito es ${totalPrice}`);

    return 1000;
  }

  return (
    <cartContext.Provider value={{ cart, addToCart, removeItem, clearCart, getTotalItemsInCart, getTotalPriceInCart }}>
      {props.children}
    </cartContext.Provider>
  );
}

export { CartProvider };
