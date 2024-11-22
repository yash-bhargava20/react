import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";

const App = () => {
  return (
    <>
      <div className="relative bg-slate-900 text-white min-h-screen w-full">
        <div className="absolute inset-y-28 inset-x-10 w-[1400px] h-[500px] mx-auto rotate-180 rounded-full bg-gradient-to-r from-purple-950 to to-blue-900 blur-3xl opacity-80 xl:w-[1400px] xl:h-[500px]  lg:w-[1000px] lg:h-[450px] sm:w-[700px] sm:h-[400px] "></div>
        <Header />
        <Home />
      </div>
    </>
  );
};

export default App;
