import React from "react";
import GrandChild from "./GrandChild";

const Child = ({ username }) => {
  return (
    <div>
      <GrandChild username={username} />
    </div>
  );
};

export default Child;
