import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "./products";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="detail-container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
