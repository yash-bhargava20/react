import React from "react";
import PropTypes from "prop-types";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoItems = ({ tasks, deleteTask }) => {
  return (
    <>
      {tasks.map((item) => (
        <div key={item.id} className="flex items-center gap-2 mt-4">
          <div className="flex items-center flex-1 gap-2 ">
            <input type="checkbox" checked={item.completed}></input>
            <p className="text-slate-700 text-[18px]">{item.task}</p>
          </div>
          <button
            className="bg-red-500 text-white px-2 py-1 cursor-pointer rounded-md "
            onClick={() => {
              deleteTask(item.id);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
};
TodoItems.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TodoItems;
