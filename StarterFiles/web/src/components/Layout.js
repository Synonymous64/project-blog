import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";
import {SearchModalContextProvider} from "../context/searchModalContext";
import Search from "./search/SearchModal";
function Layout({ children }) {
  return (
    <SearchModalContextProvider>
      <GlobalStyles />
      <Search/>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </SearchModalContextProvider>
  );
};

export default Layout;
