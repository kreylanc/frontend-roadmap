"use client";

import Link from "next/link";

function ClientSideRoute({ children, route }) {
  return (
    <Link
      href={route}
      className="h-auto ring-zinc-700 ring-2 bg-[rgb(41, 9, 51)]/30 backdrop-blur-lg shadow-neu focus:ring-primaryYellow rounded-sm focus:outline-0  hover:ring-primaryYellow transition-shadow"
    >
      {children}
    </Link>
  );
}
export default ClientSideRoute;
