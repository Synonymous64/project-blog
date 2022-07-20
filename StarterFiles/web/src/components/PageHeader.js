import React from "react";
import { PageHeaderStyles } from "../styles/PageHeaderStyles";
import { SectionTitle } from "./TypoGraphy/Title";
import ParagraphText from "./TypoGraphy/ParagraphText";
function PageHeader({ title, description, className, children }) {
  return (
    <div className={className}>
      <PageHeaderStyles>
        <SectionTitle>{title}</SectionTitle>
        <ParagraphText>{description}</ParagraphText>
        {children}
      </PageHeaderStyles>
    </div>
  );
}

export default PageHeader;
