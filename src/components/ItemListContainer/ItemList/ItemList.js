import { useState, useEffect } from "react";
import GetProducts, { GetProductByCategory } from "../../../services/mockServices.js";
import Item from "../../Item/Item.js";
import { useParams } from "react-router-dom";

function ItemList() {
  const [arrayProducts, setArrayProducts] = useState([]);
  let { categoryID } = useParams();

  useEffect(() => {
    if (!categoryID) {
      GetProducts()
        .then((response) => {
          setArrayProducts(response);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      GetProductByCategory(categoryID).then((response) => {
        setArrayProducts(response);
      });
    }
  }, [categoryID]);

  return (
    <div className="divItemList">
      {arrayProducts.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;
