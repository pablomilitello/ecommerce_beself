import { Children, useState } from "react";
import "../ItemCount/ItemCount.js";

function ItemCount(props) {
  const [count, setCount] = useState(1);
  console.log(Children.stock);
  function handleAdd() {
    setCount(count + 1);
  }

  function handleSubstract() {
    setCount(count - 1);
  }

  return (
    <div className="itemCountContainer">
      <span className="spanCount" onClick={handleSubstract}>
        <img className="imgCount" src="./images/substract.svg" alt="img_substract" />
      </span>
      <span className="spanCount">{count}</span>
      <span className="spanCount" onClick={handleAdd}>
        <img className="imgCount" src="./images/add.svg" alt="img_add" />
      </span>
    </div>
  );
}

export default ItemCount;
