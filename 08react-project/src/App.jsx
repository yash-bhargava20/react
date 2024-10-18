import { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import User from "./Components/User";
import OrderSummary from "./Components/Home/OrderSummary";
import Login from "./Components/Login/Login";
import Myprofile from "./Components/Login/Myprofile";

//React Router enables "client side routing".
// React Router is a standard library for routing in React. It enables navigation between different components and allows for building single-page applications (SPAs) where different pages or views can be rendered dynamically without reloading the page.
//React Router achieves this by mapping specific URLs to corresponding components.
//The Route component is used to define a path and which component should be rendered when the URL matches this path.
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Layout></Layout>
//       </div>
//     ),
//     children: [
//       {
//         path: "/About",
//         element: (
//           <div>
//             <About />
//           </div>
//         ),
//       },
//       {
//         path: "/Home",
//         element: (
//           <div>
//             <Home />
//           </div>
//         ),
//       },
//     ],
//   },
// ]);

//other way
/*A <BrowserRouter> stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.*/
//Dynamic Routing
//Dynamic routing in React allows your application to handle different routes dynamically, based on the path parameters, user input, or other conditions. It typically relies on libraries like React Router for managing routes.
//ProtectedRoute

const ProtectedRoute = ({ isAuthenticated, children }) => {
  //children is the content (or component) passed inside the ProtectedRoute when it's used.

  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Loader function that fetches data before rendering the component
async function homelaoder() {
  const response = await fetch("https://api.github.com/users/yash-bhargava20");
  const data = await response.json();
  return data;
}
const App = () => {
  const [Authenticated, setAuthenticated] = useState(false);
  console.log(Authenticated);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/Home" element={<Home />} loader={homelaoder} />
        <Route path="/About" element={<About />} />
        <Route
          path="/OrderSummary"
          element={
            <ProtectedRoute isAuthenticated={Authenticated}>
              <OrderSummary />
            </ProtectedRoute>
          }
        />
        <Route path="User" element={<User />}>
          <Route path=":userid" element={<User />} />
        </Route>
        <Route path="/login" element={<Login setAuth={setAuthenticated} />} />
        <Route
          path="/myprofile"
          element={
            <ProtectedRoute isAuthenticated={Authenticated}>
              <Myprofile />
            </ProtectedRoute>
          }
        />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
