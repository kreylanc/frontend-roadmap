"use client";
import { TbSun, TbMoon, TbSunMoon } from "react-icons/tb";
import DropdownItem from "./DropdownItem";

function Dropdown({ isDarkMode, isSystem, systemMode, enable, disable }) {
  return (
    <div
      className="absolute w-32 shadow-neu z-50 p-1 top-16 flex flex-col bg-neutral-50 dark:bg-darkPurple ring-1 ring-zinc-700"
      role="menu"
    >
      <DropdownItem toggle={disable}>
        <TbSun className="stroke-primaryYellow" /> Light
      </DropdownItem>
      <DropdownItem toggle={enable}>
        <TbMoon /> Dark
      </DropdownItem>
      <DropdownItem toggle={systemMode}>
        <TbSunMoon /> System
      </DropdownItem>
    </div>
  );
}

export default Dropdown;
