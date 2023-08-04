"use client";

import { useState } from "react";
import { useClickOutside } from "./hooks/useClickOutside";
import { useDarkMode } from "./hooks/useDarkMode";
import { TbSun, TbMoon, TbSunMoon } from "react-icons/tb";
import Dropdown from "./dropdown/Dropdown";
import { motion } from "framer-motion";
import DropdownItem from "./dropdown/DropdownItem";

type Props = {};

function ThemeSwitcher({ variants }) {
  const [themeToggle, setThemeToggle] = useState(false);

  const { isDarkMode, isSystem, enableSystem, enable, disable } = useDarkMode();
  const menuRef = useClickOutside(() => {
    setThemeToggle(false);
  });

  return (
    <motion.button
      variants={variants}
      className="relative text-xl p-4 mx-2 flex justify-center items-center gap-2"
      onClick={() => setThemeToggle(!themeToggle)}
      ref={menuRef}
      aria-expanded={themeToggle}
    >
      {isSystem ? (
        <TbSunMoon size="1.2em" />
      ) : isDarkMode ? (
        <TbMoon size="1.2em" />
      ) : (
        <TbSun size="1.2em" />
      )}
      Theme
      {themeToggle && (
        <Dropdown>
          <DropdownItem toggle={disable}>
            <TbSun />
            Light
          </DropdownItem>
          <DropdownItem toggle={enable}>
            <TbMoon />
            Dark
          </DropdownItem>
          <DropdownItem toggle={enableSystem}>
            <TbSunMoon /> System
          </DropdownItem>
        </Dropdown>
      )}
    </motion.button>
  );
}

export default ThemeSwitcher;
