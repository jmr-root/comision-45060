import React, { useEffect, useState } from "react";
import { getProducts } from "./products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    getProducts(categoryName)
      .then((res) => {
        setItems(res);
        //console.log(res);
      })
      .catch((rej) => {
        // console.log(rej);
      });
  }, [categoryName]);

  return (
    <div className="row mt-5">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
