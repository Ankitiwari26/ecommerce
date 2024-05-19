import { useEffect } from "react";
import { useAuth } from "../Store/auth-coontext";
import { useCart } from "../Store/CartProvider";
const Cart = () => {
  const { cartItems, fetchCartItems } = useCart();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser) {
      fetchCartItems(currentUser.email);
    }
  }, [currentUser, fetchCartItems]);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.title} - {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
