import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className=" bg-blue-500 p-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Canteen App</h1>
        <div className="flex space-x-6">
          <Link to="/itemlist" className="text-white hover:text-gray-200">
            Item List
          </Link>
          <Link to="/cart" className="text-white hover:text-gray-200">
            Cart{" "}
            {totalQuantity > 0 && (
              <span className="bg-red-600 text-white rounded-full px-2 text-sm">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
