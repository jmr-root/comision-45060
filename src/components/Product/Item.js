import Labels from "./Labels";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className={"col-4 mb-4 d-flex d-flex justify-content-center align-items-center overlay-top" + (product.stock === 0 ? "opacity-05" : "")}>
      <span className="btn btn-primary product-btn-overlay">VER DETALLE</span>
      <Link to={`/detail/${product.id}`} style={{ pointerEvents: product.stock === 0 ? "none" : "" }} className="product-btn">
        <Labels label={product} />
        <img src={product.image} alt={product.title} className={"productImage " + (product.stock === 0 && " opacity-05")} />
        <article className="info text-center">
          <p className="product-name">{product.name}</p>
          {product.discountPorcent === 0 ? (
            <p className="product-price">${product.price}.-</p>
          ) : (
            <p className="product-price">
              ${product.priceOffer}.- <span className="priceOffer">${product.price}.</span>
            </p>
          )}
        </article>
      </Link>
    </div>
  );
};

export default Item;
