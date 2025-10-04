import ProductItem from "../ProductItem/ProductItem";
import { products } from "../../data/products";
import "./ProductsGrid.css";
export default function ProductsGrid() {
  return (
    <div className="product-grid-container">
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.image}
          />
        ))}
      </div>
    </div>
  );
}
