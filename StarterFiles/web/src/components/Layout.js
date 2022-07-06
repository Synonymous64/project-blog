import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
