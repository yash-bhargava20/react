import React, { useState } from "react";
import Parent from "./components/Parent";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Themeswitcher from "./components/Themeswitcher";
//Prop drilling in React refers to the process of passing data (props) from a parent component down to multiple nested child components, even if some of those components do not need the data directly
//We need to display the username in the GrandChildComponent, but it is deeply nested within ParentComponent and ChildComponent.
//As a result, the username prop has to be passed from App to ParentComponent, from ParentComponent to ChildComponent, and then finally to GrandChildComponent.
const App = () => {
  const [username, setUserName] = useState("Yash");
  return (
    <div>
      <h1>Prop Drilling Example</h1>
      <Parent username={username} />
      <Themeswitcher />
      <Login />
      <Profile />
    </div>
  );
};

export default App;
