import { MdImage } from "react-icons/md";
export default {
  name: "customImage",
  title: "Image",
  type: "image",
  icon: MdImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: "Alt Text",
      name: "alt",
      type: "string",
      //   in case alterbate text is empty it will trigger an error
      validation: (Rule) => Rule.error("Alt text can't be empty").required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
};
