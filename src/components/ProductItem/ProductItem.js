import "./ProductItem.css";
import { useCartDispatch } from "../../context/CartContext";

export default function ProductItem({ id, name, price, img }) {
  const dispatch = useCartDispatch();
  return (
    <div className="product-item">
      <img className="product-img" src={img} alt={name} />

      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>

      <button
        className="add-to-cart"
        onClick={() =>
          dispatch({
            type: "ADD-TO-CART",
            item: { id, name, price, image: img, count: 1 },
          })
        }
      >
        Add to cart
      </button>
    </div>
  );
}
