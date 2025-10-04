import "./CartItem.css";
import { useCartDispatch } from "../../context/CartContext";
export default function CartItem({ id, name, price, image, count }) {
  const dispatch = useCartDispatch();

  return (
    <li className="cart-item">
      <div className="cart-item-image">
        <img src={image} alt={name} />
      </div>

      <div className="cart-item-details">
        <h3 className="cart-item-name">{name}</h3>
        <p className="cart-item-price">${price}</p>
      </div>

      <div className="cart-item-quantity">
        <button
          className="quantity-btn"
          type="button"
          onClick={() =>
            dispatch({
              type: "UPDATE-QUANTITY",
              item: { id, name, price, image, count },
              newCount: count - 1,
            })
          }
          disabled={count === 1}
        >
          -
        </button>
        <span className="quantity-value">{count}</span>
        <button
          className="quantity-btn"
          type="button"
          disabled={count >= 99}
          onClick={() =>
            dispatch({
              type: "UPDATE-QUANTITY",
              item: { id, name, price, image },

              newCount: count + 1,
            })
          }
        >
          +
        </button>
      </div>

      <div className="cart-item-total">
        <p className="total-price">${price * count}</p>
      </div>

      <button
        className="remove-btn"
        type="button"
        aria-label="Remove item"
        onClick={() =>
          dispatch({
            type: "REMOVE-FROM-CART",
            id,
          })
        }
      >
        ×
      </button>
    </li>
  );
}
