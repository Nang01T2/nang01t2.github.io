import Header from "@/components/Header";
import "prism-themes/themes/prism-atom-dark.css"; //for rehype-prism
//import "highlight.js/styles/github-dark.css"; //for rehype-highlight

import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="p-4 flex justify-center">{children}</div>
      </main>
    </>
  );
}