import Card from "./Card";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: mainContent[];
};

//
function BlogList({ posts }: Props) {
  return (
    <ol className=" w-full lg:w-9/12 mx-auto mt-8" id="content">
      {/* Home page all posts display */}
      {posts.map((el, i) => (
        <li className="p-4 md:p-8 list-decimal" key={el._id}>
          <h2 data-before={i + 1} className={`text-4xl  font-bold  `}>
            {el.title}
          </h2>
          <section className="group grid grid-cols-fluid gap-y-6 gap-x-12 mt-8">
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
    </ol>
  );
}

export default BlogList;
