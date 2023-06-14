"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

function Header() {
  const [open, setOpen] = useState(false);
  // get the current path name
  const path = usePathname();
  return (
    <header className="relative flex 2xl:max-w-7xl mx-auto justify-between items-center h-20 px-4 lg:px-8">
      <Link href="/" className="text-3xl">
        {/* TODO: Add logo image */}
        🤡
      </Link>
      {!open ? (
        <HiMenu
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer "
          size="2em"
        />
      ) : (
        <HiX
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer "
          size="2em"
        />
      )}

      <nav
        className={`absolute inset-0 top-20 ${
          open ? " translate-x-0" : "translate-x-full"
        } md:flex md:relative md:top-0 md:translate-x-0 transition-transform duration-300 ease-in`}
      >
        <ul
          className={`${
            open ? "justify-around items-center gap-10" : ""
          } relative bg-zinc-900 h-48 md:bg-transparent md:h-auto z-10  flex flex-col md:flex-row`}
        >
          <NavLink link="/" title="Home" />
          <NavLink link="/about" title="About" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
