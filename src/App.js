import { useState } from "react";
import "./variables.css";
import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";
import { CartProvider } from "./context/CartContext";

function App() {
  const [currentView, setCurrentView] = useState("products");

  return (
    <CartProvider>
      <div className="App">
        <Header onNavigate={setCurrentView} />
        <main className="main-content">
          {currentView === "products" ? (
            <>
              <section className="cart-section">
                <Cart />
              </section>
              <section className="products-section">
                <ProductsGrid />
              </section>
            </>
          ) : (
            <section className="checkout-section">
              <CheckoutForm />
            </section>
          )}
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
