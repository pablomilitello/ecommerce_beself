import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <Link to="/cart" className="container__widget">
      <div className="div__widget">
        <img src="../images/cartwidget.svg" className="img__cartwidget" alt="img__cartwidget" />
      </div>
      <div className="cartNumber">2</div>
    </Link>
  );
}

export default CartWidget;
