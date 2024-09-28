import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoItems = ({ tasks, id, isComplete, deleteTask }) => {
  return (
    <>
      <div className="flex items-center gap-2 mt-4">
        <div className="flex items-center flex-1 gap-2 ">
          <input type="checkbox"></input>
          <p className="text-slate-700 text-[18px]">{tasks}</p>
        </div>
        <button
          className="bg-red-500 text-white px-2 py-1 cursor-pointer rounded-md "
          onClick={() => {
            deleteTask(id);
          }}
        >
          Remove
        </button>
        {/* <FontAwesomeIcon icon="fa-solid fa-trash-can" />{" "}
        <FontAwesomeIcon icon="fa-solid fa-user" /> */}
      </div>
    </>
  );
};

export default TodoItems;
