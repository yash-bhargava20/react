import React from "react";
import PropTypes from "prop-types";

const Board = ({ squares, click }) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="grid grid-cols-3 max-w-md place-items-center">
        {squares.map((item, index) => {
          return (
            <button
              key={index}
              className="bg-slate-100 h-[100px] w-[150px] text-2xl p-4 border border-slate-500"
              onClick={() => click(index)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  click: PropTypes.func.isRequired,
};

export default Board;
