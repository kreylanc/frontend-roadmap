import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className=" bg-primaryYellow text-darkPurple mt-20 ">
      <div className="flex flex-col lg:flex-row gap-y-6 justify-between mx-auto w-full 2xl:max-w-7xl px-4 md:px-8 py-6">
        <div>
          <Link href="/" className="inline-flex gap-3 items-center">
            <Image
              src="/logo.svg"
              alt="logo of stylized R using brackets and backward slash"
              width={35}
              height={35}
            ></Image>
            <span className="font-bold">Frontend Roadmap</span>
          </Link>
          <p className="mt-1">
            A starter guide on techs to learn for web development.
          </p>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="text-lg font-bold">Links</li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/sitemap">Sitemap</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
