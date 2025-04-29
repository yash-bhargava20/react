import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div className="flex flex-col">
                  <span>{item.name}</span>
                  <span className="text-sm text-gray-600">
                    ₹{item.price} each
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t pt-2">
            <p className="font-semibold">Total Items: {totalQuantity}</p>
            <p className="font-semibold">Total Price: ₹{totalPrice}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
