import React from "react";

const CodePenPreview = (props) => {
  const url = props.title; // <= add themeId here, default it to "dark"
  if (!url) {
    return <div>Add a CodePen URL</div>;
  }
  const splitURL = url.split("/");
  // [ 'https:', '', 'codepen.io', 'sdras', 'pen', 'gWWQgb' ]
  const [, , , user, , hash] = splitURL;
  const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=370&default-tab=result`; // <= add themeId here
  return (
    <iframe
      height="300"
      style={{ width: "100%" }}
      title="CodePen Embed"
      src={embedUrl}
      allowTransparency
      allowFullScreen
    />
  );
};
export default {
  name: "codepen",
  type: "object",
  title: "CodePen Embed",
  components: {
    preview: CodePenPreview,
  },
  fields: [
    {
      name: "url",
      type: "url",
      title: "CodePen URL",
    },
  ],
};
