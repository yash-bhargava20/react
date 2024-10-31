import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Themeswitcher = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      className={`h-[100px] w-[100px] ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}

      //   style={{
      //     background: theme === "light" ? "#fff" : "#000",
      //     color: theme === "light" ? "#000" : "#fff",
      //   }}
    >
      <button onClick={toggle}>Click</button>
    </div>
  );
};

export default Themeswitcher;
