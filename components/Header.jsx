import Link from "next/link";
import NavLink from "./NavLink";
function Header() {
  return (
    <header className="flex justify-between bg-zinc-800 p-8">
      <Link href="#">Logo</Link>
      <nav>
        <ul className="flex">
          <NavLink link="/" title="Home" />
          <NavLink link="/about" title="About" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
