import React from "react";

import { Header } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-hero bg-repeat-y">
        <Header />
        {children}
      </div>
    </>
  );
};

export default Layout;

