import Cards from "./Cards";
import Header from "./Header";
function App() {
  const user = "Yash Bhargava";

  // let myObj = {
  //   username: "Raman Sharma",
  // };

  return (
    <>
      <Header></Header>
      <p className="text-2xl">My name is {user} </p>
      <Cards name="Yash Bhargava" occupation="Student" />
      <Cards name="Raman Sharma" occupation="Software Enginner" />
    </>
  );
}
export default App;
