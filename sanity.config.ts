import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
//import structureTool from "sanity / structure";
import { visionTool } from "@sanity/vision";
import StudioHeader from "@/components/StudioHeader";
import { schemaTypes } from "@/sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "infothon",
  title: "infothon login sanity",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioHeader,
    },
  },
});
