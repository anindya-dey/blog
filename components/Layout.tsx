import React, { ReactNode } from "react";
import type {   } from "next/document";

import Header from "./Header";

type Props = {
    children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="min-h-screen items-center bg-gray-100 dark:bg-gray-700">
        <Header />
        {children}
      </div>
    </>
  );
}
