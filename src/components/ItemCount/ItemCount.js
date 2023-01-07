import { useState } from "react";

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
    <div className="itemCountContainer">
      <span className="spanCount" onClick={handleSubstract}>
        <img className="imgCount" src="../images/substract.svg" alt="img_substract" />
      </span>
      <span className="spanCount">{count}</span>
      <span className="spanCount" onClick={handleAdd}>
        <img className="imgCount" src="../images/add.svg" alt="img_add" />
      </span>
    </div>
  );
}

export default ItemCount;
