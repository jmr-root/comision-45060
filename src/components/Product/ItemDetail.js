import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const onAdd = (qtyAdd) => {
    console.log(qtyAdd);
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
      </div>
    </div>
  );
};

export default ItemDetail;
