import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import NavbarLinks from "./NavbarMenuLinks";

const NavbarMenuMobile = ({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="flex items-center py-1">
      <Sheet open={menuOpen} onOpenChange={(isOpen) => setMenuOpen(isOpen)}>
        <SheetTrigger>
          <span className="hidden">Close</span>
        </SheetTrigger>
        <SheetContent className="border-none bg-black-100/20 backdrop-blur-2xl">
          <SheetHeader className="pt-20">
            <SheetTitle className="sr-only">
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
