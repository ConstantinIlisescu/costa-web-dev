"use client";

import React, { useEffect } from "react";
import NavbarMenuButtonIcon from "./NavbarMenuButtonIcon";

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
    <button aria-label="menu" onClick={toggleMenu}>
      <NavbarMenuButtonIcon menuOpen={menuOpen} />
    </button>
  );
};

export default NavbarMenuButton;
