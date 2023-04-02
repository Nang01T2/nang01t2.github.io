import Head from "next/head";
import React from "react";
import Header from "./Header";

//import "prism-themes/themes/prism-atom-dark.css"; //for rehype-prism
//import "highlight.js/styles/darcula.css"; //for rehype-highlight

export default function MDXLayout({ children }) {
  return (
    <>
      <Head>
        {/* for rehype-highlight */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        />
      </Head>
      <Header service_title="PressBlog" />
      <main>
        <div className="p-4 flex justify-center">
          <div className="w-11/12 md:w-7/12 prose prose-table">{children}</div>
        </div>
      </main>
    </>
  );
}
