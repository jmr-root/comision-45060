import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useContext(CartContext);
  return (
    <Link to="/cart" className="btn d-flex">
      <span className="material-symbols-outlined align-self-center">shopping_cart</span>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalProducts() !== 0 && totalProducts()}</span>
    </Link>
  );
};

export default CartWidget;
