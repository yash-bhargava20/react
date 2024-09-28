const Header = () => {
  return (
    <>
      <nav className="p-4 bg-slate-50 flex items-center justify-between">
        <h1 className="font-bold text-4xl">project</h1>
        <ul className="flex items-center">
          <li className="p-2 mx-4 text-xl hover:text-blue-500 duration-300 cursor-pointer">
            Home
          </li>
          <li className="p-2 mx-4 text-xl  hover:text-blue-500 duration-300 cursor-pointer ">
            About Us
          </li>
          <li className="p-2 mx-4 text-xl  hover:text-blue-500 duration-300 cursor-pointer">
            Contact
          </li>
          <li className="p-2 mx-4 text-xl  hover:text-blue-500 duration-300 cursor-pointer">
            Blog
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
