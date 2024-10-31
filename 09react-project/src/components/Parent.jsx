import React from "react";
import Child from "./Child";

const Parent = ({ username }) => {
  return (
    <>
      <Child username={username} />
    </>
  );
};

export default Parent;
