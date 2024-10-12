import React from "react";
import { useParams } from "react-router";

// React Router provides a hook called useParams to access the dynamic parts of the route.
const User = () => {
  const { userid } = useParams();

  //using as object
  // const params = useParams();
  // const userid = params.userid;
  return <div>User ID:{userid}</div>;
};

export default User;
