import TopicList from "@/components/TopicList";
import { client } from "lib/sanity.client";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";

type Props = {
  params: {
    category: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const id = params.category;
  const metaQuery = groq`
    *[_type=='category' && slug.current == $id][0] {
      title, "slug": slug.current
    }
    `;
  try {
    // fetching data with id as a parameter; the value of $id in the query is replaced by { id }
    const metaData: Category = await client.fetch(metaQuery, { id });
    if (!metaData) {
      return {
        title: "Page not found",
        description: "The page you are looking for does not exist.",
      };
    }
    return {
      title: `${metaData?.title ?? "Default title"}`,
      alternates: {
        canonical: metaData.slug,
      },
      openGraph: {
        title: metaData.title,
      },
      twitter: {
        title: metaData.title,
      },
    };
  } catch (error) {
    return {
      title: "Page not found",
      description: "The page you are looking for does not exist.",
    };
  }
}

async function page({ params: { category } }: Props) {
  // query to get the post that matches with the slug
  const query = groq`
   *[_type=='category' && slug.current==$category] {
    ...,
    'post': *[_type=='post' && category._ref == ^._id] | order(_createdAt asc)
} | order(_createdAt asc)
  `;

  const posts = await client.fetch(query, { category });

  // Check if the fetch returned any value
  // If null then call notFound error to display 404 page
  if (!posts || posts.length < 1) {
    notFound();
  }
  return (
    <main>
      <TopicList posts={posts} />
    </main>
  );
}

export default page;
