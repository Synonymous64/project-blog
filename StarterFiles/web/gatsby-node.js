exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = parseInt(process.env.GATSBY_POST_PER_PAGE) || 10;
  // template Path
  const singleBlogTemplate = require.resolve("./src/templates/single-blog.js");
  const blogListTemplate = require.resolve("./src/templates/blog-list.js");
  const singleCategoryTemplate = require.resolve(
    "./src/templates/single-category.js"
  );
  const categoryListTemplate = require.resolve(
    "./src/templates/category-list.js"
  );
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
      allSanityCategory {
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
  const categories = result.data.allSanityCategory.nodes;
  //   Single blogs pages

  blogs.forEach((blog) => {
    createPage({
      path: `/blogs/${blog.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blog.id },
    });
  });

  // Single category pages
  categories.forEach((category) => {
    createPage({
      path: `/categories/${category.slug.current}`,
      component: singleCategoryTemplate,
      context: { id: category.id },
    });
  });

  // Blog-List Pages
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

  // Category-List Pages
  const totalCategoryListPages = Math.ceil(categories.length / postsPerPage);
  Array.from({ length: totalCategoryListPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? "/categories" : `/categories/${index + 1}`,
      component: categoryListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalCategoryListPages,
        currentPage: index + 1,
      },
    });
  });
};
