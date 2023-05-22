import Link from "next/link";

function NavLink({ link, title }) {
  return (
    <li className="mx-2">
      <Link href={link} className="p-4 text-xl font-bold">
        {title}
      </Link>
    </li>
  );
}

export default NavLink;
