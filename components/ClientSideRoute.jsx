"use client";

import Link from "next/link";

function ClientSideRoute({ children, route }) {
  return (
    <Link
      href={route}
      className="h-auto ring-zinc-700 ring-2  focus:ring-primaryYellow rounded-md focus:outline-0  hover:ring-primaryYellow transition-shadow shadow-light dark:shadow-neu"
    >
      {children}
    </Link>
  );
}
export default ClientSideRoute;
