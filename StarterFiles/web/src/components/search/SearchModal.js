import React from "react";
import {SearchModalStyles} from "../../styles/search/SearchModalStyles";
import { MdClose } from "react-icons/md";
import ActionButton from "../buttons/ActionButton";
import { SearchModalContext } from "../../context/searchModalContext";
import { useContext, useState } from "react";
import SearchField from "./SearchField";
function Search() {
  const {isSearchModalOpen, closeSearchModal} = useContext(SearchModalContext);
  const [searchQuery, setSearchQuery] = useState ('');
  const handleOnFocus = () =>{
    console.log('focused');
  }
  if (!isSearchModalOpen) return null;
  return (
    <SearchModalStyles>
      <div className="modal__container">
        <ActionButton className="close" onClick={()=>closeSearchModal()}>
          <MdClose />
        </ActionButton>
        <SearchField
        
        value={searchQuery}
        setValue = {setSearchQuery}
        onFocus = {handleOnFocus}
        >
            
        </SearchField>
      </div>
    </SearchModalStyles>
  );
}

export default Search;
