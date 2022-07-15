import React from "react";
import { PortableText } from "@portabletext/react";
import ParagraphText from "./ParagraphText";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/esm/styles/prism/darcula";
import { Title } from "./Title";
import sanityConfig from "../../../sanity-config,";
import { getImage, getImageDimensions } from "@sanity/asset-utils";
import customImage from "../../../../studio/schemas/objects/customImage";
import { getSanityImageData } from "../../Utils/getSanityImageData";
import { GatsbyImage } from "gatsby-plugin-image";
const myPortableTextComponent = {
  block: {
    normal: ({ children }) => <ParagraphText>{children}</ParagraphText>,
    h1: ({ children }) => <Title>{children}</Title>,
  },
  types: {
    customCode: ({ value }) => (
      <SyntaxHighlighter
        style={theme}
        className="bodyCode"
        language={value.code.language}
      >
        {String(value.code.code).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ),
    customImage: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset;
      const { width, height } = getImageDimensions(value);

      const image = {
        url: imageData.url,
        height,
        width,
      };
      const gatsbyImageData = getSanityImageData({
        image,
        layout: 'constrained',
      });
      return (
        <GatsbyImage
        image={gatsbyImageData}
        alt={value.alt}
        className="bodyImage"
        >

        </GatsbyImage>
      )

    },
  },
};
function MyPortableText({ value }) {
  return <PortableText value={value} components={myPortableTextComponent} />;
}

export default MyPortableText;
