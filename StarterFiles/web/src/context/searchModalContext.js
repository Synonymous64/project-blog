import React from "react";
import { useState,createContext, useMemo  } from "react";
const SearchModalContext = createContext();

const SearchModalContextProvider = ({ children }) => {
  const [ isSearchModalOpen, setIsSearchModalOpen ] = useState();

  const initialValue = useMemo(
    () => ({
      isSearchModalOpen,
      openSearchModal: () => {
        setIsSearchModalOpen(true);
      },
      closeSearchModal: () => {
        setIsSearchModalOpen(false);
      },
    }),
    [isSearchModalOpen]
  );
  return (
    <SearchModalContext.Provider value={initialValue}>
      {children}
    </SearchModalContext.Provider>
  );
};

export { SearchModalContext, SearchModalContextProvider };
