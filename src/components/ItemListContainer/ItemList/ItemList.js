import { useState, useEffect } from "react";
import GetProducts, { GetProductByCategory } from "../../../services/mockServices.js";
import Item from "../../Item/Item.js";
import { useParams } from "react-router-dom";
import "./itemlist.scss";
import Loader from "../../Loader/Loader.js";

function ItemList() {
  const [arrayProducts, setArrayProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { categoryID } = useParams();

  useEffect(() => {
    if (!categoryID) {
      GetProducts()
        .then((response) => {
          setArrayProducts(response);
          setIsLoading(false);
        })
        .catch((error) => {
          alert(error);
        })
        .finally(() => setIsLoading(false));
    } else {
      GetProductByCategory(categoryID)
        .then((response) => {
          setArrayProducts(response);
          setIsLoading(false);
        })
        .finally(() => setIsLoading(false));
    }
  }, [categoryID]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="divItemList">
          {arrayProducts.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default ItemList;
