import React from "react";
import NavbarLinks from "./NavbarMenuLinks";

const NavbarMenuDesktop = ({ menuOpen }: { menuOpen: boolean }) => {
  return (
    <div
      className={`hidden md:block transition-all duration-500 ease-in-out ${
        menuOpen ? "delay-100 translate-x-0" : "translate-x-96"
      }`}
    >
      <NavbarLinks />
    </div>
  );
};

export default NavbarMenuDesktop;
