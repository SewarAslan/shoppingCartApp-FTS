import "./Header.css";
import { useCart } from "../../context/CartContext";

export default function Header({ onNavigate }) {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Shop</h1>
        <nav className="nav">
          <button className="nav-btn" onClick={() => onNavigate("products")}>
            Products
          </button>
          <button
            className="nav-btn cart-btn"
            onClick={() => onNavigate("cart")}
          >
            Cart{" "}
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
}
