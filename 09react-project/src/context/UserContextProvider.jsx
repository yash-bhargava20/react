// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import UserContext from "./userContext";
import PropTypes from "prop-types";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
UserContextProvider.protoTypes = {
  children: PropTypes.node.isRequired,
};
export default UserContextProvider;
