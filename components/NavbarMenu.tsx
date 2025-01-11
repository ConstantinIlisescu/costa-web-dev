"use client";

import React, { useEffect, useState } from "react";
import NavbarMenuDesktop from "./NavbarMenuDesktop";
import NavbarMenuMobile from "./NavbarMenuMobile";
import NavbarMenuBtn from "./NavbarMenuBtn";

const NavbarMenu = () => {
  const [menuOpenDesktop, setMenuOpenDesktop] = useState(false);
  const toggleMenuDesktop = () => setMenuOpenDesktop((prevState) => !prevState);

  const [menuOpenMobile, setMenuOpenMobile] = useState(false);
  const toggleMenuMobile = () => setMenuOpenMobile((prevState) => !prevState);

  useEffect(() => {
    const handleScroll = () => {
      // Clear the active item to close all accordions on scroll
      if (menuOpenDesktop) {
        setMenuOpenDesktop(false);
      }
    };
    // Attach the scroll event listener only when an item is active (open)
    if (menuOpenDesktop) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    // Clean up the scroll event listener on component unmount or when no item is active
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpenDesktop]);

  return (
    <div className="relative h-10">
      <div className="absolute right-0 top-0 flex items-center justify-center h-full">
        <NavbarMenuBtn
          menuOpen={menuOpenDesktop}
          toggleMenu={toggleMenuDesktop}
          styles="hidden md:block"
          ariaLabel="menu-desktop"
        />
        <NavbarMenuBtn
          menuOpen={menuOpenMobile}
          toggleMenu={toggleMenuMobile}
          styles=" md:hidden"
          ariaLabel="menu-mobile"
        />
      </div>
      <NavbarMenuDesktop menuOpen={menuOpenDesktop} />
      <NavbarMenuMobile
        menuOpen={menuOpenMobile}
        setMenuOpen={setMenuOpenMobile}
      />
    </div>
  );
};

export default NavbarMenu;
