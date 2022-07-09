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
  ],
};
