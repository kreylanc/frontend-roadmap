"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "../ThemeSwitcher";

function Header() {
  const [open, setOpen] = useState(false);
  // returns true if 768px or higher
  const matches = useMediaQuery("(min-width: 768px)");

  // motion variant for parent
  const list = {
    open: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
    close: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.07,
        staggerDirection: -1,
      },
    },
  };

  // motion variant for list items
  const item = {
    open: { opacity: 1, x: 0 },
    close: { opacity: 0, x: 100 },
  };
  // motion variant for svg hamburger icon
  const iconVariant = {
    open: {
      // strokeDashoffset: "75",
      strokeDasharray: "0, 77, 110, 77, 111",
      transition: { duration: 0.3, delay: 0.15 },
    },
    close: {
      // strokeDashoffset: "0",
      strokeDasharray: "75, 113, 75, 113, 0",
      transition: { duration: 0.3 },
    },
  };
  return (
    <header
      className={`relative flex 2xl:max-w-7xl mx-auto justify-between items-center h-20 px-4 lg:px-8`}
    >
      <Link href="/" className="text-3xl">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="logo of stylized R using brackets and backward slash"
          width={50}
          height={50}
        ></Image>
      </Link>
      {/* using button for better accessibility menu bar */}
      <button
        aria-label="navigation menu"
        aria-expanded={open}
        className={` ${
          open ? "fixed right-4" : "static"
        } md:hidden z-50 cursor-pointer p-1`}
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Menu</span>
        <motion.svg
          width="30"
          height="30"
          viewBox="0 0 100 100"
          fill="none"
          initial={false}
          animate={open ? "open" : "close"}
          aria-hidden="true"
          className="stroke-neutral-800 dark:stroke-neutral-50"
        >
          <motion.path
            d="M87 50L13 50"
            variants={{
              close: {
                opacity: 1,
                scaleX: 1,
                transition: { delay: 0.15 },
              },
              open: {
                opacity: 0,
                scaleX: 0,
              },
            }}
            transition={{ duration: 0.4 }}
            strokeWidth="6"
            strokeLinecap="round"
          />
          <motion.path
            variants={iconVariant}
            d="M87.0643 89.5H11.4357C10.5418 89.5 10.097 88.4166 10.733 87.7885L87.767 11.7115C88.403 11.0834 87.9582 10 87.0643 10H11.4357C10.5418 10 10.097 11.0834 10.733 11.7115L87.767 87.7885C88.403 88.4166 87.9582 89.5 87.0643 89.5Z"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </motion.svg>
      </button>

      {/* Display if screen width is 768px or more */}
      {matches && (
        <div className="flex justify-between gap-4 ">
          <motion.nav className="" aria-label="primary">
            <ul className="flex gap-4">
              <NavLink link="/" title="Home" />
              <NavLink link="/about" title="About" />
              <li>
                <ThemeSwitcher />
              </li>
            </ul>
          </motion.nav>
        </div>
      )}

      {/* Mobile navigation menu. Displayed only when toggled */}
      <AnimatePresence>
        {open && !matches && (
          <motion.nav
            variants={item}
            animate="open"
            initial="close"
            exit={{ opacity: 0, x: 100, transition: { delay: 0.3 } }}
            transition={{ type: "spring", bounce: 0.1 }}
            aria-label="primary mobile"
            className="fixed inset-0 w-full h-screen flex bg-neutral-50 dark:bg-darkPurple z-30 overflow-hidden"
          >
            <motion.ul
              initial="close"
              animate="open"
              exit="close"
              variants={list}
              className="flex flex-col w-full justify-center items-center gap-10"
            >
              <NavLink
                variants={item}
                setOpen={() => setOpen(!open)}
                link="/"
                title="Home"
              />
              <NavLink
                variants={item}
                setOpen={() => setOpen(!open)}
                link="/about"
                title="About"
              />
              <li className="mx-2">
                <ThemeSwitcher variants={item} />
              </li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
