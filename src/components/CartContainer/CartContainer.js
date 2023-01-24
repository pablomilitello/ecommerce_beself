import React, { useContext } from "react";
import Button from "../Button/Button";
import { cartContext } from "../../storage/cartContext";
import "./cartContainer.scss";

function CartContainer() {
  const { cart, removeItem, clearCart, getTotalPriceInCart } = useContext(cartContext);

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
          <h4>Total {getTotalPriceInCart()}</h4>
          <div className="cartButtons">
            <Button padding="5px 10px" text="Finalizar compra" color="blue" />
            <Button onClick={clearCart} padding="2px 4px" color="red" text="Vaciar carrito"></Button>
            <Button padding="2px 4px" color="green" text="Seguir comprando"></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartContainer;
