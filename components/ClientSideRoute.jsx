"use client";

import Link from "next/link";

function ClientSideRoute({ children, route }) {
  return (
    <Link
      href={route}
      className="h-auto ring-zinc-700 ring-2 hover:ring-primaryYellow focus:ring-primaryYellow focus-visible:ring-primaryYellow focus-visible:outline-none rounded-lg  hover:bg-gray-600/10 focus:bg-gray-600/10 dark:hover:bg-gray-600/40 dark:focus:bg-gray-600/40 transition-all shadow-light dark:shadow-neu"
    >
      {children}
    </Link>
  );
}
export default ClientSideRoute;
