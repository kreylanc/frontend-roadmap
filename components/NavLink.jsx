import Link from "next/link";

function NavLink({ link, title }) {
  return (
    <li className="mx-2">
      <Link href={link} className="p-4">
        {title}
      </Link>
    </li>
  );
}

export default NavLink;
