import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="px-6 py-3 shadow-sm absolute w-full z-50 bg-black-100/20 backdrop-blur-2xl">
      <nav className="flex justify-between items-center">
        <Logo />
        <div className="flex gap-5 ">
          <Link href="#projects" className="link-hover">
            My projects
          </Link>
          <Link href="#about" className="link-hover">
            About
          </Link>
          <Link href="#contact" className="link-hover">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
