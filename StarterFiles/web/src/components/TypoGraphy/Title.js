import React from "react";
import {
  SectionTitleStyles,
  TitleStyles,
} from "../../styles/typography/SectionTitleStyles";
export const SectionTitle = ({ children, tag, ...props }) => {
  return (
    <SectionTitleStyles as={tag} {...props}>
      {children}
    </SectionTitleStyles>
  );
};
export const Title = ({ children, tag, ...props }) => {
  return (
    <TitleStyles as={tag} {...props}>
      {children}
    </TitleStyles>
  );
};
