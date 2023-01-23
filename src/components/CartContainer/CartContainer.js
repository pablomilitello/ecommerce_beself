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
          <p>
            <b>Mi compra (3 productos)</b>
          </p>
          <Button onClick={clearCart} padding="2px 4px" color="red" text="Vaciar carrito"></Button>
          <Button padding="2px 4px" color="green" text="Seguir comprando"></Button>
        </div>
        <div className="divCartItems">
          <div>
            {cart.map((itemInCart) => (
              <>
                {/* <div>
                  <img src={itemInCart.url} />
                </div> */}
                <h5>{itemInCart.title}</h5>
                <h5>{itemInCart.price}</h5>
                <h5>{itemInCart.count}</h5>
                <Button padding="5px 10px" text="X" color="red" onClick={() => removeItem(itemInCart)} />
                <Button padding="5px 10px" text="Finalizar compra" color="blue" />
              </>
            ))}
          </div>
        </div>
        <div className="divCartTotal">
          <h3>Total {getTotalPriceInCart()}</h3>
        </div>
      </div>
    );
  }
}

export default CartContainer;
