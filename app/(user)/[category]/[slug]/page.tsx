import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const id = params.slug;
  const metaQuery = groq`
  *[_type=='post' && slug.current == $id][0] {
    title, description
  }
  `;
  const data: Post = await client.fetch(metaQuery, { id });

  return { title: data.title, description: data.description };
}

async function page({ params: { slug } }: Props) {
  // const posts = await client.fetch(query);
  const query = groq`
  *[_type=='post' && slug.current == $slug][0] {
    ...,
    category->
  }
  `;

  const post: Post = await client.fetch(query, { slug });
  // console.log(post);
  return (
    <main className="lg:w-9/12 xl:w-3/5 mx-auto my-8 px-4 sm:px-8 ">
      <p className="text-primaryYellow text-sm pb-2 font-semibold tracking-wide">
        {post.category.title}
      </p>
      <h1 className="text-5xl font-bold">{post.title}</h1>
      <PortableText value={post.body} components={RichTextComponents} />
    </main>
  );
}

export default page;
