import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <div className="min-h-screen items-center bg-gray-100 dark:bg-gray-700">
        <Header />
        {children}
      </div>
    </>
  );
}
