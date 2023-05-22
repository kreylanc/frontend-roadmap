"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative flex justify-between items-center h-20 bg-zinc-800 px-4">
      <Link href="/" className="text-3xl">
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
            open ? "bg-purple h-48 justify-around items-center gap-10" : ""
          } flex flex-col md:flex-row`}
        >
          <NavLink link="/" title="Home" />
          <NavLink link="/about" title="About" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
