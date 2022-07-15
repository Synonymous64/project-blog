import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { TopCategoriesStyles } from "../../styles/homePage/TopCategoriesStyles";
import ParagraphText from "../TypoGraphy/ParagraphText";
import { SectionTitle } from "../TypoGraphy/Title";
import CategoryGrid from "../category/CategoryGrid";
function TopCategories() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          category {
            id
            title
            slug {
              current
            }
            _rawDescription
          }
        }
      }
    }
  `);
  const categories = data.allSanityFeatured.nodes[0].category;
  // console.log(categories);
  return (
    <TopCategoriesStyles>
      <SectionTitle>Top Categories</SectionTitle>
      <ParagraphText className="info">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
        voluptate maxime et!
      </ParagraphText>
      <CategoryGrid 
      categories={categories}

      />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
