import React from "react";
import { SearchFieldStyles } from "../../styles/search/SearchFieldStyles";
import {FiSearch} from 'react-icons/fi'
function SearchField({ value, setValue, onFocus }) {
  return (
    <SearchFieldStyles>
      <input
        type="text"
        placeholder="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={onFocus && onFocus}
      />
      <FiSearch className="searchIcon"/>
    </SearchFieldStyles>
  );
}

export default SearchField;
