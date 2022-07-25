import React from "react";
import { SearchModalStyles } from "../../styles/search/SearchModalStyles";
import { MdClose } from "react-icons/md";
import ActionButton from "../buttons/ActionButton";
import { SearchModalContext } from "../../context/searchModalContext";
import { useContext, useState } from "react";
import SearchField from "./SearchField";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    localSearchBlogs {
      publicIndexURL
      publicStoreURL
    }
    localSearchAuthors {
      publicIndexURL
      publicStoreURL
    }
    localSearchCategories {
      publicIndexURL
      publicStoreURL
    }
  }
`;
function Search() {
  const { isSearchModalOpen, closeSearchModal } =
    useContext(SearchModalContext);
  const [searchQuery, setSearchQuery] = useState("");
  const data = useStaticQuery(query);
  // console.log(data);
  const {
    publicStoreURL: blogsPublicStoreURL,
    publicIndexURL: blogsPublicIndexURL,
  } = data.localSearchBlogs;
  const {
    publicStoreURL: categoriesPublicStoreURL,
    publicIndexURL: categoriesPublicIndexURL,
  } = data.localSearchCategories;
  const {
    publicStoreURL: authorsPublicStoreURL,
    publicIndexURL: authorsPublicIndexURL,
  } = data.localSearchAuthors;
  const handleOnFocus = () => {
    console.log("focused");
    //TODO -56:02
  };
  if (!isSearchModalOpen) return null;
  return (
    <SearchModalStyles>
      <div className="modal__container">
        <ActionButton className="close" onClick={() => closeSearchModal()}>
          <MdClose />
        </ActionButton>
        <SearchField
          value={searchQuery}
          setValue={setSearchQuery}
          onFocus={handleOnFocus}
        ></SearchField>
      </div>
    </SearchModalStyles>
  );
}

export default Search;
