import { useEffect, useState } from "react";
import TodoItems from "./TodoItems";
const Todo = () => {
  const [currentdate, setDate] = useState("");
  useEffect(() => {
    let d = new Date();
    d = d.toString().split(" ");
    setDate(d[1] + " " + d[2] + " " + d[3]);
  }, []);

  //Add Task

  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    if (task) {
      const newTask = { id: Date.now(), task, completed: false };
      setTasks([...tasks, newTask]);
      // console.log(tasks);
    }
  };

  //Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="max-w-lg w-11/12  p-7 mt-2 bg-white rounded-lg min-h-max">
          <div className="flex items-center mt-5 justify-between">
            <h1 className="text-3xl font-semibold">To-Do List</h1>
            <p className="text-xl font-semibold">{currentdate}</p>
          </div>
          <div className="flex items-center mt-4  gap-2">
            <input
              type="text"
              placeholder="Add your today's Task"
              id="newtask"
              className=" px-2 py-1 flex-1 outline-none bg-slate-200 rounded-lg placeholder-slate-600 h-10"
            ></input>
            <button
              className="bg-blue-600 text-white px-2 py-1 rounded-lg h-10"
              onClick={() => {
                const task = document.getElementById("newtask").value;
                addTask(task);
                document.getElementById("newtask").value = "";
              }}
            >
              Add
            </button>
          </div>
          <div>
            {/* {tasks.map((item, index) => {
              return (
                <TodoItems
                  tasks={item.task}
                  key={index}
                  id={item.id}
                  isComplete={item.completed}
                  deleteTask={deleteTask}
                ></TodoItems>
              );
            })} */}
            <TodoItems tasks={tasks} deleteTask={deleteTask} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
