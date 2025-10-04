import { useState } from "react";
import "./CheckoutForm.css";
import { useCart } from "../../context/CartContext";

export default function CheckoutForm() {
  const { cart, totalPrice } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    console.log("Order submitted:", { ...formData, cart, totalPrice });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "" });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="checkout-container">
        <div className="success-message">
          <h2>✓ Order Submitted Successfully!</h2>
          <p>Thank you for your purchase, {formData.name}!</p>
          <p>A confirmation email has been sent to {formData.email}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="order-summary">
          <p>Total Items: {cart.reduce((sum, item) => sum + item.count, 0)}</p>
          <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
        </div>
        <button
          type="submit"
          className="submit-btn"
          disabled={cart.length === 0}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
