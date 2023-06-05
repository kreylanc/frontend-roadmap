declare module "react-refractor/all";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  category: Category;
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface mainContent extends Base {
  title: string;
  slug: Slug;
  post: Post[];
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Code {
  _type: "code";
  _key: string;
  language: string;
  code: string;
}

interface Category extends base {
  title: string;
  slug: Slug;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}
