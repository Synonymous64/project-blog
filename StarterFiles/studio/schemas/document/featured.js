import { MdStar } from "react-icons/md";
export default {
  name: "featured",
  title: "Featured",
  type: "document",
  icon: MdStar,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      name: "blogs",
      title: "Featured Blogs",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "blog" },
        },
      ],
      validation: (Rule) => [
        Rule.error('Every Item should me unique').unique(),
        Rule.required().error('At least one item is required'),
      ],
    },
    {
        name: "category",
        title: "Featured Top Categories",
        type: "array",
        of: [
          {
            type: "reference",
            to: { type: "category" },
          },
        ],
        validation: (Rule) => [
          Rule.error('Every Item should me unique').unique(),
          Rule.required().error('At least one item is required'),
        ],
      },
  ],
};
