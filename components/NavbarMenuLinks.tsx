import React from "react";
import Link from "next/link";

const NavbarLinks = ({
  parentCallBack,
}: {
  parentCallBack?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex gap-5 flex-col md:flex-row text-2xl md:text-xl">
      <Link
        href="#projects"
        className="link-hover"
        onClick={() => parentCallBack && parentCallBack(false)}
      >
        My projects
      </Link>
      <Link
        href="#about"
        className="link-hover"
        onClick={() => parentCallBack && parentCallBack(false)}
      >
        About
      </Link>
      <Link
        href="#contact"
        className="link-hover"
        onClick={() => parentCallBack && parentCallBack(false)}
      >
        Contact
      </Link>
    </div>
  );
};

export default NavbarLinks;
