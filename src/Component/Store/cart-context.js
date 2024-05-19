// import React from "react";

// const CartContext = React.createContext({
//   cartItems: [],
//   totalAmount: 0,
//   addItem: (item) => {},
//   removeItem: (index) => {},
// });
// export default CartContext;

import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
