import React, { Children, useState } from "react";
import { ThemeContext } from "./ThemeContext";

//const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    // ThemeContext.Provider wraps all child components.
    // It shares the theme and toggleTheme function with all components.
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
