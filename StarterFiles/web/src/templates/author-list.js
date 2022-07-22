import { graphql } from "gatsby";
import React from "react";
import AuthorGrid from "../components/authors/AuthorGrid";
import PageHeader from "../components/PageHeader";
import PageSpace from "../components/PageSpace";
import Pagination from "../components/Pagination";
import SEO from "../components/SEO";
export const AuthorsQuery = graphql`
  query authorsQuery($limit: Int!, $offset: Int!) {
    allSanityAuthor(limit: $limit, skip: $offset) {
      nodes {
        id
        name
        slug {
          current
        }
        profileImage {
          alt
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
function AuthorList({ data, pageContext }) {
  // console.log(data);
  const authors = data.allSanityAuthor.nodes;
  const { currentPage, numberOfPages } = pageContext;
  return (
    <PageSpace top={80} bottom={100}>
      <SEO title="Authors"></SEO>
      <div className="container">
        <PageHeader
          title="All Authors"
          description="This is about the authors who contributed to this blog-site"
        ></PageHeader>
        <AuthorGrid authors={authors} />
        {numberOfPages > 1 && (
          <Pagination
            baseURL="/authors"
            currentPage={currentPage}
            numberOfPages={numberOfPages}
          ></Pagination>
        )}
      </div>
    </PageSpace>
  );
}

export default AuthorList;
