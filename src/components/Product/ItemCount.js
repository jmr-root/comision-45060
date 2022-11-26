import { useState } from "react";

const ItemCount = ({ stock, onAdd, initial = 1 }) => {
  const [quantity, setQuantity] = useState(initial);

  const decreaseQty = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const increaseQty = () => {
    quantity < stock && setQuantity(quantity + 1);
  };

  return (
    <div className="flex-row">
      <p>Cantidad:</p>
      <div className="col-6 d-flex text-center">
        <button className="btn btn-outline flex-fill" disabled={quantity < 1} onClick={decreaseQty}>
          -
        </button>
        <div className="col-4 qtyBox flex-fill text-center align-middle">{quantity}</div>

        <button className="btn btn-outline flex-fill btn" disabled={quantity === stock} onClick={increaseQty}>
          +
        </button>
      </div>
      <div className="col-6 d-flex text-center">
        <button className="btn btn-primary flex-fill mt-2" onClick={() => onAdd(quantity)}>
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
