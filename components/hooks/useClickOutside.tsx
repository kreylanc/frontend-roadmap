"use client";
import { useEffect, useRef } from "react";

type Handler = () => void;

export function useClickOutside<T extends HTMLElement>(handler: Handler) {
  const ref = useRef<T>(null);

  useEffect(() => {
    let listener = (event: { target: any }) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [handler]);

  return ref;
}
