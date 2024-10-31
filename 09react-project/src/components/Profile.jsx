import { useContext } from "react";
import UserContext from "../context/userContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return <div>Welcome {user.username}</div>;
};

export default Profile;
