import React from "react";
import logo from '../static/man.png';

// https://flowbite.com/docs/components/navbar/
const Navbar = () => {
  return (
      <div className="bg-white max-w-screen-xl top-0 sticky flex flex-wrap justify-between mx-auto p-4 font-mono">
      <a href='#home'><img src={logo} alt='Icon' className="h-10 mr-3" title="i got this from flaticon"></img></a>
        <div className="w-full md:block md:w-auto">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          <a href='#career'><li className="hover:text-purple-700 text-xl font-semibold block py-2 pl-3 pr-4">Career</li></a>
          <a href='#projects'><li className="hover:text-purple-700 text-xl font-semibold block py-2 pl-3 pr-4">Projects</li></a>
          <a href='#skills'><li className="hover:text-purple-700 text-xl font-semibold block py-2 pl-3 pr-4">Skills</li></a>
          <a href='#contact'><li className="hover:text-purple-700 text-xl font-semibold block py-2 pl-3 pr-4">Contact</li></a>
        </ul>
        </div>
      </div>
  );
};

export default Navbar;
