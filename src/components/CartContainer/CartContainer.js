import React, { useContext } from "react";
import Button from "../Button/Button";
import { cartContext } from "../../storage/cartContext";
import "./cartContainer.scss";
import { Link } from "react-router-dom";

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
                <span>
                  <img src={itemInCart.url} height="50" alt="imgPreviewCart" />
                </span>
                <h5>{`${itemInCart.count}  Un.`}</h5>
                <h5>{`${itemInCart.title}`}</h5>
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
            <Link to={`/checkout`}>
              <Button padding="5px 10px" text="Finalizar compra" color="blue" />
            </Link>
            <Button padding="5px 10px" color="red" text="Vaciar carrito"></Button>
            <Link to="/">
              <Button padding="5px 10px" color="green" text="Seguir comprando"></Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CartContainer;
