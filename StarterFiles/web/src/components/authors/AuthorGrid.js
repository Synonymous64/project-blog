import React from "react";
import { AuthorGridStyles } from "../../styles/author/AuthorGridStyles";
import AuthorItem from "./AuthorItem";
function AuthorGrid({ authors }) {
  return (
    <AuthorGridStyles>
      {authors.map((item) => (
        <AuthorItem
          name={item.name}
          profileImage={item.profileImage}
          key={item.id}
          slug={item.slug}
        ></AuthorItem>
      ))}
    </AuthorGridStyles>
  );
}

export default AuthorGrid;
