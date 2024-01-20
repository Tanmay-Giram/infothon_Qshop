import { defineField, defineType } from "sanity";

export default defineType({
  name: "validate",
  title: "validate",
  type: "document",
    fields: [
        defineField({
            name: "id",
            title: "id",
            type: "string",
          }),
      defineField({
      name: "name",
      title: "name",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "address",
      type: "string",
    }),
    defineField({
        name: "email",
        title: "email",
        type: "email",
      }),
  ],
});
