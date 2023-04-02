import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const c1 = "#071013",
  c2 = "#fffecb",
  c3 = "#20a4f3",
  c4 = "#1d2b35",
  c5 = "#fb232e",
  c6 = "#ffaa33";

export default function PageLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - My blog" : "My blog"}</title>
        <meta name="description" content="Code for fun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
          integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        <Header />
        <main className="container m-auto mt-4 px-4">{children}</main>
        <Footer
          bg_color={c4 + "f2"}
          normal_color={c2}
          icon_size={"calc(1rem + 1vw)"}
          horizontal_margin={"1vw"}
          horizontal_padding={"5vw"}
          vertical_padding={"1vw"}
          github={true}
          linkedin={true}
          medium={true}
          kaggle={true}
          quora={true}
          need_copy_right={true}
        />
      </div>
    </>
  );
}
