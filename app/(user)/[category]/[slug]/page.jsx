import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";

export async function generateMetadata({ params, searchParams }) {
  const id = params;
  // console.log(id);
  // const product = await getProduct(params.id);
  return { title: params.slug };
}

async function page({ params }) {
  // const posts = await client.fetch(query);
  const slug = params.slug;
  const query = groq`
  *[_type=='post' && slug.current == $slug][0] {
    ...,
    categories[]->
  }
  `;

  // const post = await client.fetch(query, { slug });
  return (
    <main className="lg:w-9/12 xl:w-3/5 mx-auto mt-8 p-4">
      <h1 className="text-5xl font-bold text-yellow-500">HTML</h1>
      <p className="bg-yellow-500 rounded-xl inline p-1 text-xs text-black mt-2">
        Fundamentals
      </p>
      <div>
        <h2 className="text-3xl font-bold mt-4 py-4">Overview</h2>
        <p className="mt-1 leading-7">
          HTML (Hypertext Markup Language) is a standard markup language used
          for creating the structure and content of web pages. It forms the
          backbone of every webpage you see on the internet. HTML uses tags to
          define the structure and elements within a document, allowing browsers
          to interpret and display the content appropriately.
        </p>
        <h2 className="text-3xl font-bold mt-4 py-4">Key Concepts</h2>
        <p className="leading-7">
          <li>
            Elements and Tags: HTML documents consist of elements enclosed in
            opening and closing tags. Elements represent different parts of a
            webpage, such as headings, paragraphs, images, links, and more. Tags
            are represented by angle brackets and, and the opening tag precedes
            the element, while the closing tag follows it. For example, is an
            opening tag for a heading, and is its corresponding closing tag.
          </li>
          <li>
            Document Structure: An HTML document follows a specific structure.
            It begins with a declaration, which specifies the HTML version.
            Then, the document is wrapped within the element, which contains the
            entire webpage's content. The element is used for metadata, like the
            page title and linked stylesheets, while the contains the visible
            content.
          </li>
        </p>
      </div>

      {/* <h1 className="text-5xl text-yellow-500 font-bold">{post.title}</h1>
      <PortableText value={post.body} components={RichTextComponents} /> */}
    </main>
  );
}

export default page;
