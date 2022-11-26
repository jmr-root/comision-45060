import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const { addToCart, getQtyProduct } = useContext(CartContext);

  const onAdd = (quantityAdd) => {
    setQuantity(quantityAdd);
    addToCart(item, quantityAdd);
  };

  const currentQty = getQtyProduct(item.id);

  return (
    <div className="row">
      <div className="col-6">
        <img src={item.image} alt="" className="itemImageDetail" />
      </div>
      <div className="col-6">
        <article className="info mt-5">
          <p className="fs-12 mb-0">{item.category}</p>
          <h2>{item.name}</h2>
          {item.discountPorcent === 0 ? (
            <h5>${item.price}</h5>
          ) : (
            <h5>
              ${item.priceOffer}.- <span className="priceOffer">${item.price}</span>
            </h5>
          )}
          <p className="mt-4 fs-13">
            <strong>6 cuotas sin interés</strong> de ${parseInt((item.discountPorcent === 0 ? item.price : item.priceOffer) / 6)}
          </p>
          <Link to="" className="btn-text fs-12">
            VER MEDIOS DE PAGO
          </Link>
        </article>
        <div className="col-12 mt-4">
          <ItemCount stock={item.stock} onAdd={onAdd} initial={currentQty} />
        </div>
        <div className="col-12 mt-2">
          {quantity === 0 ? (
            ``
          ) : (
            <p className="fs-12">
              Se agrego este producto <Link to="/cart">VER EN EL CARRITO</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
