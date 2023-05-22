import Card from "./Card";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: mainContent[];
};

//
function BlogList({ posts }: Props) {
  return (
    <div className=" w-full lg:w-9/12 mx-auto mt-8" id="content">
      {/* Home page all posts display */}
      {posts.map((el) => (
        <section className="p-4 md:p-8" key={el._id}>
          <h2 className="text-2xl md:text-3xl font-bold">{el.title}</h2>
          <div className="group flex flex-col gap-y-6 lg:flex-row gap-x-12 mt-8">
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
          </div>
        </section>
      ))}
    </div>
  );
}

export default BlogList;
