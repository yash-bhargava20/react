import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Themeswitcher = () => {
  // useContext(ThemeContext) fetches the theme and toggle function from ThemeContext.

  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      className={`h-[100px] w-[100px] ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <button onClick={toggle}>Click</button>
    </div>
  );
};

export default Themeswitcher;
