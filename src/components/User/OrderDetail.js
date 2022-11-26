const OrderDetail = ({ order }) => {
  const totalProductsOrder = () => {
    let count = 0;
    const orderCopy = [...order];
    orderCopy.forEach((prod) => {
      count = count += prod.quantity;
    });
    return count;
  };

  const totalPriceOrder = () => {
    let count = 0;
    const orderCopy = [...order];
    orderCopy.forEach((prod) => {
      const finalPrice = prod.priceOffer !== 0 ? prod.priceOffer : prod.price;
      count = count += prod.quantity * finalPrice;
    });
    return count;
  };

  return (
    <div className="container">
      <div>
        <table className="table w-100 text-center cart-table">
          <thead>
            <tr className="cart-border-bottom options">
              <th scope="col">Producto</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">cantidad</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.map((prod) => (
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
                <td>{prod.quantity}</td>
                <td>${(prod.priceOffer !== 0 ? prod.priceOffer : prod.price) * prod.quantity}.-</td>
              </tr>
            ))}
            <tr className="options">
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col font-medium">Productos: {totalProductsOrder()}</th>
              <th scope="col font-medium">Envío: {totalPriceOrder() > 6000 ? "Gratis" : `$${1200}.-`}</th>
              <th scope="col font-medium">Total: ${totalPriceOrder() + (totalPriceOrder() > 6000 ? 0 : 1200)}.-</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;
