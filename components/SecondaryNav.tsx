"use client";
import Link from "next/link";
import { useBetterMediaQuery } from "./hooks/useMediaQuery";
import { useState } from "react";

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
  const largeScreen = useBetterMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="secondary"
      className="bg-darkPurple/50 backdrop-blur-md lg:backdrop-blur-0 border-neutral-500 border-b-[1px] px-4 lg:border-0"
    >
      <button
        className="lg:hidden w-full py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        Menu
      </button>
      {navList.map(
        (item) =>
          // Render either if the menu is toggled open or its a large screen
          (open || largeScreen) && (
            <section key={item._id} className="mb-4">
              <h2 className="font-bold">{item.title}</h2>
              <ul className="flex flex-col ml-2 mt-2">
                {item.post.map((el) => (
                  <li key={el._id}>
                    <Link
                      href={el.url}
                      className={`${
                        el.slug === slug
                          ? "text-primaryYellow"
                          : " text-slate-400 hover:text-white focus:text-white"
                      } block p-1 hover:bg-gray-600/50 focus:bg-gray-600/50 focus:outline-none rounded-sm mt-1 cursor-pointer transition-colors`}
                    >
                      {el.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )
      )}
    </nav>
  );
}

export default SecondaryNav;
