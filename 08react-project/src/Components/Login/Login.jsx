import React from "react";
import { useNavigate } from "react-router";

const Login = ({ setAuth }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log("clicked");
    setAuth(true);
    navigate("/myprofile");
  };
  return (
    <>
      <div>
        <h1>LOGIN</h1>
        <button onClick={handleLogin}>login</button>
      </div>
    </>
  );
};

export default Login;
