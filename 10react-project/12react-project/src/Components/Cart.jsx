import React, { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";

const Cart = () => {
  const cart = useContext(CartContext);
  console.log("Cart context:", cart);
  return (
    <>
      <h1>Cart</h1>
      {cart &&
        cart.items.map((item, index) => (
          <li key={index}>
            {item.itemname}-${item.price}
          </li>
        ))}
    </>
  );
};

export default Cart;
