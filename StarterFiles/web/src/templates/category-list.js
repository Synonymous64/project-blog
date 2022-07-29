import { graphql } from "gatsby";
import React from "react";
import PageHeader from "../components/PageHeader";
import PageSpace from "../components/PageSpace";
import SEO from "../components/SEO";
import CategoryGrid from "../components/category/CategoryGrid"
import Pagination from "../components/Pagination";
export const CategoryListQuery = graphql`
  query categoriesQuery($limit: Int!, $offset: Int!) {
    allSanityCategory(
      sort: { fields: _createdAt, order: DESC }
      limit: $limit
      skip: $offset
    ) {
      nodes {
        id
        title
        slug {
          current
        }
        _rawDescription
      }
    }
  }
`;
function CategoryList({ data, pageContext }) {
  const { currentPage, numberOfPages } = pageContext;
  const categories = data.allSanityCategory.nodes;
  // console.log(data);
  return (
    <>
      <SEO title="categoriesTitle"/>
        <PageSpace top={80} bottom={100}>
          <div className="container">
            <PageHeader
              title="All Categories"
              description="This are Our categories description"
            />
            <CategoryGrid categories={categories}/>
            {numberOfPages > 1 && (
                <Pagination
                currentPage={currentPage}
                numberOfPages={numberOfPages}
                baseURL="/categories"
                >
                </Pagination>
            )}
          </div>
        </PageSpace>
    </>
  );
}

export default CategoryList;
