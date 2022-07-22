import { graphql } from "gatsby";
import { SingleAuthorStyles } from "../styles/author/SingleAuthorStyles";
import React from "react";
import PageSpace from "../components/PageSpace";
import SEO from "../components/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import { Title } from "../components/TypoGraphy/Title";
import BlogGrid from '../components/blog/BlogGrid'
import MyPortableText from "../components/TypoGraphy/MyPortableText";
export const authorQuery = graphql`
  query SingleAuthorQuery($id: String!) {
    sanityAuthor(id: { eq: $id }) {
      name
      _rawBio
      profileImage {
        alt
        asset {
          gatsbyImageData
        }
      }
    }
    allSanityBlog(filter: { author: { id: { eq: $id } } }) {
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
function SingleAuthor({ data }) {
  //   console.log(data);
  const author = data.sanityAuthor;
  const blogs = data.allSanityBlog.nodes;
  return (
    <PageSpace top={80} bottom={100}>
      <SEO title={author.name}></SEO>
      <div className="container">
        <SingleAuthorStyles>
          <div className="author-header">
            <GatsbyImage
              image={author.profileImage.asset.gatsbyImageData}
              alt={author.profileImage.alt}
              className="profileImage"
            />
            <Title className="name">{author.name}</Title>
            <div className="bio">
                <MyPortableText 
                value={author._rawBio}
                ></MyPortableText>
            </div>
          </div>
            <hr className="hr" />
            <BlogGrid blogs={blogs}></BlogGrid>
        </SingleAuthorStyles>
      </div>
    </PageSpace>
  );
}

export default SingleAuthor;
