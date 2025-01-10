"use client";

import React, { useEffect } from "react";

const NavbarMenuButton = ({
  menuOpen,
  menuSetter,
}: {
  menuOpen: boolean;
  menuSetter: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const toggleMenu = () => menuSetter((prevState) => !prevState);

  useEffect(() => {
    const handleScroll = () => {
      // Clear the active item to close all accordions on scroll
      if (menuOpen) {
        menuSetter(false);
      }
    };
    // Attach the scroll event listener only when an item is active (open)
    if (menuOpen) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    // Clean up the scroll event listener on component unmount or when no item is active
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen, menuSetter]);

  return (
    <button
      aria-label="menu"
      className="flex flex-col gap-2 justify-center items-end"
      onClick={toggleMenu}
    >
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
    </button>
  );
};

export default NavbarMenuButton;
