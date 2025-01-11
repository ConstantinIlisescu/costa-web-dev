import React from "react";

const NavbarMenuBtn = ({
  menuOpen,
  toggleMenu,
  styles,
  ariaLabel,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
  styles?: string;
  ariaLabel?: string;
}) => {
  return (
    <button aria-label={ariaLabel} onClick={toggleMenu} className={styles}>
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
    </button>
  );
};

export default NavbarMenuBtn;
