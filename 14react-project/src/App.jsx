import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
      </div>
      <div>
        <Routes>
          <Route path="/itemlist" element={<ProductList />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
