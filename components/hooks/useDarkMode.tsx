// import { useLocalStorage, useUpdateEffect } from 'usehooks-ts'
"use client";
import { useState, useEffect } from "react";
import { useMediaQuery } from "./useMediaQuery";

// store the string as a variable to check if OS is on dark mode
const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

interface UseDarkModeOutput {
  isDarkMode: boolean;
  isSystem: boolean | null;
  systemMode: () => void;
  enable: () => void;
  disable: () => void;
}

export function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
  // returns true if the OS mode is preferred as dark mode
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);

  const [isSystem, setIsSystem] = useState<boolean | null>(null);
  // use state to set mode to true or false
  const [isDarkMode, setDarkMode] = useState<boolean>(
    defaultValue ?? isDarkOS ?? false
  );

  // check local storage for stored preferences
  useEffect(() => {
    // returns "true" or "false" or "system"
    const userPref = window.localStorage.getItem("darkMode");
    // if true setDarkMode true, if false setDarkMode false, else setSystem true
    if (userPref === "true") {
      enable();
    } else if (userPref === "false") {
      disable();
    } else {
      setIsSystem(true);
    }
  }, []);

  // Update darkMode if OS prefers changes
  useEffect(() => {
    isSystem && setDarkMode(isDarkOS ? true : false);
  }, [isDarkOS, isSystem]);

  // Runs anytime value of "isDarkMode" and "isSystem" changes
  useEffect(() => {
    //set local storage value to "dark" or "light" or "system"
    if (isSystem === false) {
      if (isDarkMode) {
        window.localStorage.setItem("darkMode", "true");
      } else {
        window.localStorage.setItem("darkMode", "false");
      }
    } else {
      window.localStorage.setItem("darkMode", "system");
    }
    changeClass();
  }, [isDarkMode, isSystem]);

  // function to add/remove class name of dark to the document
  const changeClass = () => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const enable = () => {
    setIsSystem(false); // First, set system mode to false
    setDarkMode(true); // Then, set isDarkMode to true
  };
  const disable = () => {
    setIsSystem(false); // First, set system mode to false
    setDarkMode(false); // Then, set isDarkMode to false
  };

  return {
    isDarkMode,
    isSystem,
    systemMode: () => setIsSystem(true),
    enable,
    disable,
  };
}
