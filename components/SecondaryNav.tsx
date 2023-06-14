import Link from "next/link";

type Props = {
  navList: Nav[];
};

type Slug = {
  slug: string;
};

interface Nav {
  _createdAt: string;
  _id: string;
  title: string;
  slug: string;
  post: [
    {
      _createdAt: string;
      _id: string;
      title: string;
      slug: string;
      url: string;
    }
  ];
}
function SecondaryNav({ slug, navList }: Slug & Props) {
  return (
    <nav aria-label="secondary" className="">
      {navList.map((item) => (
        <section key={item._id} className="mb-4">
          <h2 className="font-bold">{item.title}</h2>
          <ul className="flex flex-col ml-2 mt-2 xl:w-4/5">
            {item.post.map((el) => (
              <li key={el._id}>
                <Link
                  href={el.url}
                  className={`${
                    el.slug === slug
                      ? "text-primaryYellow"
                      : " text-slate-400 hover:text-white focus:text-white"
                  } block p-1 hover:bg-gray-600/50 focus:bg-gray-600/50 focus:outline-none rounded-sm mt-1 cursor-pointer transition-colors`}
                >
                  {el.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  );
}

export default SecondaryNav;
