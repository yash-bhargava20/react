import { useContext, useState } from "react";
import UserContext from "../context/userContext";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, SetPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm">
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-1"
            type="text"
            placeholder="Enter Useranme"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className=" w-full px-3 py-2 border-gray-300 rounded-lg focus:outline-none focus:ring-1"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 mt-6 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
