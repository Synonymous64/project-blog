import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import BlogGrid from "../components/blog/BlogGrid";
import PageHeader from "../components/PageHeader";
import PageSpace from "../components/PageSpace";
import SEO from "../components/SEO";
import MyPortableText from "../components/TypoGraphy/MyPortableText";
import { SingleCategoryStyles } from "../styles/category/SingleCategoryStyles";
export const query = graphql`
  query SingleCategory($id: String!) {
    sanityCategory(id: { eq: $id }) {
      title
      _rawDescription
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
    }
    allSanityBlog(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
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
function SingleCategory({ data }) {
  // console.log(data);
  const category = data.sanityCategory;
  const blogs = data.allSanityBlog.nodes;
  return (
    <PageSpace top={80} bottom={100}>
      <SingleCategoryStyles>
        <div className="container">
          <SEO title={category.title} />
          <PageHeader title={category.title} className="pageHeader">
            <MyPortableText value={category._rawDescription} />
            <GatsbyImage
              image={category.coverImage.asset.gatsbyImageData}
              className="coverImage"
              alt={category.coverImage.alt}
            />
          </PageHeader>
          <BlogGrid blogs={blogs}></BlogGrid>
        </div>
      </SingleCategoryStyles>
    </PageSpace>
  );
}

export default SingleCategory;
