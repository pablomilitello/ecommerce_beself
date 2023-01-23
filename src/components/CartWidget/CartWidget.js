import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import "./cartwidget.scss";

function CartWidget() {
  const context = useContext(cartContext);

  return (
    <Link to="/cart" className="container__widget">
      <div className="div__widget">
        <img src="../images/cartwidget.svg" className="img__cartwidget" alt="img__cartwidget" />
      </div>
      <div className="cartNumber">{context.getTotalItemsInCart()}</div>
    </Link>
  );
}

export default CartWidget;
