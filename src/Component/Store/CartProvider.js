import React, { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./auth-coontext";

const CartContext = createContext();

const API_BASE_URL = "/cart";

export const CartProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (currentUser) {
      fetchCartItems(currentUser.email);
    }
  }, [currentUser]);

  const sanitizeEmail = (email) => {
    return email.replace(/[@.]/g, "");
  };

  const fetchCartItems = async (email) => {
    try {
      const sanitizedEmail = sanitizeEmail(email);
      const response = await fetch(`${API_BASE_URL}${sanitizedEmail}`);
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const addToCart = async (item) => {
    if (!currentUser) {
      console.error("User not logged in");
      return;
    }
    try {
      const sanitizedEmail = sanitizeEmail(currentUser.email);
      const response = await fetch(`${API_BASE_URL}${sanitizedEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      if (response.ok) {
        setCartItems((prevItems) => [...prevItems, item]);
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
      const sanitizedEmail = sanitizeEmail(currentUser.email);
      const response = await fetch(
        `${API_BASE_URL}${sanitizedEmail}/${item._id}`,
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
    addToCart,
    removeItem: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

// import React, { createContext, useState, useContext, useEffect } from "react";
// import { useAuth } from "./auth-context";

// const CartContext = createContext();

// const API_BASE_URL =
//   "https://crudcrud.com/api/3d7450d761ad4e60a79263b83b824a71/cart";

// export const CartProvider = ({ children }) => {
//   const { currentUser, logout } = useAuth();
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     if (currentUser) {
//       fetchCartItems(currentUser.email);
//     } else {
//       setCartItems([]); // Clear cart when user logs out
//     }
//   }, [currentUser]);

//   const fetchCartItems = async (email) => {
//     const sanitizedEmail = email.replace(/[@.]/g, "");
//     try {
//       const response = await fetch(`${API_BASE_URL}${sanitizedEmail}`);
//       if (!response.ok) throw new Error("Network response was not ok");
//       const data = await response.json();
//       setCartItems(data);
//     } catch (error) {
//       console.error("Error fetching cart items:", error);
//     }
//   };

//   const addToCart = async (item) => {
//     if (!currentUser) {
//       console.error("User not logged in");
//       return;
//     }
//     const sanitizedEmail = currentUser.email.replace(/[@.]/g, "");
//     const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (existingItem) {
//       // Update quantity of existing item
//       const updatedItem = {
//         ...existingItem,
//         quantity: existingItem.quantity + 1,
//       };
//       const updatedItems = cartItems.map((cartItem) =>
//         cartItem.id === item.id ? updatedItem : cartItem
//       );
//       setCartItems(updatedItems);

//       try {
//         await fetch(`${API_BASE_URL}${sanitizedEmail}/${existingItem._id}`, {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(updatedItem),
//         });
//       } catch (error) {
//         console.error("Error updating cart item:", error);
//       }
//     } else {
//       // Add new item to cart
//       item.quantity = 1;
//       try {
//         const response = await fetch(`${API_BASE_URL}${sanitizedEmail}`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(item),
//         });
//         if (response.ok) {
//           const newItem = await response.json();
//           setCartItems((prevItems) => [...prevItems, newItem]);
//         } else {
//           console.error("Error adding to cart");
//         }
//       } catch (error) {
//         console.error("Error adding to cart:", error);
//       }
//     }
//   };

//   const removeFromCart = async (index) => {
//     if (!currentUser) {
//       console.error("User not logged in");
//       return;
//     }
//     try {
//       const item = cartItems[index];
//       const sanitizedEmail = currentUser.email.replace(/[@.]/g, "");
//       const response = await fetch(
//         `${API_BASE_URL}${sanitizedEmail}/${item._id}`,
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

//   const getTotalPrice = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   const cartContext = {
//     cartItems,
//     addToCart,
//     removeItem: removeFromCart,
//     getTotalPrice,
//   };

//   return (
//     <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
