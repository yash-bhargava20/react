import { useContext } from "react";
import { data1, data2 } from "./App";
const ChildB = () => {
  const Email = useContext(data1);
  const Pass = useContext(data2);
  return (
    <>
      Email : {Email}
      Password: {Pass}
    </>
  );
};

export default ChildB;
