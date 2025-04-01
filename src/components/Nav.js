import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function Nav() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav>
      <Link to="/">Products</Link>
      {"   "}
      <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
}
