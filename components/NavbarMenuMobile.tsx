"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import NavbarLinks from "./NavbarLinks";
import NavbarMenuButtonIcon from "./NavbarMenuButtonIcon";

const NavbarMenuMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);
  return (
    <div className="flex items-center md:hidden py-1">
      <Sheet open={menuOpen} onOpenChange={(isOpen) => setMenuOpen(isOpen)}>
        <SheetTrigger>
          <NavbarMenuButtonIcon menuOpen={menuOpen} />
        </SheetTrigger>
        <SheetContent className="border-none bg-black-100/20 backdrop-blur-2xl">
          <SheetHeader className="pt-20">
            <SheetTitle className="hidden">
              Click the links below to navigate to a specific section
            </SheetTitle>
            <NavbarLinks parentCallBack={closeMenu} />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavbarMenuMobile;
