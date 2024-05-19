// import { useAuth } from "./auth-coontext";
// import CartContext from "./cart-context";
// import { useState, useContext, useEffect } from "react";

// export const useCart = () => useContext(CartContext);
// const API_BASE_URL =
//   "https://crudcrud.com/api/3d7450d761ad4e60a79263b83b824a71";

// const CartProvider = (props) => {
//   const { currentUser } = useAuth();
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     if (currentUser) {
//       fetchCartItems(currentUser.email);
//     }
//   }, []);

//   const fetchCartItems = async (email) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/${email}`);
//       const data = await response.json();
//       setCartItems(data);
//     } catch (error) {
//       console.log("Error", error);
//     }
//   };

//   const addToCart = async (item) => {
//     if (!currentUser) {
//       console.log("User not logged in");
//       return;
//     }
//     try {
//       const response = await fetch(`${API_BASE_URL}/${currentUser.email}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(item),
//       });
//       if (response.ok) {
//         setCartItems((prevItem) => [...prevItem, item]);
//       } else {
//         console.error("Error adding to cart");
//       }
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//     }
//   };
//   const removeFromCart = async (index) => {
//     if (!currentUser) {
//       console.error("User not logged in");
//       return;
//     }
//     try {
//       const item = cartItems[index];
//       const response = await fetch(
//         `${API_BASE_URL}/${currentUser.email}/${item._id}`,
//         {
//           method: "DELETE",
//         }
//       );
//       if (response.ok) {
//         setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
//       } else {
//         console.error("Error removing from cart");
//       }
//     } catch (error) {
//       console.error("Error removing from cart:", error);
//     }
//   };

//   const cartContext = {
//     cartItems,
//     addItem: addToCart,
//     removeItem: removeFromCart,
//   };

//   return (
//     <CartContext.Provider value={{ cartContext, addToCart, removeFromCart }}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };
// export default CartProvider;

import { useAuth } from "./auth-coontext";
import CartContext from "./cart-context";
import { useState, useContext, useEffect } from "react";

export const useCart = () => useContext(CartContext);
const API_BASE_URL =
  "https://crudcrud.com/api/3d7450d761ad4e60a79263b83b824a71";

const CartProvider = (props) => {
  const { currentUser } = useAuth();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (currentUser) {
      fetchCartItems(currentUser.email);
    }
  }, [currentUser]);

  const fetchCartItems = async (email) => {
    try {
      const response = await fetch(`${API_BASE_URL}${email}`);
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const addToCart = async (item) => {
    if (!currentUser) {
      console.log("User not logged in");
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}${currentUser.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      if (response.ok) {
        setCartItems((prevItem) => [...prevItem, item]);
      } else {
        console.error("Error adding to cart");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const removeFromCart = async (index) => {
    if (!currentUser) {
      console.error("User not logged in");
      return;
    }
    try {
      const item = cartItems[index];
      const response = await fetch(
        `${API_BASE_URL}${currentUser.email}/${item._id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
      } else {
        console.error("Error removing from cart");
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const cartContext = {
    cartItems,
    addItem: addToCart,
    removeItem: removeFromCart,
  };

  return (
    <CartContext.Provider value={{ cartContext, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
