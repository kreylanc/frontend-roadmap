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
          name: "angular",
          // dynamic import the angular package, and initialize the plugin after it is loaded
          // This way, the language is only when it is selected
          loader: () =>
            import("@codemirror/lang-angular").then(({ angular }) => angular()),
        },
        {
          name: "less",
          loader: () =>
            import("@codemirror/lang-less").then(({ less }) => less()),
        },
        {
          name: "vue",
          loader: () => import("@codemirror/lang-vue").then(({ vue }) => vue()),
        },
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
