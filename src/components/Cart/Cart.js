import CartItem from "../CartItem";
import "./Cart.css";

export default function Cart() {
  const addedProducts = [
    {
      id: "a100",
      name: "Apple Airpod Max",
      price: 2500,
      image:
        "https://i.pinimg.com/736x/d4/a2/20/d4a220bf17740ec06138463e3e2c2b33.jpg",
      count: 3,
    },
    {
      id: "a101",
      name: "JBL E45BT",
      price: 2000,
      image:
        "https://i.pinimg.com/736x/53/b1/80/53b180a0773da28748087afa2fd692fd.jpg",
      count: 1,
    },
  ];

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <ul className="cart-list">
        {addedProducts.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            count={product.count}
          />
        ))}
      </ul>
    </div>
  );
}
