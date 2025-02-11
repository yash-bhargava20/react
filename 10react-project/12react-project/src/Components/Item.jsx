import React, { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider";
const Item = ({ itemname, price }) => {
  const cart = useContext(CartContext);
  console.log(cart);

  return (
    <>
      <div className="item-card">
        <h2>{itemname}</h2>
        <p>Price: ${price}</p>
        <button
          onClick={() => cart.setItems([...cart.items, { itemname, price }])}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Item;
