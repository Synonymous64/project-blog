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
  console.log(categories);
  return (
    <TopCategoriesStyles>
      <SectionTitle>Top Categories</SectionTitle>
      <ParagraphText className="info">
        Our tags and Categories to which our blogs are catagorized!
        Hope you enjoy :)
      </ParagraphText>
      <CategoryGrid 
      categories={categories}

      />
    </TopCategoriesStyles>
  );
}

export default TopCategories;
