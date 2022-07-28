import React from "react";
import MyPortableText from '../components/TypoGraphy/MyPortableText'
import {BiCategory} from 'react-icons/bi'
import ParagraphText from '../components/TypoGraphy/ParagraphText'
import PageSpace from "../components/PageSpace";
import {FiCalendar, FiUser} from 'react-icons/fi'
import { format } from "date-fns";
import { GatsbyImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Comments from "../components/Comments";
import {Title} from '../components/TypoGraphy/Title'
import { SingleBlogStyles } from "../styles/blog/SingleBlogStyles";
export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
      coverImage {
        alt
        asset {
          gatsbyImageData
        }
      }
      categories {
        title
        slug {
          current
        }
      }
      author {
        name
        slug {
          current
        }
      }
    }
  }
`;
function singleBlog({ data }) {
  const blog = data.sanityBlog;
  return (
    <SingleBlogStyles>
      <SEO title={blog.title} />
      <PageSpace top={80} bottom={100}>
      <div className="container">
        <div className="blog-header">
          <GatsbyImage image={blog.coverImage.asset.gatsbyImageData} alt={blog.coverImage.alt} className="blog-cover-image" />
          <Title className="title">{blog.title}</Title>
          <ParagraphText className="publishedAt">
          <FiCalendar/>
          {format(new Date(blog.publishedAt), 'p, MMMM dd yyyy') }</ParagraphText>
          <ParagraphText className="categoriesText">
            <BiCategory/>
            <span>
              {blog.categories.map((item, index)=>(
                <span key={item.slug.current}><Link to={`/categories/${item.slug.current}`}>
                {item.title}
                </Link>
                {index < blog.categories.length - 1 ? ', ' : ''}
                </span>
              ))}
            </span>
          </ParagraphText>
          <ParagraphText className="author">
            <FiUser/>
            <Link to={`/authors/${blog.author.slug.current}`}>

              {blog.author.name}
            </Link>
          </ParagraphText>
        </div>
        <hr className="hr"/>
        <div className="body">
          <MyPortableText value={blog._rawBody}></MyPortableText>
      </div>
    </div>
      </PageSpace>
    <Comments issueTerm={blog.title}/>
    </SingleBlogStyles>
  );
}

export default singleBlog;
