import React from "react";
import { useLoaderData, useNavigate } from "react-router";

//UseNvigate hook for navigate Programmatically it is useful when you want to triger navigation after certain actions like
//button clicks,form submission, login , API calls etc
const Home = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  return (
    <>
      <div>Home</div>
      <button onClick={() => navigate("/OrderSummary")}>Place Order</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default Home;
