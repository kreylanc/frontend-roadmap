import Link from "next/link";

type Link = {
  title: string;
  href?: string;
  categories?: {
    title: string;
    href: string;
  }[];
};

function page() {
  const links: Link[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Fundamentals",
      href: "/fundamentals",
      categories: [
        {
          title: "HTML",
          href: "/fundamentals/html",
        },
        {
          title: "CSS",
          href: "/fundamentals/css",
        },
        {
          title: "JavaScript",
          href: "/fundamentals/javascript",
        },
      ],
    },
    {
      title: "UI Library",
      href: "/ui-library",
      categories: [
        {
          title: "CSS Frameworks",
          href: "/ui-library/css-frameworks",
        },
        {
          title: "CSS Preprocessors",
          href: "/ui-library/preprocessors",
        },
        {
          title: "Component Libraries",
          href: "/ui-library/component-libraries",
        },
      ],
    },
    {
      title: "JavaScript Framework",
      href: "js-framework",
      categories: [
        {
          title: "JavaScript Framework",
          href: "/js-framework/javascript-framework",
        },
        {
          title: "Client-side Frameworks",
          href: "/js-framework/client-side-frameworks",
        },
        {
          title: "Server-side Frameworks",
          href: "/js-framework/server-side-frameworks",
        },
      ],
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
  ];
  return (
    <main className="mx-auto w-full h-[calc(100vh-theme(height.20))] 2xl:max-w-7xl px-4 md:px-8">
      <h1 className="text-5xl font-bold mt-10">Sitemap</h1>
      <ul className="mt-8 flex flex-col gap-4">
        {links.map((link) => (
          <li>
            {/* if href contains put title inside Link else inside p tag  */}
            {link.href ? (
              <Link
                className="underline py-2 decoration-purple-500 underline-offset-2 hover:text-black dark:hover:text-white transition-colors"
                href={link.href}
              >
                {link.title}
              </Link>
            ) : (
              <p className="font-bold">{link.title}</p>
            )}
            {/* If it contains categories key then add an unordered list*/}
            {link.categories && (
              <ul className="ml-6 flex flex-col gap-2 mt-2">
                {link.categories.map((item) => (
                  <li>
                    <Link
                      className="underline decoration-purple-500 underline-offset-2 hover:text-black dark:hover:text-white transition-colors"
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default page;
