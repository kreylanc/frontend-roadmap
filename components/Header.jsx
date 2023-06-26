"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";
import Image from "next/image";
import { useBetterMediaQuery } from "./hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [open, setOpen] = useState(false);
  // returns true if 768px or higher
  const matches = useBetterMediaQuery("(min-width: 768px)");

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
      strokeDasharray: "0, 85, 40",
      transition: { duration: 0.3, delay: 0.15 },
    },
    close: {
      strokeDasharray: "85, 120, 0",
      transition: { duration: 0.3 },
    },
  };
  return (
    <header className="relative flex 2xl:max-w-7xl mx-auto justify-between items-center h-20 px-4 lg:px-8">
      <Link href="/" className="text-3xl">
        {/* TODO: Add logo image */}
        Logo
        {/* <Image
          src="/logo.png"
          alt="logo of stylized R using brackets and backward slash"
          width={50}
          height={50}
        ></Image> */}
      </Link>

      {/* using button for better accessibility menu bar */}
      <button
        aria-label="navigation menu"
        aria-expanded={open}
        className="md:hidden z-50 cursor-pointer p-1"
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
        >
          <motion.path
            variants={iconVariant}
            d="M94 8H11.88C10.6358 8 10.0137 8 9.72918 8.25394C9.50328 8.45556 9.3809 8.74867 9.39636 9.05106C9.41583 9.43192 9.85323 9.87429 10.728 10.759L93.0337 94"
            stroke="#F1F1F1"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <motion.path
            d="M94 50L7 50"
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
            stroke="#F1F1F1"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <motion.path
            variants={iconVariant}
            d="M94 93H11.88C10.6358 93 10.0137 93 9.72918 92.7461C9.50328 92.5444 9.3809 92.2513 9.39636 91.9489C9.41583 91.5681 9.85323 91.1257 10.728 90.241L93.0337 7"
            stroke="#F1F1F1"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </motion.svg>
      </button>

      {matches && (
        <motion.nav aria-label="primary">
          <ul className="flex gap-4">
            <NavLink link="/" title="Home" />
            <NavLink link="/about" title="About" />
          </ul>
        </motion.nav>
      )}
      <AnimatePresence>
        {open && !matches && (
          <motion.nav
            variants={item}
            animate="open"
            initial="close"
            exit={{ opacity: 0, x: 100, transition: { delay: 0.3 } }}
            transition={{ type: "spring", bounce: 0.1 }}
            aria-label="primary mobile"
            className="fixed inset-0 w-full h-screen flex bg-darkPurple z-10 overflow-hidden"
          >
            <motion.ul
              initial="close"
              animate="open"
              exit="close"
              variants={list}
              className="flex flex-col w-full justify-center items-stretch gap-24"
            >
              <NavLink
                variants={item}
                setOpen={setOpen}
                link="/"
                title="Home"
              />
              <NavLink
                variants={item}
                setOpen={setOpen}
                link="/about"
                title="About"
              />
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
