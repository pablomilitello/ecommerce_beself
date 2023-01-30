import React, { useContext } from "react";
import Button from "../Button/Button";
import { cartContext } from "../../storage/cartContext";
import "./cartContainer.scss";
import { Link } from "react-router-dom";

function CartContainer() {
  const { cart, removeItem, clearCart, getTotalPriceInCart } = useContext(cartContext);

  if (cart.length === 0) {
    return (
      <div className="cartClean">
        <p className="cartTextClean">
          <b>Su carrito está vacio</b>
        </p>
        <img src="../images/cartEmpty.png" alt="imgCartEmpty" />
      </div>
    );
  } else {
    return (
      <div className="cartListContainer">
        <b>Detalle de tu compra</b>
        <table className="cartList">
          <thead className="cartList_head">
            <tr className="cartList_row">
              <th>Miniatura</th>
              <th>Titulo</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((itemInCart) => (
              <tr key={itemInCart.id} className="cartList_row">
                <td>
                  <img height={50} src={itemInCart.url} alt={itemInCart.title} />
                </td>
                <td>{itemInCart.title}</td>
                <td>$ {itemInCart.price}</td>
                <td>{itemInCart.count}</td>
                <th>{itemInCart.price * itemInCart.count}</th>
                <td>
                  <Button padding="2px 6px" text="X" color="coral" onClick={() => removeItem(itemInCart)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cartList_detail">
          <h4>El total de tu compra es de ${getTotalPriceInCart()}</h4>
        </div>

        <div className="cartButtons">
          <Link to={`/checkout`}>
            <Button padding="5px 10px" text="Finalizar compra" color="green" />
          </Link>
          <Button onClick={clearCart} padding="5px 10px" color="coral" text="Vaciar carrito"></Button>
          <Link to="/">
            <Button padding="5px 10px" color="#F0C808" text="Seguir comprando"></Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CartContainer;
