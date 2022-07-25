const sanityConfig = require("./sanity-config,");

require("dotenv").config("./.env");

module.exports = {
  siteMetadata: {
    title: `Praj-Blogs`,
    siteUrl: `https://techhub-blog.netlify.com`,
    description: `Praj-Blogs is a platform made for latest news and tech-related informations`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...sanityConfig,
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "blogs",
        engine: "flexsearch",
        engineOptions: {
          tokenize: "foreward",
        },
        query: `
        {
          allSanityBlog{
            nodes{
              id
              title
              publishedAt
              slug{
                current
              }
              coverImage{
                alt
                asset{
                  gatsbyImageData
                }
              }
            }
          }
        }       
        `,
        ref: "id",
        index: ["title"],
        store: ["id", "title", "publishedAt", "slug", "coverImage"],
        normalizer: ({ data }) =>
          data.allSanityBlog.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            publishedAt: node.publishedAt,
            slug: node.slug,
            coverImage: node.coverImage,
          })),
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "categories",
        engine: "flexsearch",
        engineOptions: {
          tokenize: "foreward",
        },
        query: `
        {
          allSanityCategory{
            nodes{
              id
              title
              slug{
                current
              }
            }
          }
        }       
        `,
        ref: "id",
        index: ["title"],
        store: ["id", "title", "slug"],
        normalizer: ({ data }) =>
          data.allSanityCategory.nodes.map((node) => ({
            id: node.id,
            title: node.title,
            slug: node.slug,
          })),
      },
    },
    {
      resolve: "gatsby-plugin-local-search",
      options: {
        name: "authors",
        engine: "flexsearch",
        engineOptions: {
          tokenize: "foreward",
        },
        query: `
        {
          allSanityAuthor{
            nodes{
              id
              name
              slug{
                current
              }
              profileImage{
                alt
                asset{
                  gatsbyImageData
                }
              }
            }
          }
        }       
        `,
        ref: "id",
        index: ["name"],
        store: ["id", "name", "slug", "profileImage"],
        normalizer: ({ data }) =>
          data.allSanityAuthor.nodes.map((node) => ({
            id: node.id,
            title: node.name,
            slug: node.slug,
            profileImage: node.profileImage,
          })),
      },
    },
  ],
};
