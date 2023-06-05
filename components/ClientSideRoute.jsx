"use client";

import Link from "next/link";

function ClientSideRoute({ children, route }) {
  return (
    <Link href={route} className="h-auto bg-primaryYellow">
      {children}
    </Link>
  );
}
export default ClientSideRoute;
