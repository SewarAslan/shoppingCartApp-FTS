import "./CartItem.css";

export default function CartItem({ id, name, price, image, count }) {
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
        <button className="quantity-btn" type="button" onClick={() => {}}>
          -
        </button>
        <span className="quantity-value">{count}</span>
        <button className="quantity-btn" type="button" onClick={() => {}}>
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
        onClick={() => {}}
      >
        ×
      </button>
    </li>
  );
}
