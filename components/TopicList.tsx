import Card from "./Card";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: mainContent[];
};

//
function TopicList({ posts }: Props) {
  return (
    <ul
      id="content"
      className="2xl:max-w-7xl mx-auto w-full px-4 md:px-8 mt-8 lg:mt-0"
    >
      {/* Home page all posts display */}
      {posts.map((el, i) => (
        <li className=" py-8" key={el._id}>
          <h2
            data-before={i + 1}
            className={`text-4xl text-neutral-800 dark:text-neutral-50 font-bold  `}
          >
            {el.title}
          </h2>
          <section className="grid grid-cols-fluid md:grid-cols-3 gap-y-6 gap-x-6 lg:gap-x-12 mt-8">
            {el.post.map((item) => (
              <ClientSideRoute
                key={item._id}
                route={`/${el.slug.current}/${item.slug.current}`}
              >
                <Card
                  title={item.title}
                  description={item.description}
                  imgUrl={item.mainImage}
                />
              </ClientSideRoute>
            ))}
          </section>
        </li>
      ))}
    </ul>
  );
}

export default TopicList;
