import React from "react";
import Counter from "./components/Counter";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./features/CounterSlice";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <Counter />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
