import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "@/components/PreviewSuspense";
import PreviewBlogList from "@/components/PreviewBlogList";
import TopicList from "@/components/TopicList";
import Link from "next/link";

// -> means follow the reference and get the content from the reference
// []-> follow the refernce and put all the content in an array

const query = groq`
  *[_type=='category'] {
    ...,
    'post': *[_type=='post' && category._ref == ^._id] | order(_createdAt asc)
} | order(_createdAt asc)

`;

export default async function Home() {
  if (previewData()) {
    return (
      <main>
        <PreviewSuspense
          fallback={
            <div role="status">
              <p className="text-center text-lg animate-pulse text-yellow-600">
                "Loading Preview Data..."
              </p>
            </div>
          }
        >
          <PreviewBlogList query={query} />
        </PreviewSuspense>
      </main>
    );
  }

  // fetch data from sanity client
  const posts = await client.fetch(query);

  return (
    <main className="flex flex-col min-h-screen mx-auto w-full 2xl:max-w-7xl px-4 md:px-8">
      <div className=" h-[calc(100vh-theme(height.20))] flex flex-col justify-center snap-start">
        <h1 className="text-5xl font-bold">Front End Roadmap</h1>
        <p className="mt-4">
          A starter guide on techs to learn for web development.
        </p>
        <Link
          href="#content"
          className="uppercase bg-primaryYellow text-darkPurple tracking-wider p-3 mt-6 text-center rounded-md md:self-start md:px-12 transition-transform"
        >
          Begin
        </Link>
      </div>

      <TopicList posts={posts} />
    </main>
  );
}
