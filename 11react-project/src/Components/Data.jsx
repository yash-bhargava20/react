import React from "react";
import { TypeAnimation } from "react-type-animation";

const Data = () => {
  return (
    <div className="w-[600px]">
      <h1>
        <TypeAnimation
          sequence={[
            "I am Yash Bhargava",
            1000,
            "I am Software Developer",
            1000,
          ]}
          wrapper="span"
          speed={10}
          className="text-5xl font-bold mb-4"
          repeat={Infinity}
        />
      </h1>
      <h3 className="text-xl text-white m-3">Frontend Developer</h3>
      <p className=" px-2 py-3 text-white font-light">
        I am a creative student building projects in React and JavaScript.
        Dedicated and passionate about programming!
      </p>
      <button className="font-medium text-xl mt-8 px-3 py-2 border border-white rounded-md shadow-insetBlack">
        Download Resume
      </button>
    </div>
  );
};

export default Data;
