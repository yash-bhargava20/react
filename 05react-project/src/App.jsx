import Todo from "./Todo";

const App = () => {
  return (
    <>
      <div className=" min-h-screen">
        <h1 className="text-center p-2 font-semibold text-3xl text-white">
          Todo List
        </h1>
        <Todo />
      </div>
    </>
  );
};

export default App;
