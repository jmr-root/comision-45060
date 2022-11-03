import Labels from "./Labels";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className={"col-4 " + (product.stock === 0 ? "opacity-05" : "")}>
      <Labels label={product} />
      <img src={product.image} alt={product.title} className="productImage" />
      <article className="info">
        <h2 className="mt-2">{product.name}</h2>
        {product.discountPorcent === 0 ? (
          <h5>${product.price}</h5>
        ) : (
          <h5>
            ${product.priceOffer}.- <span className="priceOffer">${product.price}</span>
          </h5>
        )}
      </article>

      <Link to={`/detail/${product.id}`} className={"btn btn-primary " + (product.stock === 0 ? "d-none" : "")}>
        VER DETALLE
      </Link>
    </div>
  );
};

export default Item;
