import React from "react";

const NavbarMenuButtonIcon = ({ menuOpen }: { menuOpen: boolean }) => {
  return (
    <div className="flex flex-col gap-2 items-end">
      <div
        className={`w-20 h-1 bg-orange rounded-xl transition-all duration-500 ease-in-out ${
          menuOpen ? "w-96 opacity-0" : "delay-300"
        }`}
      ></div>
      <div
        className={`w-16 h-1 bg-orange rounded-xl transition-all duration-500 ease-in-out ${
          menuOpen ? "w-80 opacity-0" : "delay-300"
        }`}
      ></div>
      <div
        className={`w-10 h-1 bg-orange rounded-xl transition-all duration-500 ease-in-out ${
          menuOpen ? "w-72 opacity-0" : "delay-300"
        }`}
      ></div>
    </div>
  );
};

export default NavbarMenuButtonIcon;
