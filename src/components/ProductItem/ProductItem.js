import "./ProductItem.css";
export default function ProductItem({ name, price, img }) {
  return (
    <div className="product-item">
      <img className="product-img" src={img} alt="img-desc" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price}</p>
      <button className="add-to-cart" onClick={""}>
        Add to cart
      </button>
    </div>
  );
}
