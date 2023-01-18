import { useState } from "react";
import Button from "../Button/Button";
import "./itemcount.scss";

function ItemCount(props) {
  const { stock } = props;
  const [count, setCount] = useState(1);
  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <>
      <div className="itemCountContainer">
        <div>
          <Button className="spanCount" color="#2C5784" padding="1em 1em" onClick={handleSubstract} text="-" />
          <span className="spanCount">{count}</span>
          <Button className="spanCount" color="#2C5784" padding="1em 1em" onClick={handleAdd} text="+" />
        </div>
        <Button color="#2C5784" padding="0.3em" text="Agregar al carrito" />
      </div>
    </>
  );
}

export default ItemCount;
