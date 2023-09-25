import Link from "next/link";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";

function Footer() {
  const learn = [
    {
      title: "Fundamentals",
      href: "/fundamentals",
    },
    {
      title: "UI Library",
      href: "/ui-library",
    },
    {
      title: "JavaScript Framework",
      href: "/js-framework",
    },
  ];
  const links = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Sitemap",
      href: "/sitemap",
    },
  ];
  return (
    <footer className="bg-primaryYellow text-darkPurple mt-20 pb-10">
      <div className="flex flex-col md:flex-row gap-y-6 justify-between mx-auto w-full 2xl:max-w-7xl px-4 md:px-8 py-6">
        <div className="md:w-1/3">
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
          <Link
            href="https://twitter.com/RoadmapFrontend"
            className="inline-flex mt-4"
            target="_blank"
          >
            <BsTwitter size="1.8em" color="#26a7de" aria-label="Twitter icon" />
          </Link>
        </div>
        <ul className="flex flex-col flex-wrap gap-4">
          <li className="text-lg font-bold">Learn</li>
          {learn.map((item) => (
            <li>
              <Link href={item.href} className="hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col flex-wrap gap-4">
          <li className="text-lg font-bold">More</li>
          {links.map((item) => (
            <li>
              <Link href={item.href} className="hover:underline">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
