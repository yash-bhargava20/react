import React from "react";
import { useDispatch } from "react-redux";
import { addTocart } from "../redux/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const items = [
    { id: 1, name: "Samosa", price: 20 },
    { id: 2, name: "Chole Bhature", price: 50 },
    { id: 3, name: "Maggie", price: 40 },
    { id: 4, name: "Cold Coffee", price: 60 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-600">
        Canteen Items
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-lg p-6 flex flex-col items-center bg-white hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4 text-lg">₹{item.price}</p>
            <button
              onClick={() => dispatch(addTocart(item))}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
