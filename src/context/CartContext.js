import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      addQuantityToCart(item, quantity);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const addQuantityToCart = (productToAdd, quantity) => {
    const cartUpdated = cart.map((productCart) => {
      if (productToAdd.id === productCart.id) {
        const productUpdated = {
          ...productCart,
          quantity,
        };
        return productUpdated;
      } else {
        return productCart;
      }
    });
    setCart(cartUpdated);
  };

  const deleteAll = () => {
    setCart([]);
  };

  const deleteOne = (id) => {
    const prodFiltrados = cart.filter((prod) => prod.id !== id);
    setCart(prodFiltrados);
  };

  const totalProducts = () => {
    let count = 0;
    const cartCopy = [...cart];
    cartCopy.forEach((prod) => {
      count = count += prod.quantity;
    });
    return count;
  };

  const totalPrice = () => {
    let count = 0;
    const cartCopy = [...cart];
    cartCopy.forEach((prod) => {
      const finalPrice = prod.priceOffer !== 0 ? prod.priceOffer : prod.price;
      count = count += prod.quantity * finalPrice;
    });
    return count;
  };

  const getQtyProduct = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.quantity;
  };

  return <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne, totalProducts, totalPrice, getQtyProduct }}>{children}</CartContext.Provider>;
};

export default CartProvider;
