import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart" className="btn d-flex">
      <span className="align-self-center">Carrito</span> <span className="material-symbols-outlined align-self-center">shopping_cart</span>
    </Link>
  );
};

export default CartWidget;
