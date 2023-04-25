import { previewData } from "next/headers";
import { groq } from "next-sanity";

export const query = groq`
  
`;

export default function Home() {
  if (previewData()) {
    return <div>Preview Mode</div>;
  }
  return (
    <main className="flex flex-col justify-between min-h-screen p-12">
      <h1 className="text-xl">Front End Roadmap</h1>
      {/* <BlogList /> */}
    </main>
  );
}
