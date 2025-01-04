import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="px-5 py-3 shadow-sm">
      <nav className="flex justify-between items-center">
        <Link
          href="#home"
          className="flex items-center gap-2 hover:text-white-200"
        >
          <Image src="/main_logo.png" alt="logo" width={30} height={30} />
          <span>cWebDev</span>
        </Link>
        <div className="flex gap-5 ">
          <Link href="#projects" className="hover:text-white-200">
            My projects
          </Link>
          <Link href="#about" className="hover:text-white-200">
            About
          </Link>
          <Link href="#contact" className="hover:text-white-200">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
