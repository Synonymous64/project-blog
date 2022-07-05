import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header/>
      {children}
    </>
  );
};

export default Layout;
