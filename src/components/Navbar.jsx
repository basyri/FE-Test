import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 font-bold">Frontend.</h1>
      <div className="text-xl">
        <span className="hidden md:inline lg:hidden">Layout 1 Tablet</span>
        <span className="inline md:hidden">Layout 1 Mobile</span>
        <span className="hidden lg:inline">Layout 1 Desktop 1</span>
      </div>
    </div>
  );
};

export default Navbar;
