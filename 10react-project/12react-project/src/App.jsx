import React from "react";
import Item from "./Components/Item";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <>
      <div>
        <Item itemname="Book" price="1000" />
        <Item itemname="Iphone" price="10000" />
        <Item itemname="speaker" price="5000" />
        <Cart />
      </div>
    </>
  );
};

export default App;
