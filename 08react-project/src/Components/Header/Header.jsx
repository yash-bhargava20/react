import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="sticky z-10 top-0">
        <nav className="bg-gray-100 px-4 py-3 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <h3>Logo</h3>
            <div className="w-[400px]">
              <ul className="flex  justify-between items-center mt-2 font-medium gap-4">
                <NavLink
                  to="/Home"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-600"
                  }
                >
                  <li>Home</li>
                </NavLink>

                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-600"
                  }
                >
                  <li>About Us</li>
                </NavLink>

                <NavLink
                  to="/Blog"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500"
                      : "text-gray-600 hover:text-blue-600"
                  }
                >
                  <li>Blogs</li>
                </NavLink>

                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500"
                      : "text-gray-600 hover:text-blue-600"
                  }
                >
                  <li>Pricing</li>
                </NavLink>
              </ul>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="#"
                className="text-gray-800 hover:border-2 border-blue-700 focus:ring-2 font-medium   rounded-md text-sm px-3 py-1.5 focus:outline-none"
              >
                <button>Log In</button>
              </Link>
              <Link
                to="#"
                className="text-white bg-blue-600 px-3 py-1.5 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg focus:outline-none "
              >
                <button>Register</button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
