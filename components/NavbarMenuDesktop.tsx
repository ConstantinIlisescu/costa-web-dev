"use client";

import React, { useState } from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarMenuButton from "./NavbarMenuButton";

const NavbarMenuDesktop = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="hidden relative md:block h-10">
      <div className="absolute right-0 top-0 flex items-center justify-center h-full">
        <NavbarMenuButton menuOpen={menuOpen} menuSetter={setMenuOpen} />
      </div>
      <div
        className={` text-white gap-2 items-center text-xl font-semibold transition-all duration-1000 ease-in-out ${
          menuOpen ? "delay-100 translate-x-0" : "translate-x-96"
        }`}
      >
        <NavbarLinks />
      </div>
    </div>
  );
};

export default NavbarMenuDesktop;
