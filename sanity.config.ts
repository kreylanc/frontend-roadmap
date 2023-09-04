import { defineConfig } from "sanity";
import { visionTool } from "@sanity/vision";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { codeInput } from "@sanity/code-input";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export default defineConfig({
  basePath: "/studio",
  name: "Roadmap_Content_Studio",
  title: "Roadmap Content Studio",

  projectId,
  dataset,

  // adding support for more languages in code input
  plugins: [
    deskTool(),
    visionTool(),
    codeInput({
      codeModes: [
        {
          name: "less",
          loader: () =>
            import("@codemirror/lang-less").then(({ less }) => less()),
        },
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
