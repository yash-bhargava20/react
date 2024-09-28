import useCounter from "./useCounter";

const Counter = () => {
  const [count, Increment, Decrement] = useCounter();

  return (
    <>
      <div className="text-center m-2">
        <div className="font-bold text-xl">{count}</div>
        <button
          onClick={Increment}
          className="bg-blue-500 font-medium text-white px-2 py-1 m-2 rounded-lg"
        >
          Increment
        </button>
        <button
          onClick={Decrement}
          className="bg-blue-500 font-medium text-white px-2 py-1 m-2 rounded-lg"
        >
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
