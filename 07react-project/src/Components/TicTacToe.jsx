import React, { useState } from "react";
import Board from "./Board";

//Inital state array is filled with null values
const board = () => Array(9).fill(null);

const TicTacToe = () => {
  const [cell, setcell] = useState(board());
  const [isNext, setisNext] = useState(true);

  //When it clicks to cell update nextSquares array
  const handleClick = (index) => {
    const winner = calculateWinner();
    if (winner || cell[index]) return;
    const nextSquares = [...cell];
    // nextSquares[index] = isNext ? "X" : "O";
    if (isNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    //updates the state of cell array
    setcell(nextSquares);
    setisNext(!isNext);
  };

  //reset game:
  const resetGame = () => {
    setcell(Array(9).fill(null));
    setisNext(true);
  };

  //check winner:
  const calculateWinner = () => {
    const condition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < condition.length; i++) {
      const [a, b, c] = condition[i];
      if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) return cell[a];
    }
    return null;
  };
  const winner = calculateWinner(cell);
  let status;
  if (winner) {
    status = `Winner of the game is: ${winner}`;
  } else if (cell.every((item) => item != null)) {
    status = `Game is Draw`;
  } else {
    status = `Next player: ${isNext ? "X" : "O"}`;
  }

  return (
    <>
      <div>
        {/* This array is passed as a prop to the Board component */}
        <Board squares={cell} click={handleClick} />
      </div>
      <div className="flex justify-around items-center mx-5 mt-5 font-normal">
        <div className="">{status}</div>
        <div className="">
          <button onClick={resetGame}>Reset Game</button>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
