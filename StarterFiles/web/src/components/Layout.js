import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Layout;
