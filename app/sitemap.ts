import { groq } from "next-sanity";
import { client } from "lib/sanity.client";

type Sitemap = {
  url: string;
  lastModified: Date;
};

export default async function sitemap() {
  const baseURL = "https://www.frontendroadmap.com";

  //Get all the dynamic URLs for sitemap
  const query = groq`*[_type=='post'] {
    'url': $baseURL + "/" + category->slug.current + "/" + slug.current, 
    "lastModified": now()
    }`;

  const links: Sitemap[] = await client.fetch(query, { baseURL });

  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: baseURL + "/about",
      lastModified: new Date(),
    },
    ...links,
  ];
}
