import { graphql } from "gatsby";
import SEO from "../components/SEO";
import PageSpace from "../components/PageSpace";
import PageHeader from "../components/PageHeader";
import React from "react";
import BlogGrid from "../components/blog/BlogGrid";
import Pagination from "../components/Pagination";

export const BlogsQuery = graphql`
  query blogListQuery($limit: Int!, $offset: Int!) {
    allSanityBlog(
      sort: { fields: publishedAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        publishedAt
        slug {
          current
        }
        categories {
          title
          slug {
            current
          }
        }
        coverImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
function BlogList({ data, pageContext }) {
  // console.log(data);
  const { currentPage, numberOfPages } = pageContext;
  const blogs = data.allSanityBlog.nodes;
  return (
    <>
      <SEO title="Blogs"></SEO>
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <PageHeader
            title="Our Blog Posts"
            description="All the blogs are presented to this page, Happy Reading!"
          />
          <BlogGrid blogs={blogs} />
          {numberOfPages > 1 && (
            <Pagination
              currentPage={currentPage}
              numberOfPages={numberOfPages}
              baseURL="/blogs"
            />
          )}
        </div>
      </PageSpace>
    </>
  );
}

export default BlogList;
