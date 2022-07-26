import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { SearchResultItemStyles } from "../../styles/search/SearchResultItemStyles";
import { Title } from "../TypoGraphy/Title";
import ParagraphText from "../TypoGraphy/ParagraphText";
import { format } from "date-fns";
function BlogsSearchResultItem({ blog }) {
  return (
    <SearchResultItemStyles>
      <GatsbyImage
        image={blog.coverImage.asset.gatsbyImageData}
        className="img"
      />
      <div>
        <Title className="title">{blog.title}</Title>
        <ParagraphText className="categoriesText">
          {format(new Date(blog.publishedAt), "p, MMMM dd, yyyy")}
        </ParagraphText>
      </div>
    </SearchResultItemStyles>
  );
}

function CategoriesSearchResultItem({ category }) {
    return (
        <SearchResultItemStyles>
            <Title>{category.title}</Title>
        </SearchResultItemStyles>
    )
}
export { BlogsSearchResultItem, CategoriesSearchResultItem };
