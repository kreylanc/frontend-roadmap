"use client";
import Link from "next/link";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  navList: Nav[];
};

type Slug = {
  slug: string;
};

interface Nav {
  _createdAt: string;
  _id: string;
  title: string;
  slug: string;
  post: [
    {
      _createdAt: string;
      _id: string;
      title: string;
      slug: string;
      url: string;
    }
  ];
}

const resize = {
  close: {
    opacity: 0,
    height: 0,
    transition: {
      height: {
        duration: 0.4,
      },
      opacity: {
        duration: 0.25,
      },
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      height: {
        duration: 0.4,
      },
      opacity: {
        duration: 0.25,
        delay: 0.2,
      },
    },
  },
};
function SecondaryNav({ slug, navList }: Slug & Props) {
  const largeScreen = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      aria-label="secondary"
      className="bg-neutral-50/70 dark:bg-darkPurple/50 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-0 border-neutral-500 border-b-[1px] pr-4 lg:border-0 transition-all"
    >
      <button
        className="lg:hidden w-full py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        Menu
      </button>
      <AnimatePresence>
        {(open || largeScreen) && (
          <motion.ul
            variants={resize}
            initial="close"
            animate="open"
            exit="close"
            className="bg-neutral-50/70 dark:bg-darkPurple/50"
          >
            {navList.map((item) => (
              // Render either if the menu is toggled open or its a large screen
              <motion.li key={item._id} className="mb-4">
                <p className="font-bold">{item.title}</p>
                <ul className="flex flex-col ml-2 mt-2">
                  {item.post.map((el) => (
                    <li key={el._id}>
                      <Link
                        href={el.url}
                        className={`${
                          el.slug === slug
                            ? "bg-zinc-300/50 dark:bg-zinc-600/50"
                            : "focus:text-neutral-50 hover:bg-zinc-300/50 dark:hover:bg-zinc-600/50"
                        } block p-1 text-neutral-600 dark:text-neutral-400 focus:bg-gray-600/50 focus:outline-none rounded-sm mt-1 cursor-pointer transition-colors`}
                      >
                        {el.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default SecondaryNav;
