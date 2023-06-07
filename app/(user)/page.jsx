import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import Link from "next/link";
import post from "../../schemas/post";

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

  // local data for working environment
  // const posts = [
  //   {
  //     title: "Fundamentals",
  //     slug: {
  //       current: "fundamentals",
  //       _type: "slug",
  //     },
  //     _updatedAt: "2023-04-27T12:46:22Z",
  //     _createdAt: "2023-04-24T17:54:37Z",
  //     _rev: "3qD2AEld3k6AuWALS9lj4W",
  //     _type: "category",
  //     _id: "3150c8e1-1dcf-42f3-a102-5942f22aab41",
  //     post: [
  //       {
  //         _id: "5ed18800-659e-4e39-aec8-2647e422c532",
  //         description: "HTML provides a structure to the website.",
  //         body: [],
  //         title: "HTML",
  //         slug: {
  //           current: "html",
  //           _type: "slug",
  //         },
  //         mainImage: {
  //           _type: "image",
  //           asset: {
  //             _ref: "image-f606c371efe5318b68ad538c7b2ca327aa8671aa-512x512-png",
  //             _type: "reference",
  //           },
  //         },
  //       },
  //       {
  //         _id: "8a4d4579-0eb2-4847-8f98-22899d5bd4dd",
  //         description:
  //           "CSS is the language used for styling the HTML documents.",
  //         body: [],
  //         title: "CSS",
  //         slug: {
  //           current: "css",
  //           _type: "slug",
  //         },
  //         mainImage: {
  //           _type: "image",
  //           asset: {
  //             _ref: "image-c58692fd020665a8fa2d14af299cc28b88017f3e-512x512-png",
  //             _type: "reference",
  //           },
  //         },
  //       },
  //     ],
  //   },

  //   {
  //     _rev: "SkQfVvzvLqEBHwHiTcBv27",
  //     _type: "category",
  //     _id: "9076c2ca-20ee-4629-bfed-e7e4f4f4511c",
  //     title: "Modern CSS",
  //     slug: {
  //       current: "modern-css",
  //       _type: "slug",
  //     },
  //     _updatedAt: "2023-04-26T13:18:07Z",
  //     _createdAt: "2023-04-25T12:55:45Z",
  //     post: [
  //       {
  //         _id: "67a6d9ff-adc4-42d1-b09c-97623d16db0c",
  //         description: "TailwindCSS is a utility-first CSS framework.",
  //         body: [],
  //         title: "Tailwind CSS",
  //         slug: {
  //           current: "tailwind-css",
  //           _type: "slug",
  //         },
  //         mainImage: {
  //           _type: "image",
  //           asset: {
  //             _ref: "image-646522016940d28ce7283bb194c8ea3b746b2de7-2048x2048-png",
  //             _type: "reference",
  //           },
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     post: [],
  //     _updatedAt: "2023-04-27T12:46:30Z",
  //     _createdAt: "2023-04-25T12:57:01Z",
  //     _rev: "3qD2AEld3k6AuWALS9lwCK",
  //     _type: "category",
  //     _id: "9bab848d-7d7c-4928-91ed-d8d3a5b36e40",
  //     title: "Javascript Framework",
  //     slug: {
  //       current: "javascript-framework",
  //       _type: "slug",
  //     },
  //   },
  // ];
  return (
    <main className="flex flex-col min-h-screen ">
      <div className="bg-primaryYellow text-black px-4 h-[calc(100vh-theme(height.20))] flex flex-col justify-center">
        <h1 className="text-5xl font-bold">Front End Roadmap</h1>
        <p className="mt-4">
          A starter guide on techs to learn for web development.
        </p>
        <Link
          href="#content"
          className="bg-lavender text-zinc-200 p-3 mt-6 text-center md:self-start md:px-12"
        >
          Begin
        </Link>
      </div>
      <BlogList posts={posts} />
    </main>
  );
}
