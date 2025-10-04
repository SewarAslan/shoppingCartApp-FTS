import "./variables.css";
import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />

        <main className="main-content">
          <section className="cart-section">
            <Cart />
          </section>

          <section className="products-section">
            <ProductsGrid />
          </section>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
