import Image from "next/image";
import urlFor from "../lib/urlFor";
import Link from "next/link";
import Refractor from "react-refractor/all";
import "prismjs/themes/prism-tomorrow.css";
import { TbExternalLink } from "react-icons/tb";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt={value.alt}
            fill
          />
        </div>
      );
    },
    code: ({ value }: any) => {
      const { code, language } = value;
      return (
        <div className="my-4">
          <Refractor language={language} value={code} />
        </div>
      );
    },
    codepen: ({ value }: any) => {
      const url = value.url;
      const splitURL = url.split("/");
      // [ 'https:', '', 'codepen.io', 'sdras', 'pen', 'gWWQgb' ]
      const [, , , user, , hash] = splitURL;
      const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=370&default-tab=result`;
      return (
        <iframe
          height="400"
          style={{ width: "100%" }}
          src={embedUrl}
          loading="lazy"
          allowFullScreen
        />
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="[&_li+li]:mt-2 mt-4 list-disc ml-6 md:ml-10">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="[&_li+li]:mt-2 mt-4 list-decimal ml-6 md:ml-10">
        {children}
      </ol>
    ),
  },
  block: {
    normal: ({ children }: any) => <p className="mt-2">{children}</p>,
    h1: ({ children }: any) => (
      <h1 className="text-5xl text-neutral-50 mt-6 py-2 font-bold">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl text-neutral-50 mt-6 py-2 font-bold">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl mt-3 py-1 font-semibold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl mt-3 font-semibold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-orange-500 border-l-4 bg-neutral-700/40 pl-5 py-2 my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    internalLink: ({ children, value }: any) => (
      <Link
        href={value.url}
        className="underline text-white decoration-purple-700 underline-offset-4 hover:decoration-primaryYellow focus:decoration-primaryYellow focus:outline-none transition-colors"
      >
        {children}
      </Link>
    ),
    link: ({ children, value }: any) => {
      // noreferrer noopener for security reasons when using target="_blank"
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        // check if the link target blank is true or not
        value.blank ? (
          <Link
            href={value.href}
            rel={rel}
            className="inline items-center underline decoration-lavender underline-offset-4 text-white hover:decoration-primaryYellow focus:decoration-primaryYellow focus:outline-none transition-colors"
            target="_blank"
          >
            {children}
            <TbExternalLink size="1.2em" className="ml-1 inline" />
          </Link>
        ) : (
          <Link
            href={value.href}
            rel={rel}
            className="inline underline text-white decoration-purple-700 hover:decoration-primaryYellow"
          >
            {children}
            <TbExternalLink className="inline" />
          </Link>
        )
      );
    },
    code: ({ children }: any) => (
      <code className="bg-neutral-900 text-red-500 px-1 font-sans">
        {children}
      </code>
    ),
  },
};
