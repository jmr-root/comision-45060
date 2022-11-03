import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(0);

  const dec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const inc = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  return (
    <div className="col-12">
      <div className="flex-row">
        <p>Cantidad:</p>
        <div className="col-6 d-flex text-center">
          <button className="btn btn-outline flex-fill" disabled={quantity < 1} onClick={dec}>
            -
          </button>
          <div className="col-4 qtyBox flex-fill text-center align-middle">{quantity}</div>
          <button className="btn btn-outline flex-fill btn" disabled={quantity === stock} onClick={inc}>
            +
          </button>
        </div>
        <div className="col-6 d-flex text-center">
          <button className="btn btn-primary flex-fill mt-2" onClick={() => onAdd(quantity)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
