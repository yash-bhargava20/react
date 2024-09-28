import { useReducer } from "react";
//UseReducer():
//Alternative of useState,use for state managment.
//It is useful when dealing with complex state logic
//If you need to manage multiple peice of state that depend each other
const initialize = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};
const Count = () => {
  const [count, dispatch] = useReducer(reducer, initialize);
  return (
    <>
      <div>Count : {count}</div>
      <div>
        <button onClick={() => dispatch("Increment")}>Increment</button>{" "}
        <br></br>
        <button onClick={() => dispatch("Decrement")}>Decrement</button>
      </div>
    </>
  );
};

export default Count;
