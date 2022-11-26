import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, deleteAll, deleteOne, totalProducts, totalPrice } = useContext(CartContext);

  if (cart.length === 0)
    return (
      <div className="container">
        <div className="row text-center">
          <h5 className="mt-5">No hay productos en tu carrito</h5>
          <Link to="/" className="btn-text fs-12">
            VOLVER AL INICIO
          </Link>
        </div>
      </div>
    );

  return (
    <div className="container">
      <div className="row">
        <table className="table w-100 text-center cart-table">
          <thead>
            <tr className="cart-border-bottom options">
              <th scope="col">Producto</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">cantidad</th>
              <th scope="col">Subtotal</th>
              <th scope="col">quitar</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((prod) => (
              <tr key={prod.id} className="mt-4 product">
                <th scope="row">
                  <img src={prod.image} alt={prod.name} width="100px" />
                </th>
                <td>{prod.name}</td>
                <td>
                  {prod.priceOffer === 0 ? (
                    <span>${prod.price}.-</span>
                  ) : (
                    <span>
                      ${prod.priceOffer}.- <span className="priceOffer">${prod.price}</span>
                    </span>
                  )}
                </td>
                <td>
                  {prod.quantity} {prod.itemSize}
                </td>
                <td>${(prod.priceOffer !== 0 ? prod.priceOffer : prod.price) * prod.quantity}.-</td>
                <td>
                  <button onClick={() => deleteOne(prod.id)} className="btn-delete">
                    <span className="material-symbols-outlined ">delete</span>
                  </button>
                </td>
              </tr>
            ))}
            <tr className="options">
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Productos: {totalProducts()}</th>
              <th scope="col">Total: $ {totalPrice()}.-</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-end mt-5">
          <button onClick={deleteAll} className="btn btn-secondary ms-2">
            Vaciar carrito
          </button>

          <Link to="/checkout" className="btn btn-primary ms-2">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
