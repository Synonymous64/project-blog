import { graphql, useStaticQuery } from "gatsby";
import {FeaturedBlogsStyles} from '../../styles/homePage/FeaturedBlogsStyles'
import { SectionTitle } from "../TypoGraphy/Title";
import ParagraphText from "../TypoGraphy/ParagraphText";
import React from "react";
import BlogGrid from "../blog/BlogGrid";

function FeaturedBlogs() {
  const data = useStaticQuery(graphql`
    {
      allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
        nodes {
          blogs {
            title
            id
            publishedAt
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
            slug {
              current
            }
          }
        }
      }
    }
  `);
  const FeaturedBlogs = data.allSanityFeatured.nodes[0].blogs;
  // console.log(FeaturedBlogs);
  return (
    <FeaturedBlogsStyles> 
    <SectionTitle>Featured Blogs</SectionTitle>
    <ParagraphText className="featuredBlogs__text">
      This is our top Featured Blogs. Hope you enjoy reading our articles :)
    </ParagraphText>
    <BlogGrid blogs={FeaturedBlogs}></BlogGrid>
     </FeaturedBlogsStyles>
  )
}

export default FeaturedBlogs;
