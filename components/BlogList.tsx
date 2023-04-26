import Image from "next/image";
import urlFor from "../lib/urlFor";

type Props = {
  posts: Post[];
};
function BlogList({ posts }: Props) {
  console.log(posts);

  return (
    <div className="bg-stone-800">
      {/* Home page all posts display */}
      {posts.map((post) => (
        <div key={post._id} className="group flex flex-col cursor-pointer">
          <div className="w-full h-80">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Image
              className="object-cover lg:object-center"
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              width={80}
              height={80}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
