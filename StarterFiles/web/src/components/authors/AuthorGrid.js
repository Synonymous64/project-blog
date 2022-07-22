import React from "react";
import { AuthorGridStyles } from "../../styles/author/AuthorGridStyles";
import AuthorItem from "./AuthorItem";
function AuthorGrid({ authors }) {
  return (
    <AuthorGridStyles>
      {authors.map((author) => (
        <AuthorItem
          name={author.name}
          profileImage={author.profileImage}
          slug={author.slug}
        ></AuthorItem>
      ))}
    </AuthorGridStyles>
  );
}

export default AuthorGrid;
