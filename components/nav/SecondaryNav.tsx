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
function SecondaryNav({ slug, navList }: Slug & Props) {
  const largeScreen = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      transition={{ type: "spring", bounce: 0.1 }}
      aria-label="secondary"
      className="bg-neutral-50/70 dark:bg-darkPurple/50 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-0 border-neutral-500 border-b-[1px] px-4 lg:border-0"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
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
                            ? "text-lavender dark:text-primaryYellow"
                            : " text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-50 focus:text-neutral-50"
                        } block p-1 hover:bg-gray-300 dark:hover:bg-gray-600/50 focus:bg-gray-600/50 focus:outline-none rounded-sm mt-1 cursor-pointer transition-colors`}
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
