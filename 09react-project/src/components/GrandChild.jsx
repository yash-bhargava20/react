import React from "react";

const GrandChild = ({ username }) => {
  return (
    <div>
      <h3>GrandChild Component</h3>
      <p>Username: {username}</p>
    </div>
  );
};

export default GrandChild;
