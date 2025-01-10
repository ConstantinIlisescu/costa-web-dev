import React from "react";
import Logo from "./Logo";
import NavbarMenuDesktop from "./NavbarMenuDesktop";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full px-6 py-3 shadow-sm z-50 bg-black-100/20 backdrop-blur-2xl ">
      <nav className="flex justify-between items-center">
        <Logo />
        <NavbarMenuDesktop />
      </nav>
    </header>
  );
};

export default Navbar;
