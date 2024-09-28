import { useState, useCallback } from "react";
import Child from "./Child";

//UseCallback():
//useCallback is a hook that return a memozied function. It help optimize perfomance
//When you need to pass a function as a prop to a child component and want to prevent unnecessary re-renders of that child component.
//which is especially useful when passing callbacks to child components that depend on functions.
const Parent = () => {
  const [Age, setAge] = useState(0);
  const [Salary, setSalary] = useState(100000);

  // Without useCallback, this function would be recreated on every render
  const IncAge = useCallback(() => {
    setAge(Age + 1);
  }, [Age]);
  const IncSalary = useCallback(() => {
    setSalary(Salary + 10000);
  }, [Salary]);

  return (
    <>
      <div className="text-center m-2">
        <div className="font-medium">
          <Child text={"Age"} count={Age} />
          <button
            onClick={IncAge}
            className="border-2 px-2 py-1 m-1 border-black bg-red-400"
          >
            Increase Age
          </button>
        </div>

        <button onClick={IncSalary}> Increase Salary : {Salary}</button>
        <br></br>
      </div>
    </>
  );
};

export default Parent;
