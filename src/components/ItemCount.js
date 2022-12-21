function ItemCount(props) {
  return (
    <div className="itemCountContainer">
      <span className="spanCount">
        <img className="imgCount" src="./images/substract.svg" alt="img_substract" />
      </span>
      <span className="spanCount">1</span>
      <span className="spanCount">
        <img className="imgCount" src="./images/add.svg" alt="img_add" />
      </span>
    </div>
  );
}

export default ItemCount;
