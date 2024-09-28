import { createContext, useEffect, useMemo, useRef, useState } from "react";
import Parent from "./Parent";
import Count from "./Count";
import ChildA from "./ChildA";

const data1 = createContext();
const data2 = createContext();

const App = () => {
  //list and key
  const l1 = [
    { id: 1, value: "BMW" },
    { id: 2, value: "Merc" },
    { id: 3, value: "Toyota" },
  ];
  const list = l1.map((cars) => (
    <li key={cars.id}>
      {cars.value}
      <br></br>
    </li>
  ));
  //Usestate():
  // const [counter, setCounter] = useState(0);

  let [counter, setCounter] = useState(0);
  const [steps, setSteps] = useState(0);
  const [items, setItems] = useState([]);
  // changing state of array
  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10),
      },
    ]);
  };
  const result = items.map((item) => (
    <li key={item.id}>
      {item.id} : {item.value}
    </li>
  ));

  //  UseEffect():
  //It is a hook that allows you to perform side effect in function component. Side effect are like fetching data
  //dom manipulation, setting up timers, cleanUp
  //we use it whenever component mount
  // useEffect(callback, dpendencies);
  let [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, []);

  //useRef():
  // It allows you to persist value across renders without causing re-renders
  //Directly access DOM elements
  const refElement = useRef("");
  const [name, setName] = useState();

  const changecolor = () => {
    refElement.current.style.color = "red";
  };

  let [rendercount, setRenderCount] = useState(0);
  const refEle = useRef(0);
  useEffect(() => {
    setTimeout(() => {
      refEle.current = refEle.current + 1;
    }, 2000);
  });
  const prevElement = useRef("");
  useEffect(() => {
    prevElement.current = counter;
  });

  //UseMemo(): This hook in React is a performance optimization tool that helps to avoid expensive calculations on every render by memoizing the result of a computation.
  //It is particularly useful when you have a calculation or function that you don't want to re-run unless certain dependencies change.
  const [add, setAdd] = useState(0);
  const [sub, setSubtract] = useState(100);

  const Multiply = useMemo(
    function multiply() {
      // console.log("....");
      return add * 10;
    },
    [add] // only memoized when add state changes
  );

  //UseContext():
  const email = "Yash123@gmail.com";
  const pass = "1234";

  return (
    <>
      <ul>{list}</ul>

      <div>
        <button
          onClick={() => setCounter(counter + 1)}
          className="m-2 px-3 py-1 rounded-lg bg-red-400"
        >
          Click me {counter}
        </button>
      </div>

      <div className="text-lg m-3 text-center">
        <button
          onClick={() => setSteps((prevState) => prevState + 1)}
          className="border-2 border-black px-2 py-1"
        >
          +
        </button>
        <div className="font-medium m-2">{steps}</div>
        <button
          onClick={() => setSteps(steps - 1)}
          // onClick={decsteps}
          className="border-2 border-black px-2.5 py-1"
        >
          -
        </button>
      </div>

      <div>
        <button
          onClick={addItems}
          className=" bg-blue-700 text-white m-2 px-2 py-1 text-base rounded-md hover:bg-blue-600"
        >
          Add Items
        </button>
        <ul>{result}</ul>
      </div>

      {/* using useEffect */}

      <p className="m-2 text-xl font-normal">
        I have rendered {count} times!!{" "}
      </p>

      {/* using ref */}

      <form>
        <input
          ref={refElement}
          type="text"
          value={name}
          placeholder="write name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        {/* <button onClick={Reset}>Reset</button> */}
        <button
          onClick={changecolor}
          className="border-2 border-black rounded-md px-1"
        >
          Change
        </button>
      </form>
      <br></br>
      <h1>Render count: {refEle.current}</h1>
      <button onClick={() => setRenderCount(rendercount + 1)}>click</button>
      <p>button clicked {rendercount} times</p>

      <div className="m-3 text-center ">
        <h1>Random number: {counter}</h1>
        <button
          onClick={() => setCounter(Math.floor(Math.random() * 10))}
          className="border-2 border-black bg-slate-200 px-2"
        >
          Generate No
        </button>
        <h1>Previous Number: {prevElement.current}</h1>
      </div>

      <div>
        <button onClick={() => setAdd(add + 1)} className="m-1">
          Addition
        </button>
        <span>{add}</span>
        <br></br>
        <button onClick={() => setSubtract(sub - 1)} className="m-1">
          Subtraction
        </button>
        <span>{sub}</span>
        <p>Multiply :{Multiply}</p>
      </div>

      <Parent></Parent>
      <Count />

      <data1.Provider value={email}>
        <data2.Provider value={pass}>
          <ChildA />
        </data2.Provider>
      </data1.Provider>
    </>
  );
};

export default App;
export { data1, data2 };
