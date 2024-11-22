import React from "react";

const Header = () => {
  return (
    <>
      <header className="sticky z-10 top-0 left-0 ">
        <div className="w-full mx-auto px-14  ">
          <nav className="flex items-center justify-between w-full px-10 py-4 ">
            <h1 className="text-xl font-semibold">Portfolio</h1>
            <ul className="flex  gap-6">
              <li className="font-normal text-base px-1 py-.5 hover:text-blue-500 transition duration-300 ease-in-out">
                <a href="#home">Home</a>
              </li>
              <li className="font-normal text-base px-1 py-.5 hover:text-blue-500 transition duration-300 ease-in-out">
                <a href="#about">About</a>
              </li>
              <li className="font-normal text-base px-1 py-.5 hover:text-blue-500 transition duration-300 ease-in-out">
                <a href="skills">Skills</a>
              </li>
              <li className="font-normal text-base px-1 py-.5 hover:text-blue-500 transition duration-300 ease-in-out">
                <a>My Projects</a>
              </li>
              <li className="font-normal text-base px-1 py-.5 hover:text-blue-500 transition duration-300 ease-in-out">
                <a>Contact Me</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
