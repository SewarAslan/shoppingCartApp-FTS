import "./variables.css";
import "./App.css";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";

function App() {
  return (
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
  );
}

export default App;
