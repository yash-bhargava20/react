import React from "react";
import { useParams } from "react-router";

const User = () => {
  const { id } = useParams();
  return <div>User ID:{id}</div>;
};

export default User;
