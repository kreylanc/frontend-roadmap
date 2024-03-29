/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
        ,
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code Line", value: "code" },
          { title: "CodeSandbox Url", value: "sandboxUrl" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            name: "internalLink",
            type: "object",
            title: "Internal Link",
            fields: [
              {
                name: "item",
                type: "reference",
                to: [{ type: "post" }],
              },
            ],
            icon: () => <div>🔗</div>,
          },
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
              {
                title: "Open in new window",
                name: "blank",
                type: "boolean",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      name: "code",
      title: "Code Block",
      type: "code",
      options: {
        languageAlternatives: [
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
          { title: "SASS", value: "sass" },
          { title: "SCSS", value: "scss" },
          { title: "Less", value: "less" },
          { title: "Stylus", value: "stylus", mode: "sass" }, // uses sass highlighter
          { title: "Javascript", value: "javascript" },
          { title: "Typescript", value: "typescript" },
          { title: "JSX", value: "jsx" },
          { title: "TSX", value: "tsx" },
          { title: "Angular", value: "angular" },
          { title: "Vue", value: "vue" },
        ],
        withFilename: true,
      },
    },
    {
      type: "codepen",
    },
  ],
};
