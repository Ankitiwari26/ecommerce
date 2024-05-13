import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (index) => {},
});
export default CartContext;
