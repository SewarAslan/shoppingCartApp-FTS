import CartItem from "../CartItem";
import "./Cart.css";
import { useCart } from "../../context/CartContext";
export default function Cart() {
  const { cart, totalPrice } = useCart();

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length > 0 ? (
        <ul className="cart-list">
          {cart.map((product) => (
            <CartItem
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              count={product.count}
            />
          ))}
          <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
        </ul>
      ) : (
        <p className="empty-cart">Your cart is empty</p>
      )}
    </div>
  );
}
