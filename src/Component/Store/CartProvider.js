import CartContext from "./cart-context";
import { useState, useContext } from "react";

export const useCart = () => useContext(CartContext);

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.title === item.title
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const cartContext = {
    cartItems: cartItems || [],
    addItem: addToCart,
    removeItem: removeFromCart,
    message: "I am accible any were",
  };

  return (
    <CartContext.Provider value={{ cartContext, addToCart, removeFromCart }}>
      {/* <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}> */}
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
