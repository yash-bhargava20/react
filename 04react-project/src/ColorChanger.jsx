import React, { useState } from "react";
// import Callback from "./Callback";

const ColorChanger = () => {
  const [color, setColor] = useState("");

  return (
    <>
      <div style={{ height: "100vh", background: color }}>
        <div className="flex justify-center mt-5">
          <input
            className="border-black rounded-md px-2 py-1 bg-slate-100 "
            type="text"
            placeholder="write color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          ></input>
        </div>
      </div>
    </>
  );
};

export default ColorChanger;
