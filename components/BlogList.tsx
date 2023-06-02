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
      {posts.map((el, i) => (
        <section className="p-4 md:p-8" key={el._id}>
          <h2
            data-before={i + 1}
            className={`text-2xl md:text-3xl font-bold before:content-[attr(data-before)] before:text-primaryYellow before:bg-zinc-700 before:rounded-[50%] before:px-3 before:py-1 before:mr-4`}
          >
            {el.title}
          </h2>
          <div className="group grid grid-cols-fluid gap-y-6 gap-x-12 mt-8 ml-8">
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
