import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import SecondaryNav from "../../../../components/SecondaryNav";

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
  // query to get the post that matches with the slug
  const query = groq`
  *[_type=='post' && slug.current == $slug][0] {
    ...,
    category->,
    body[]{
      ...,
      markDefs[]{
        ...,
        'url': "/" + item->category->slug.current + "/" + item->slug.current
      }
    }
  }
  `;

  // query to get list of all post categorized in each of their category
  const listQuery = groq`
  *[_type=='category'] {
    _createdAt,
    _id,
    title,
    'slug': slug.current,
    'post': *[_type=='post' && category._ref == ^._id] {
      title, 
      'slug': slug.current,
      'url': "/" + category->slug.current 
        + "/" + slug.current,
      _id,
      _createdAt
    } | order(_createdAt asc)
  } | order(_createdAt asc)
`;
  const list = await client.fetch(listQuery);

  const post: Post = await client.fetch(query, { slug });

  return (
    <main className="relative grid grid-cols-1 lg:grid-cols-[15em_1fr] xl:grid-cols-[1fr_3fr] gap-8 w-full 2xl:max-w-7xl mx-auto lg:my-8 lg:px-8">
      <aside className="lg:block self-start sticky top-0 lg:top-8 border-neutral-500 lg:border-r-[1px] xl:w-4/5 ">
        <SecondaryNav navList={list} slug={slug} />
      </aside>
      <div className="px-4 w-full md:w-4/5 mx-auto lg:mx-0  ">
        <p className="text-primaryYellow text-sm pb-2 font-semibold tracking-wide">
          {post.category.title}
        </p>
        <h1 className="text-5xl text-neutral-50 font-bold">{post.title}</h1>
        <PortableText value={post.body} components={RichTextComponents} />
      </div>
    </main>
  );
}

export default page;
