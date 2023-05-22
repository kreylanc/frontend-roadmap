"use client";

import Link from "next/link";

function ClientSideRoute({ children, route }) {
  return (
    <Link href={route} className="h-auto md:w-96 bg-yellow-500">
      {children}
    </Link>
  );
}
export default ClientSideRoute;
