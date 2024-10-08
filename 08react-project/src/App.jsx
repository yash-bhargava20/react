import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import User from "./Components/User";

//React Router enables "client side routing".
// React Router is a standard library for routing in React. It enables navigation between different components and allows for building single-page applications (SPAs) where different pages or views can be rendered dynamically without reloading the page. React Router achieves this by mapping specific URLs to corresponding components.
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/User/:id" element={<User />} />
    </Route>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
