exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 10;
  // template Path
  const singleBlogTemplate = require.resolve("./src/templates/single-blog.js");
  const blogListTemplate = require.resolve("./src/templates/blog-list.js");
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);
  if (result.errors) throw result.errors;
  const blogs = result.data.allSanityBlog.nodes;

  //   Single blogs pages

  blogs.forEach((blog) => {
    createPage({
      path: `/blogs/${blog.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blog.id },
    });
  });

  // Blog-Pages
  const totalBlogListPages = Math.ceil(blogs.length / postsPerPage);
  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? "/blogs" : `/blogs/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    });
  });
};
