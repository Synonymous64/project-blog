import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import {AuthorItemStyles} from '../../styles/author/AuthorItemStyles'
import { Title } from "../TypoGraphy/Title";
function AuthorItem({profileImage, name, slug}) {
  return(
    <AuthorItemStyles to={slug.current} className="author-item">
    <GatsbyImage
    image={profileImage.asset.gatsbyImageData}
    alt={profileImage.asset.alt}
    className="profileImage"
    />
    <Title>{name}</Title>
    
    </AuthorItemStyles>
  ) 
}

export default AuthorItem;
