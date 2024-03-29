import { Link } from "gatsby";
import React from "react";
import { HeroSectionStyles } from "../../styles/homePage/HeroSectionStyles";
import Button from "../buttons/Button";
import ParagraphText from "../TypoGraphy/ParagraphText";
import { StaticImage } from "gatsby-plugin-image";
import { buttonTypes } from "../../constants/buttonTypes";
function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">
              Explore the world of technological advancements
            </h1>
            <ParagraphText className="hero__text">
            Praj-Blogs is a platform which keeps you updated with latest news and tech-related information.
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Explore Blogs
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/R.jpeg"
              alt="vr guy"
              placeholder="blurred"
              objectPosition="50% 30%"
            ></StaticImage>
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
