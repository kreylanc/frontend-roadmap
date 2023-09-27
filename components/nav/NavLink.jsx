import Link from "next/link";
import { motion } from "framer-motion";

function NavLink({ link, title, setOpen, variants }) {
  return (
    <motion.li variants={variants} className="mx-2 w-full">
      <Link
        href={link}
        className="px-4 py-8 md:py-4 block text-xl text-center hover:text-black dark:hover:text-white  hover:underline decoration-purple-800 underline-offset-4 transition-all"
        onClick={setOpen !== null && setOpen}
      >
        {title}
      </Link>
    </motion.li>
  );
}

export default NavLink;
