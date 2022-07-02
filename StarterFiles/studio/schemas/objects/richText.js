export default {
  title: "Rich Text",
  name: "richText",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
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
                title : 'Quick Note',
                name : 'note',
                type : 'string',
              }
            ],
          },
        ],
      },
    },
    {
        type : 'customImage',
    },
    {
        type : 'customCode',
    }
  ],
};
