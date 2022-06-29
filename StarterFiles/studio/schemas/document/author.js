import { MdPerson } from "react-icons/md";
export default {
  title: "Author",
  name: "author",
  type: "document",
  icon: MdPerson,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      title : 'Profile Image',
      name : 'profileImage',
      type : 'customImage',
    },
  ],
  preview : {
    select : {
      title : 'name',
      image : 'profileImage',
      slug : 'slug',
    },
    prepare({title, image, slug}){
      return {
        title,
        media : image,
        subtitle : slug.current,
      };
    },
  },
};
