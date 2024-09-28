import React from "react";
const Child = ({ text, count }) => {
  console.log("child Component");

  return (
    <>
      <h1>
        {text}:{count}
      </h1>
    </>
  );
};

export default React.memo(Child);
