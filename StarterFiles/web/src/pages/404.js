import React from "react";
import PageSpace from "../components/PageSpace";
import { NotFoundPageStyles } from "../styles/NotFoundPageStyles";
import { SectionTitle } from "../components/TypoGraphy/Title";
import ParagraphText from "../components/TypoGraphy/ParagraphText";
import { Link } from "gatsby";
function NotFoundPage() {
  return (
    <PageSpace>
      <div className="container">
        <NotFoundPageStyles>
          <SectionTitle>404</SectionTitle>
          <ParagraphText>
            The page you are looking for is not found :/ <br /> Go Back to{" "}
            <Link to="/" className="link">
              Home Page
            </Link>
          </ParagraphText>
        </NotFoundPageStyles>
      </div>
    </PageSpace>
  );
}

export default NotFoundPage;
