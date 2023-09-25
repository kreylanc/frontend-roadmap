import Image from "next/image";
import urlFor from "../lib/urlFor";
import Link from "next/link";
import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import html from "refractor/lang/markup";
import css from "refractor/lang/css";
import sass from "refractor/lang/sass";
import scss from "refractor/lang/scss";
import less from "refractor/lang/less";
import stylus from "refractor/lang/stylus";
import jsx from "refractor/lang/jsx";
import ts from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";
import "prismjs/themes/prism-tomorrow.css";
import { TbExternalLink } from "react-icons/tb";

Refractor.registerLanguage(js);
Refractor.registerLanguage(html);
Refractor.registerLanguage(css);
Refractor.registerLanguage(sass);
Refractor.registerLanguage(scss);
Refractor.registerLanguage(less);
Refractor.registerLanguage(stylus);
Refractor.registerLanguage(jsx);
Refractor.registerLanguage(ts);
Refractor.registerLanguage(tsx);

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
    /*
     *------ This is for the code block syntax highlighting
     */
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
      // Eg of url after splitting [ 'https:', '', 'codepen.io', 'sdras', 'pen', 'gWWQgb' ]
      const [, , , user, , hash] = splitURL;
      const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=370&default-tab=result`;
      return (
        <iframe
          height="400"
          style={{ width: "100%", margin: "32px 0" }}
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
    // *** Headings and paragraph stylings
    normal: ({ children }: any) => <p className="mt-2 leading-7">{children}</p>,
    h1: ({ children }: any) => (
      <h1 className="text-5xl dark:text-neutral-50 text-neutral-900 mt-6 py-2 font-bold">
        {children}
      </h1>
    ),
    h2: ({ children, node }: any) => (
      <h2
        className="group relative inline-block text-3xl dark:text-neutral-50 text-neutral-900 mt-2 pt-8 pb-2 font-bold"
        id={`h${node._key}`}
      >
        {/* Adding an achored heading link */}
        <a href={`#h${node._key}`}>
          <span className="hidden lg:inline opacity-0 absolute group-hover:opacity-100 -left-6 transition-opacity">
            #
          </span>
          {children}
        </a>
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl mt-3 py-1 font-semibold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg mt-3 font-semibold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <aside className="border-l-orange-500 border-l-4 bg-neutral-700/20 dark:bg-neutral-700/40 p-4 my-4">
        {children}
      </aside>
    ),
  },
  marks: {
    // *** Link and other code format stylings
    internalLink: ({ children, value }: any) => (
      <Link
        href={value.url}
        className="underline dark:text-neutral-50 text-neutral-900 decoration-purple-500 decoration-2 underline-offset-4 hover:decoration-primaryYellow focus:decoration-primaryYellow focus:outline-none transition-colors"
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
            className="inline items-center underline decoration-purple-600 underline-offset-4  text-purple-800 hover:decoration-primaryYellow focus:decoration-primaryYellow focus:outline-none transition-colors dark:text-purple-400"
            target="_blank"
          >
            {children}
            <TbExternalLink
              aria-label="external link icon"
              size="1.2em"
              className="ml-1 inline"
            />
          </Link>
        ) : (
          <Link
            href={value.href}
            rel={rel}
            className="inline underline  text-purple-800 decoration-purple-600 hover:decoration-primaryYellow dark:text-purple-400"
          >
            {children}
            <TbExternalLink
              aria-label="external link icon"
              className="inline"
            />
          </Link>
        )
      );
    },

    /*
     *-------  This 'code' style is for inline code highlight
     */
    code: ({ children }: any) => (
      <code className="bg-zinc-200 dark:bg-neutral-900 text-red-900 dark:text-red-500 px-1 font-sans">
        {children}
      </code>
    ),
    sandboxUrl: ({ children }: any) => {
      // Eg of codesandbox embed url: https://codesandbox.io/s/elastic-smoke-rzm3wj
      const splitUrl = children[0].split("/").pop()!;
      // TODO: make the theme dynamic

      const embedUrl = `https://codesandbox.io/embed/${splitUrl}?fontsize=14&hidenavigation=1&theme=dark`;
      return (
        <iframe
          src={embedUrl}
          style={{
            width: "100%",
            height: "500px",
            border: "0",
            borderRadius: "4px",
            overflow: "hidden",
            margin: "32px 0",
          }}
          title={splitUrl}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      );
    },
  },
};
