import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Shop</h1>
        <nav className="nav">
          <button className="nav-btn">Products</button>
          <button className="nav-btn cart-btn">
            Cart <span className="cart-badge">2</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
