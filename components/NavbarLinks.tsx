import React from "react";
import Link from "next/link";

const NavbarLinks = () => {
  return (
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
  );
};

export default NavbarLinks;
