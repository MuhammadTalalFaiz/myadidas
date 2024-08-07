import React, { createContext, useState, useContext } from 'react';

// Create a context with default values
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) =>
      prevItems.filter((i) => i.src !== item.src)
    );
  };

  const updateQuantity = (item, quantity) => {
    if (quantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.src === item.src ? { ...i, quantity } : i
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
