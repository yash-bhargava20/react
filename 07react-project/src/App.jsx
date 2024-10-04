import React from "react";
import TicTacToe from "./Components/TicTacToe";

const App = () => {
  return (
    <>
      <h1 className="text-center m-2 font-semibold text-2xl ">
        Tic-Tac-Toe Game
      </h1>
      <TicTacToe />
    </>
  );
};

export default App;
