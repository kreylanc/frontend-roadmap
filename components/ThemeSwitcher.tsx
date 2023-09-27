"use client";

import { useState } from "react";
import { useClickOutside } from "./hooks/useClickOutside";
import { useDarkMode } from "./hooks/useDarkMode";
import { TbSun, TbMoon, TbSunMoon } from "react-icons/tb";
import Dropdown from "./dropdown/Dropdown";
import { motion } from "framer-motion";
import DropdownItem from "./dropdown/DropdownItem";

function ThemeSwitcher({ variants }) {
  const [themeToggle, setThemeToggle] = useState(false);

  const { isDarkMode, isSystem, enableSystem, enable, disable } = useDarkMode();
  const menuRef = useClickOutside(() => {
    setThemeToggle(false);
  });

  return (
    <motion.button
      variants={variants}
      className="relative text-xl p-4 mx-2 flex justify-center items-center gap-2 border rounded-md border-zinc-700 bg-neutral-50 dark:bg-darkPurple focus:border-primaryYellow hover:border-primaryYellow hover:bg-gray-600/10 focus:bg-gray-600/10 dark:focus:bg-gray-600/40 dark:hover:bg-gray-600/40 duration-150"
      onClick={() => setThemeToggle(!themeToggle)}
      ref={menuRef}
      aria-expanded={themeToggle}
    >
      {isSystem ? (
        <TbSunMoon size="1.2em" aria-label="Sun/Moon icon" />
      ) : isDarkMode ? (
        <TbMoon size="1.2em" aria-label="Moon icon" />
      ) : (
        <TbSun size="1.2em" aria-label="Sun icon" />
      )}
      Theme
      {themeToggle && (
        <Dropdown>
          <DropdownItem toggle={disable}>
            <TbSun aria-label="Sun icon" />
            Light
          </DropdownItem>
          <DropdownItem toggle={enable}>
            <TbMoon aria-label="Moon icon" />
            Dark
          </DropdownItem>
          <DropdownItem toggle={enableSystem}>
            <TbSunMoon aria-label="Sun/Moon icon" /> System
          </DropdownItem>
        </Dropdown>
      )}
    </motion.button>
  );
}

export default ThemeSwitcher;
