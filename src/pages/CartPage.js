import { useCart } from "../context/CartContext";

export function Cart() {
  const { cartItems } = useCart();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
}
