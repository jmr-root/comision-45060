import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const { addToCart } = useContext(CartContext);

  const onAdd = (quantityAdd) => {
    setQuantity(quantityAdd);
    addToCart(item, quantityAdd);
  };

  return (
    <div className="row">
      <div className="col-6">
        <img src={item.image} alt="" className="itemImageDetail" />
      </div>
      <div className="col-6">
        <article className="info">
          <h2>{item.name}</h2>
          {item.discountPorcent === 0 ? (
            <h5>${item.price}</h5>
          ) : (
            <h5>
              ${item.priceOffer}.- <span className="priceOffer">${item.price}</span>
            </h5>
          )}
        </article>
        <ItemCount stock={item.stock} onAdd={onAdd} />
        <div className="col-12 mt-2">{quantity === 0 ? <p></p> : <p>Se agregaron {quantity} productos</p>}</div>
      </div>
    </div>
  );
};

export default ItemDetail;
