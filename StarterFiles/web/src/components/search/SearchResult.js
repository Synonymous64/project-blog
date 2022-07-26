import React from "react";
import { useFlexSearch } from "react-use-flexsearch";
import ParagraphText from "../TypoGraphy/ParagraphText";
import { BlogsSearchResultItem} from "./SearchResultItem";
import { CategoriesSearchResultItem } from "./SearchResultItem";
function SearchResult({
  searchQuery,
  blogsIndexStore,
  categoriesIndexStore,
  authorsIndexStore,
}) {
  // console.log({blogsIndexStore, categoriesIndexStore, authorsIndexStore});
  const blogsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(blogsIndexStore.index),
    blogsIndexStore.store
  );
  const categoriesResult = useFlexSearch(
    searchQuery,
    JSON.stringify(categoriesIndexStore.index),
    categoriesIndexStore.store
  );
  const authorsResult = useFlexSearch(
    searchQuery,
    JSON.stringify(authorsIndexStore.index),
    authorsIndexStore.store
  );
  //   console.log(blogsResult);
  if (
    blogsResult.length === 0 &&
    categoriesResult.length === 0 &&
    authorsResult.length === 0
  ) {
    return <ParagraphText>No Result Found :/</ParagraphText>;
  }
  return (
    <>
      {blogsResult.length > 0 && (
        <>
          <ParagraphText>Blogs</ParagraphText>
          {blogsResult.map((result) => (
            <BlogsSearchResultItem key={result.id} blog={result} />
          ))}
        </>
      )}
      {categoriesResult.length > 0 && (
        <>
          <ParagraphText>Categories</ParagraphText>
          {categoriesResult.map((result) => (
            <CategoriesSearchResultItem key={result.id} category={result}/>
          ))}
        </>
      )}
    </>
  );
}

export default SearchResult;
