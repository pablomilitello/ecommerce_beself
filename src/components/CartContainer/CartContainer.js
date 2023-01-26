import React, { useContext } from "react";
import Button from "../Button/Button";
import { cartContext } from "../../storage/cartContext";
import "./cartContainer.scss";
import { Link } from "react-router-dom";
import { createOrder } from "../../services/firebase";

function CartContainer() {
  const { cart, removeItem, clearCart, getTotalPriceInCart } = useContext(cartContext);

  function handleCheckout() {
    const items = cart.map((item) => ({ id: item.id, price: item.price, count: item.count, title: item.title }));
    const order = {
      buyer: {
        name: "Pablo",
        email: "lllll@lat.com",
        phone: "123456",
      },
      items: items,
      total: getTotalPriceInCart(),
      date: new Date(),
    };
    console.table(order);
    createOrder(order);
  }

  if (cart.length === 0) {
    return (
      <div>
        <p>
          <b>Su carrito está vacio</b>
        </p>
      </div>
    );
  } else {
    return (
      <div className="cartContainer">
        <div className="divCartButton">
          <b>Mi compra (3 productos)</b>
        </div>
        <div className="divCartItems">
          <div>
            {cart.map((itemInCart) => (
              <div key={itemInCart.id} className="divCartSubItems">
                {/* <div>
                  <img src={itemInCart.url} />
                </div> */}
                <h5>{`. ${itemInCart.count}  Un.`}</h5>
                <h5>{`  ${itemInCart.title}`}</h5>
                <h5>{`$${itemInCart.price}`}</h5>
                <h5>Subtotal {itemInCart.price * itemInCart.count}</h5>
                <Button padding="2px 6px" text="X" color="red" onClick={() => removeItem(itemInCart)} />
              </div>
            ))}
          </div>
        </div>
        <div className="divCartTotal">
          <h4>El total de tu compra es de $ {getTotalPriceInCart()}</h4>
          <div className="cartButtons">
            <Button onClick={handleCheckout} padding="5px 10px" text="Finalizar compra" color="blue" />
            <Button onClick={clearCart} padding="2px 4px" color="red" text="Vaciar carrito"></Button>
            <Link to="/">
              <Button padding="2px 4px" color="green" text="Segui comprando"></Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CartContainer;
