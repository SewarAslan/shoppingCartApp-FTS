import { createContext, useContext, useReducer } from "react";
export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD-TO-CART": {
      const existingItem = cart.find((item) => item.id === action.item.id);
      if (existingItem) {
        return cart.map((item) =>
          item.id === action.item.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...cart, { ...action.item, count: 1 }];
    }
    case "REMOVE-FROM-CART":
      return cart.filter((item) => item.id !== action.id);

    default:
      return cart;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const totalItems = cart.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );
  console.log(cart);
  return (
    <CartContext.Provider value={{ cart, totalItems, totalPrice }}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error("useCartDispatch must be used within a CartProvider");
  }
  return context;
}
