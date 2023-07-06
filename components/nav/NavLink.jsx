import Link from "next/link";
import { motion } from "framer-motion";

function NavLink({ link, title, setOpen, variants }) {
  return (
    <motion.li variants={variants} className="mx-2 ">
      <Link
        href={link}
        className="px-4 py-8 md:py-4 block text-xl font-semibold text-center"
        onClick={setOpen !== null && setOpen}
      >
        {title}
      </Link>
    </motion.li>
  );
}

export default NavLink;
