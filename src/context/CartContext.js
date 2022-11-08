import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const resultProd = cart.find((prod) => prod.id === item.id);
      addQuantityCart(resultProd, quantity);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Función para comprobar si esta en el carrito
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  // Función para sumar cantidad si esta en el carrito
  const addQuantityCart = (prod, qty) => {
    const quantity = prod.quantity + qty;
    setCart([cart.filter((prodFilter) => prodFilter.id === prod.id), { ...prod, quantity }]);
    //setCart([...cart,{ ...prod, quantity }]);
  };

  // Función para buscar producto cantidad si esta en el carrito

  console.log(cart);

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;
