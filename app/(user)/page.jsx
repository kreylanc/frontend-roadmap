import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

// -> means follow the reference and get the content from the reference
// []-> follow the refernce and put all the content in an array
export const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  }
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

  const posts = await client.fetch(query);
  return (
    <main className="flex flex-col min-h-screen p-12">
      <h1 className="text-xl">Front End Roadmap</h1>
      <BlogList posts={posts} />
    </main>
  );
}
